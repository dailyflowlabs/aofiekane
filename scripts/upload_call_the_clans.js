const fs = require('fs');
const path = require('path');
const { getAccessToken } = require('/Users/benroberts/Sites/shorts-studio/publishers/youtube.js');

const VIDEO_PATH = '/Users/benroberts/Sites/aoife/videos/Aoife_Kane_Call_The_Clans_Hollywood_Pilot.mp4';
const THUMBNAIL_PATH = '/Users/benroberts/Sites/aoife/promotions/thumbnails/didot_top_left_champagne_gold_1080p.jpg';

const TITLE = 'Aoife Kane - CALL THE CLANS (Official Music Video)';

const DESCRIPTION = `The official music video for "CALL THE CLANS" by Aoife Kane.
Stream / Download "Call The Clans": https://www.aofiekane.com/music

"Call the clans from the hill and glen
We’re lighting the beacon fires again!"

⚔️ CONNECT WITH AOIFE KANE:
Official Website & Merch: https://www.aofiekane.com
Facebook: https://www.facebook.com/aofiekane/
YouTube: @aoifekanemusic

---
LYRICS:

[Intro]
Call the clans from the hill and glen
We’re lighting the beacon fires again!

[Verse 1]
We saw their riders upon the crest
Ten red banners against the west
They sent their terms in a letter sealed
Demanding every clan in the field
I tossed their paper upon the coals
Watched it burn like their greedy souls
We don’t take orders from foreign kings
We know the song that the heather sings

[Pre-Chorus]
If the clans want a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, call the clans
Put your fate into fearless hands
Hey now, sound the horn
This is the day that the free were born
Shield high, battle cry
Watch our banners against the sky
Hey now, call the clans
No one divides what this army plans!

[Verse 2]
The horses snorted in morning mist
I tightened the knot on my leather wrist
You said, “A clan is a living wall”
“Stand together, we never fall”
So we raised the pikes on the open heath
Kept the cold iron beneath the sheath
Until the moment the war horn spoke
And through their cavalry line we broke!

[Pre-Chorus]
If the clans want a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, call the clans
Put your fate into fearless hands
Hey now, sound the horn
This is the day that the free were born
Shield high, battle cry
Watch our banners against the sky
Hey now, call the clans
No one divides what this army plans!

[Bridge]
Bring the north and the south as one!
March till the battle is fought and won!
No brother forgotten, no sister behind
The fiercest army you’ll ever find!

[Breakdown]
Oh-oh, the war horn calls
Oh-oh, the empire falls
One clan, one flame
Say my name, say my name

[Final Chorus]
Hey now, call the clans
Put your fate into fearless hands
Hey now, sound the horn
This is the day that the free were born
Shield high, battle cry
Watch our banners against the sky
Hey now, call the clans
No one divides what this army plans!

[Outro]
Call the clans from the hill and glen
We are still standing, we win again!

---
CREDITS:
Artist: Aoife Kane
Track: Call the Clans
Album: Hold the Line
Directed & Produced by: Daily Flow Labs
Visual Pipeline: FLUX LoRA + Wan 2.1 / Wan 14B + Fal Sync Pro
Audio Master: 24-bit / 48kHz WAV
© 2026 Aoife Kane / Daily Flow Labs. All rights reserved.

#AoifeKane #CallTheClans #CelticPop #OfficialMusicVideo #CelticBattlePop #IrishMusic #HoldTheLine
`;

const TAGS = [
  'Aoife Kane',
  'Call the Clans',
  'Celtic Battle Pop',
  'Celtic Pop',
  'Irish Pop',
  'Official Music Video',
  'Celtic Music',
  'Scottish Highlands',
  'Celtic',
  'Folk Pop',
  'Irish Music 2026',
  'Hold the Line',
  'Braveheart Pop',
  'Epic Music Video',
  'Highlands',
  'Bagpipes',
  'Irish Fiddle'
];

async function main() {
  console.log('⚔️ Starting YouTube Private Upload for Aoife Kane: "Call the Clans"...');
  
  if (!fs.existsSync(VIDEO_PATH)) {
    throw new Error(`Master video file not found at: ${VIDEO_PATH}`);
  }
  if (!fs.existsSync(THUMBNAIL_PATH)) {
    throw new Error(`Thumbnail file not found at: ${THUMBNAIL_PATH}`);
  }

  const token = await getAccessToken('aoife');
  const videoBuffer = fs.readFileSync(VIDEO_PATH);
  const totalBytes = videoBuffer.length;
  console.log(`[✓] Authenticated with YouTube. Master video size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);

  const metadata = {
    snippet: {
      title: TITLE,
      description: DESCRIPTION,
      tags: TAGS,
      categoryId: '10' // Music
    },
    status: {
      privacyStatus: 'private', // Strictly PRIVATE
      selfDeclaredMadeForKids: false
    }
  };

  // 1. Resumable Session Init
  console.log('[*] Initializing resumable upload session...');
  const initRes = await fetch(
    'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Upload-Content-Length': String(totalBytes),
        'X-Upload-Content-Type': 'video/mp4'
      },
      body: JSON.stringify(metadata)
    }
  );

  if (!initRes.ok) {
    const errText = await initRes.text();
    throw new Error(`Resumable session initialization failed: ${initRes.status} - ${errText}`);
  }

  const uploadUrl = initRes.headers.get('Location') || initRes.headers.get('location');
  if (!uploadUrl) {
    throw new Error('No upload location header received from YouTube API');
  }
  console.log('[✓] Upload session established.');

  // 2. Chunked Resumable Upload (10MB chunks = 40 * 256KB)
  const CHUNK_SIZE = 10 * 1024 * 1024;
  let start = 0;
  let uploadedData = null;

  while (start < totalBytes) {
    const end = Math.min(start + CHUNK_SIZE, totalBytes);
    const chunk = videoBuffer.subarray(start, end);
    const contentRange = `bytes ${start}-${end - 1}/${totalBytes}`;
    const pct = ((start / totalBytes) * 100).toFixed(1);

    process.stdout.write(`[*] Uploading chunk: ${contentRange} (${pct}%)... `);

    const chunkRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': String(chunk.length),
        'Content-Range': contentRange
      },
      body: chunk
    });

    if (chunkRes.status === 308) {
      console.log('received 308 Resume Incomplete [OK]');
      start = end;
    } else if (chunkRes.ok) {
      console.log('completed! [200 OK]');
      uploadedData = await chunkRes.json();
      break;
    } else {
      const err = await chunkRes.text();
      throw new Error(`Upload failed at byte ${start}: ${chunkRes.status} - ${err}`);
    }
  }

  if (!uploadedData || !uploadedData.id) {
    throw new Error('Video upload completed but did not return a valid video ID');
  }

  const videoId = uploadedData.id;
  const videoUrl = `https://youtu.be/${videoId}`;
  const studioEditUrl = `https://studio.youtube.com/video/${videoId}/edit`;

  console.log(`\n🎉 MASTER VIDEO UPLOADED SUCCESSFULLY!`);
  console.log(`   Video ID:       ${videoId}`);
  console.log(`   Private URL:    ${videoUrl}`);
  console.log(`   Studio URL:     ${studioEditUrl}`);
  console.log(`   Privacy Status: ${uploadedData.status ? uploadedData.status.privacyStatus : 'private'}`);

  // 3. Upload Custom Thumbnail
  console.log('\n[*] Setting official 1080p custom thumbnail...');
  const thumbBuffer = fs.readFileSync(THUMBNAIL_PATH);
  const thumbRes = await fetch(
    `https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${videoId}&uploadType=media`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'image/jpeg',
        'Content-Length': String(thumbBuffer.length)
      },
      body: thumbBuffer
    }
  );

  if (!thumbRes.ok) {
    const thumbErr = await thumbRes.text();
    console.warn(`[!] Note: Custom thumbnail setting returned ${thumbRes.status}: ${thumbErr}`);
  } else {
    const thumbData = await thumbRes.json();
    console.log('[✓] Custom thumbnail set successfully!');
  }

  // 4. Verification Check
  console.log('\n[*] Verifying uploaded video details via YouTube API...');
  const verifyRes = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,status,contentDetails&id=${videoId}`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );
  if (verifyRes.ok) {
    const verifyData = await verifyRes.json();
    const item = verifyData.items && verifyData.items[0];
    if (item) {
      console.log(`[✓] Verified YouTube Title:    ${item.snippet.title}`);
      console.log(`[✓] Verified Privacy Status:   ${item.status.privacyStatus}`);
      console.log(`[✓] Verified Channel:          ${item.snippet.channelTitle}`);
    }
  }

  console.log('\n======================================================');
  console.log('✅ ALL OPERATIONS COMPLETED: Aoife Kane "Call the Clans"');
  console.log(`   Video Link: ${videoUrl}`);
  console.log(`   Studio URL: ${studioEditUrl}`);
  console.log('======================================================');
}

main().catch(err => {
  console.error('\n❌ Upload script error:', err);
  process.exit(1);
});
