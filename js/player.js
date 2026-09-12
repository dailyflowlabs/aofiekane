/**
 * AOIFE KANE — Celtic Audio Engine
 * HTML5 Audio + Web Audio API Visualizer
 */

(function () {
  'use strict';

  const tracks = [
    {
      id: 'hold-the-line',
      title: "Hold the Line",
      subtitle: "Title Track • Lead Single",
      tag: "Lead Single",
      duration: "3:54",
      src: "music/HOLD THE LINE.mp3",
      artwork: "music/01-hold-the-line.jpg",
      lyrics: `[Intro]
Raise the green, let the old hills hear
Boots on the earth, we are standing here

[Verse 1]
You tied your red thread round my wrist
Said, “Don’t look back when the gate swings wide”
I carried your name like a match in my fist
And a map of the river inside
The kettle shook on the iron plate
Your mother laughed, “Girl, don’t be late”
I kissed the dust from the windowsill
Then walked where the heather bends to the hill

[Pre-Chorus]
If the night wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, hold the line
Your hand in mine, your hand in mine
Hey now, hear us call
We rise together, we don’t fall
Green fire, wild desire
Higher, higher, take it higher
Hey now, hold the line
This ground is yours and this ground is mine

[Verse 2]
The foxglove leaned by the chapel door
While the rain wrote silver across the stone
You said, “Courage is more than a sword in the war”
“It’s choosing the road when you walk alone”
So I braided the storm through the tail of my hair
Put a bright brass pin where the wind could stare
No borrowed crown, no velvet throne
I came with a voice and I came as my own

[Pre-Chorus]
If the night wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, hold the line
Your hand in mine, your hand in mine
Hey now, hear us call
We rise together, we don’t fall
Green fire, wild desire
Higher, higher, take it higher
Hey now, hold the line
This ground is yours and this ground is mine

[Bridge]
Call every sister from the far side field
Bring every promise you refused to yield
No one behind us, no one alone
We make a kingdom wherever we go

[Breakdown]
Oh-oh, the river knows
Oh-oh, the mountain rolls
One heart, one flame
Say my name, say my name

[Final Chorus]
Hey now, hold the line
Your hand in mine, your hand in mine
Hey now, hear us call
We rise together, we don’t fall
Green fire, wild desire
Higher, higher, take it higher
Hey now, hold the line
This ground is yours and this ground is mine

[Outro]
Raise the green, let the old hills hear
We are still standing, we are still here`
    },
    {
      id: 'bones-in-the-peat',
      title: "Bones in the Peat",
      subtitle: "Track 02 • Celtic Stomp",
      tag: "Album Track",
      duration: "3:30",
      src: "music/BONES IN THE PEAT.mp3",
      artwork: "images/aoife-kane-02.jpg",
      lyrics: `[Intro]
Mmm-mmm...
Dig deep.

[Verse 1]
They said the bog don’t give up what it takes
Swallowed the cart and the iron gate
Buried the taxman beneath the fern
Some things you bury, some things you burn
I wore my jacket with the frayed lapel
Spit on the cobbles where the shadow fell
You thought the mud was a quiet bed
You never listened to the words I said

[Pre-Chorus]
The rain came down like a hammer strike
The black water rising along the dike
I’m not the ghost in your nursery rhyme
I am the reckoning right on time

[Chorus]
Dig down deep, boys, what did you keep?
There’s seven years of silver and my bones in the peat!
Call to the raven, call to the hound
Nothing stays buried when you walk this ground!
Oh, the bog don’t sleep
Dig down deep!
Oh, the bog don’t sleep
Bones in the peat!

[Verse 2]
The willow branches were scraping white
You counted coins by the lantern light
Swore on the Bible, then turned your back
Left me with ashes and a coat of black
Well, the moss grows thick where the blood ran cold
Tougher than iron and older than gold
Now every puddle’s got your guilty stare
Turn round quick—there’s nobody there

[Pre-Chorus]
The rain came down like a hammer strike
The black water rising along the dike
I’m not the ghost in your nursery rhyme
I am the reckoning right on time

[Chorus]
Dig down deep, boys, what did you keep?
There’s seven years of silver and my bones in the peat!
Call to the raven, call to the hound
Nothing stays buried when you walk this ground!
Oh, the bog don’t sleep
Dig down deep!
Oh, the bog don’t sleep
Bones in the peat!

[Bridge]
You can build your stone house high and wide
Stack up your locks on the heavy door
The peat knows what you tried to hide
And the water is coming through the floor!

[Final Chorus]
Dig down deep, boys, what did you keep?
There’s seven years of silver and my bones in the peat!
Call to the raven, call to the hound
Nothing stays buried when you walk this ground!
Oh, the bog don’t sleep
Dig down deep!
Oh, the bog don’t sleep
Bones in the peat!

[Outro]
Seven years of silver...
Under your feet.`
    },
    {
      id: 'the-wolf-and-the-hound',
      title: "The Wolf & The Hound",
      subtitle: "Track 03 • War Drum Anthem",
      tag: "Fan Favorite",
      duration: "3:39",
      src: "music/THE WOLF & THE HOUND.mp3",
      artwork: "music/03-the-wolf-and-the-hound.jpg",
      lyrics: `[Intro]
Run with the pack, let the hunters hear
We are the shadow they’ve learned to fear

[Verse 1]
We came from the ditch where the briars grow
Barefoot over the winter snow
You held your lantern against the pine
Said, “Every hill that you see is mine”
They brought their collars of polished brass
Thought they could fence in the mountain pass
We don’t kneel for a silver chain
We were born in the wind and we run in the rain

[Pre-Chorus]
If the dark wants a reckoning
Let it come, let it come
I’ve got the wild blood under my skin
And a heart like a drum

[Chorus]
Hey now, run with the hound
We take the mountain, we claim the ground
Hey now, hear us call
We rise together, we don’t fall
Teeth bare, wild glare
Thunder rolling through the air
Hey now, run with the hound
No cage is holding us off the ground!

[Verse 2]
The hawk circled high by the abbey stone
While the mist lay thick on the river bone
You said, “A chain only holds so long”
“Before the silent will find their song”
So we sharpened the truth on the river rock
Never ran from the hunter’s shock
No borrowed crown, no velvet throne
We made an army out of our own

[Pre-Chorus]
If the dark wants a reckoning
Let it come, let it come
I’ve got the wild blood under my skin
And a heart like a drum

[Chorus]
Hey now, run with the hound
We take the mountain, we claim the ground
Hey now, hear us call
We rise together, we don’t fall
Teeth bare, wild glare
Thunder rolling through the air
Hey now, run with the hound
No cage is holding us off the ground!

[Bridge]
Call every brother from the valley edge
Bring every promise and every pledge
Stand in the timber, stand in the gale
Our fire burns and it will not fail!

[Breakdown]
Oh-oh, the wolf knows
Oh-oh, the hound goes
One pack, one flame
Say my name, say my name

[Final Chorus]
Hey now, run with the hound
We take the mountain, we claim the ground
Hey now, hear us call
We rise together, we don’t fall
Teeth bare, wild glare
Thunder rolling through the air
Hey now, run with the hound
No cage is holding us off the ground!

[Outro]
Run with the pack, let the hunters hear
We are still standing, we are still here`
    },
    {
      id: 'blood-on-the-heather',
      title: "Blood on the Heather",
      subtitle: "Track 04 • Pipe Fanfare Anthem",
      tag: "Single",
      duration: "3:40",
      src: "music/BLOOD ON THE HEATHER.mp3",
      artwork: "music/04-red-thread-home.jpg",
      lyrics: `[Intro]
Crimson and gold on the morning hill
We are the storm that you cannot still

[Verse 1]
They drew their map with an iron pen
Sold the rivers and bought the men
Told us to barter our pride away
For three brass shillings a working day
I took the road by the western thorn
Carried the crest that my mother wore
We didn’t sow in the stony field
To watch our harvest surrender and yield

[Pre-Chorus]
If the night wants a reckoning
Let it come, let it come
I have the fire under my skin
And a heart like a drum

[Chorus]
Hey now, blood on the heather
Stand through the storm and the bitter weather
Hey now, hear the cry
We write our names in the open sky
Red spark, in the dark
Every arrow finds its mark
Hey now, blood on the heather
We rise as one and we stand together!

[Verse 2]
The bell rang out from the garrison wall
Counted the houses before the fall
You said, “Courage is more than rage”
“It’s breaking open an iron cage”
So we wove the flax with a steady hand
Left our footprint upon the sand
No quiet surrender, no lowered head
We walked the path where the brave had bled

[Pre-Chorus]
If the night wants a reckoning
Let it come, let it come
I have the fire under my skin
And a heart like a drum

[Chorus]
Hey now, blood on the heather
Stand through the storm and the bitter weather
Hey now, hear the cry
We write our names in the open sky
Red spark, in the dark
Every arrow finds its mark
Hey now, blood on the heather
We rise as one and we stand together!

[Bridge]
Sound the whistle across the glen
Call the women and call the men
From the high cliff down to the sea
We are the people who will be free!

[Breakdown]
Oh-oh, the mountain sings
Oh-oh, the iron rings
One pulse, one flame
Say my name, say my name

[Final Chorus]
Hey now, blood on the heather
Stand through the storm and the bitter weather
Hey now, hear the cry
We write our names in the open sky
Red spark, in the dark
Every arrow finds its mark
Hey now, blood on the heather
We rise as one and we stand together!

[Outro]
Crimson and gold on the morning hill
We are the storm that you cannot still`
    },
    {
      id: 'stand-to-the-stone',
      title: "Stand to the Stone",
      subtitle: "Track 05 • Choral Rally",
      tag: "Battle Anthem",
      duration: "3:35",
      src: "music/STAND TO THE STONE.mp3",
      artwork: "music/05-the-last-watch.jpg",
      lyrics: `[Intro]
Stand to the stone, let the valley wake!
Stand for the ground that they cannot take!

[Verse 1]
An ancient cross by the coastal ridge
Carved by hands that would burn the bridge
You brought your laws from across the sea
And tried to bury our history
I pressed my palms to the mossy grey
Felt the power that won’t decay
You have your armies and lines of steel
We have a spirit you cannot heal

[Pre-Chorus]
If the battle wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, stand to the stone
No borrowed crown and no velvet throne
Hey now, shout our claim
We are the spark and we are the flame
Green ground, battle sound
We won't be broken or pushed around
Hey now, stand to the stone
This land was never yours to own!

[Verse 2]
The tide washed high on the pebbled shore
Washing the blood from the days before
You said, “A stone doesn’t yield to tears”
“It stands unmoving through hundred years”
So we stood fast on the windy crest
Carried the courage inside our chest
Let every conqueror turn and see
The unbroken root of our pedigree

[Pre-Chorus]
If the battle wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, stand to the stone
No borrowed crown and no velvet throne
Hey now, shout our claim
We are the spark and we are the flame
Green ground, battle sound
We won't be broken or pushed around
Hey now, stand to the stone
This land was never yours to own!

[Bridge]
From the holy well to the northern spire
Pass the torch and pass the fire!
No turning back when the stone is cast
The future belongs to the ones who last!

[Breakdown]
Oh-oh, the stone remains
Oh-oh, we break the chains
One heart, one flame
Say my name, say my name

[Final Chorus]
Hey now, stand to the stone
No borrowed crown and no velvet throne
Hey now, shout our claim
We are the spark and we are the flame
Green ground, battle sound
We won't be broken or pushed around
Hey now, stand to the stone
This land was never yours to own!

[Outro]
Stand to the stone, let the valley wake
This is the ground that you cannot take`
    },
    {
      id: 'silver-and-ash',
      title: "Silver & Ash",
      subtitle: "Track 06 • Whistle Earworm",
      tag: "Viral Track",
      duration: "3:42",
      src: "music/Silver & Ash.mp3",
      artwork: "music/06-blackwater.jpg",
      lyrics: `[Intro]
Silver and ash in the winter air
We are the flame that they couldn’t scare

[Verse 1]
They set the torch to the harvest field
Thought that our hunger would make us yield
We gathered seeds from the blackened ground
And built a campfire that made no sound
You think destruction will make you king?
You never heard how the embers sing
We rise up stronger from every blaze
To dance right into the battle haze

[Pre-Chorus]
If the fire wants a reckoning
Let it come, let it come
I have lightning under my skin
And a heart like a drum

[Chorus]
Hey now, silver and ash
Dance in the fire and the lightning flash
Hey now, hear the shout
This is the flame that will not go out
Bright spark, wild and free
Light up the hills from the sky to sea
Hey now, silver and ash
We run the storm and we make the dash!

[Verse 2]
The grey smoke rolled down the chapel hill
The night was cold and the wind was still
You said, “A spark in the dry dead thorn”
“Can bring the light to the coldest morn”
So we took silver and forged our pin
Let all the beauty of fight begin
No ashes scattered upon the floor
We’re kicking open the furnace door!

[Pre-Chorus]
If the fire wants a reckoning
Let it come, let it come
I have lightning under my skin
And a heart like a drum

[Chorus]
Hey now, silver and ash
Dance in the fire and the lightning flash
Hey now, hear the shout
This is the flame that will not go out
Bright spark, wild and free
Light up the hills from the sky to sea
Hey now, silver and ash
We run the storm and we make the dash!

[Bridge]
Raise the banners through the smoke!
We are the people who never broke!
Higher and higher the red flames climb
This is our land and this is our time!

[Breakdown]
Oh-oh, the embers blow
Oh-oh, the highlands glow
One spark, one flame
Say my name, say my name

[Final Chorus]
Hey now, silver and ash
Dance in the fire and the lightning flash
Hey now, hear the shout
This is the flame that will not go out
Bright spark, wild and free
Light up the hills from the sky to sea
Hey now, silver and ash
We run the storm and we make the dash!

[Outro]
Silver and ash in the winter air
We are still standing, we are still there`
    },
    {
      id: 'brambles-and-steel',
      title: "Brambles & Steel",
      subtitle: "Track 07 • Bouzouki Groove",
      tag: "Folk Rock",
      duration: "3:33",
      src: "music/BRAMBLES & STEEL.mp3",
      artwork: "music/07-ash-and-honey.jpg",
      lyrics: `[Intro]
Brambles and steel on the border line
You took your road and we’re keeping mine

[Verse 1]
The wild briars tangled along the ditch
They came with iron to make them rich
Planted their hedges of sharpened wire
To keep the cattle from heart’s desire
I pulled the thorns from my bleeding palm
Walked through the gate with a steady calm
Your rusty iron won't stop the spring
Or quiet the battle the free will sing

[Pre-Chorus]
If the border wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, brambles and steel
Break every lock that we cannot heal
Hey now, hear us call
We rise together, we don’t fall
Green leaf, iron blade
We don't undo what our hands have made
Hey now, brambles and steel
This is the power you're gonna feel!

[Verse 2]
The rain drummed hard on the metal fence
You spoke of duty and common sense
You said, “The wire is here to stay”
I said, “The storm’s gonna wash it away”
So we took axes to every post
Raised up a toast to the ancient ghost
No border drawn by an empire’s hand
Will ever sever our promised land

[Pre-Chorus]
If the border wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, brambles and steel
Break every lock that we cannot heal
Hey now, hear us call
We rise together, we don’t fall
Green leaf, iron blade
We don't undo what our hands have made
Hey now, brambles and steel
This is the power you're gonna feel!

[Bridge]
Cut the wires and tear them down!
We walk in daylight through every town!
No barrier high enough to keep us out
Listen and hear what we sing about!

[Breakdown]
Oh-oh, the briars climb
Oh-oh, we take our time
One heart, one flame
Say my name, say my name

[Final Chorus]
Hey now, brambles and steel
Break every lock that we cannot heal
Hey now, hear us call
We rise together, we don’t fall
Green leaf, iron blade
We don't undo what our hands have made
Hey now, brambles and steel
This is the power you're gonna feel!

[Outro]
Brambles and steel on the border line
The ground is yours and the ground is mine`
    },
    {
      id: 'the-river-knows',
      title: "The River Knows",
      subtitle: "Track 08 • Low Whistle Anthem",
      tag: "Epic Surge",
      duration: "3:45",
      src: "music/THE RIVER KNOWS.mp3",
      artwork: "music/08-crow-road.jpg",
      lyrics: `[Intro]
The river knows where the water goes
From the mountain peak to the valley rose

[Verse 1]
We watched the flood from the Shannon shore
Where kings had gathered in years before
They built their dams out of stone and lime
To halt the water and halt the time
The rain came pounding against the slate
Broke every timber and swept the gate
You cannot govern the wild black stream
Or drown the fury of people's dream

[Pre-Chorus]
If the water wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, the river knows
Where the current runs and the torrent flows
Hey now, hear the roar
The water is pounding against your door
High tide, rising fast
The old domain isn’t gonna last
Hey now, the river knows
We wash you out when the wild wind blows!

[Verse 2]
The willow bent where the currents meet
The cold spray washing across our feet
You said, “A river will find its bed”
“No matter the words that the rulers said”
So we cast our nets in the swirling deep
Promises that we intend to keep
No dam of yours is gonna hold us back
We carve our own irresistible track

[Pre-Chorus]
If the water wants a reckoning
Let it come, let it come
I have thunder under my skin
And a heart like a drum

[Chorus]
Hey now, the river knows
Where the current runs and the torrent flows
Hey now, hear the roar
The water is pounding against your door
High tide, rising fast
The old domain isn’t gonna last
Hey now, the river knows
We wash you out when the wild wind blows!

[Bridge]
Let the torrent break every wall!
Let the castles crumble and fall!
We are the river that carves the stone
We take the country and claim our own!

[Breakdown]
Oh-oh, the water knows
Oh-oh, the river flows
One pulse, one flame
Say my name, say my name

[Final Chorus]
Hey now, the river knows
Where the current runs and the torrent flows
Hey now, hear the roar
The water is pounding against your door
High tide, rising fast
The old domain isn’t gonna last
Hey now, the river knows
We wash you out when the wild wind blows!

[Outro]
The river knows where the water goes
We are still standing, the river flows`
    },
    {
      id: 'call-the-clans',
      title: "Call the Clans",
      subtitle: "Track 09 • Fiddle Stabs & Pikes",
      tag: "Battle Cry",
      duration: "3:30",
      src: "music/CALL THE CLANS.mp3",
      artwork: "music/09-saints-in-the-rain.jpg",
      lyrics: `[Intro]
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
We are still standing, we win again!`
    },
    {
      id: 'we-are-still-here',
      title: "We Are Still Here",
      subtitle: "Track 10 • Grand Stadium Finale",
      tag: "Album Closer",
      duration: "3:40",
      src: "music/WE ARE STILL HERE.mp3",
      artwork: "music/10-keep-the-flame.jpg",
      lyrics: `[Intro]
Raise the green, let the old hills hear
Through the hundred years, we are standing here

[Verse 1]
They said that time would erase our name
Would wash the memory of our flame
They carved their borders upon our hill
And thought our voices would settle still
Look out the window and see the crowd
Singing the anthem out strong and loud
We built an empire without a throne
With just our music and hearts of stone

[Pre-Chorus]
If the world wants a reckoning
Let it come, let it come
I have the lightning under my skin
And a heart like a drum

[Chorus]
Hey now, we are still here
Sing it out for the world to hear
Hey now, hear us call
We rise together, we don’t fall
Green fire, wild desire
Higher, higher, take it higher
Hey now, we are still here
Nothing we loved is gonna disappear!

[Verse 2]
I walk the road where the ancestors trod
On mossy stones and the sacred sod
You told me, “Aoife, remember well”
“The story only the free can tell”
So I kept the red thread upon my wrist
Carried your name like a match in my fist
No borrowed crown, no velvet throne
We made this kingdom out of our own

[Pre-Chorus]
If the world wants a reckoning
Let it come, let it come
I have the lightning under my skin
And a heart like a drum

[Chorus]
Hey now, we are still here
Sing it out for the world to hear
Hey now, hear us call
We rise together, we don’t fall
Green fire, wild desire
Higher, higher, take it higher
Hey now, we are still here
Nothing we loved is gonna disappear!

[Bridge]
To every generation on this ground!
To every voice that refused to drown!
Raise the green from the hill to sea
This is who we were born to be!

[Breakdown]
Oh-oh, the river knows
Oh-oh, the mountain rolls
One heart, one flame
Say my name, say my name

[Final Chorus]
Hey now, we are still here
Sing it out for the world to hear
Hey now, hear us call
We rise together, we don’t fall
Green fire, wild desire
Higher, higher, take it higher
Hey now, we are still here
Nothing we loved is gonna disappear!

[Outro]
Raise the green, let the old hills hear
We are still standing...
We are still here!`
    }
  ];

  // DOM Elements
  const audio = document.getElementById('mainAudio');
  const playPauseMasterBtn = document.getElementById('playPauseMasterBtn');
  const prevTrackBtn = document.getElementById('prevTrackBtn');
  const nextTrackBtn = document.getElementById('nextTrackBtn');
  const loopTrackBtn = document.getElementById('loopTrackBtn');
  
  const scrubberTrack = document.getElementById('scrubberTrack');
  const scrubberFill = document.getElementById('scrubberFill');
  const currentTimeEl = document.getElementById('currentTime');
  const totalDurationEl = document.getElementById('totalDuration');
  const volumeSlider = document.getElementById('volumeSlider');
  
  const playerArtImg = document.getElementById('playerArtImg');
  const playerTrackTitle = document.getElementById('playerTrackTitle');
  const playerTrackArtist = document.getElementById('playerTrackArtist');
  const audioActiveBadge = document.getElementById('audioActiveBadge');
  const playlistContainer = document.getElementById('playlistContainer');

  // Mini Hero Player DOM
  const heroMiniTitle = document.getElementById('heroMiniTitle');
  const heroMiniThumb = document.getElementById('heroMiniThumb');
  const heroMiniPlayBtn = document.getElementById('heroMiniPlayBtn');
  const heroMiniSubtitle = document.getElementById('heroMiniSubtitle');
  const floatingTrackInfo = document.getElementById('floatingPlayerTrackInfo');

  // Lyrics Modal DOM
  const lyricsModal = document.getElementById('lyricsModal');
  const lyricsModalTitle = document.getElementById('lyricsModalTitle');
  const lyricsModalContent = document.getElementById('lyricsModalContent');

  let currentTrackIdx = 0;
  let isPlaying = false;
  let isLooping = false;
  let audioCtx, analyser, dataArray, bufferLength;
  let visualizerInitialized = false;

  // Initialize Playlist UI
  function initPlaylist() {
    playlistContainer.innerHTML = '';
    tracks.forEach((t, i) => {
      const item = document.createElement('div');
      item.className = `track-item ${i === currentTrackIdx ? 'active' : ''}`;
      item.dataset.index = i;
      item.innerHTML = `
        <span class="track-item-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="track-item-details">
          <span class="track-item-title">${t.title}</span>
          <span class="track-item-tag">${t.tag}</span>
        </div>
        <span class="track-item-duration">${t.duration}</span>
      `;
      item.addEventListener('click', () => {
        loadTrack(i, true);
      });
      playlistContainer.appendChild(item);
    });
  }

  // Load a track
  function loadTrack(idx, autoPlay = false) {
    currentTrackIdx = idx;
    const t = tracks[idx];
    audio.src = t.src;
    
    // Update main player metadata
    playerArtImg.src = t.artwork;
    playerTrackTitle.textContent = t.title;
    playerTrackArtist.textContent = `Aoife Kane • ${t.subtitle}`;
    totalDurationEl.textContent = t.duration;
    currentTimeEl.textContent = '0:00';
    scrubberFill.style.width = '0%';

    // Update Hero Mini Player
    if (heroMiniTitle) heroMiniTitle.textContent = t.title;
    if (heroMiniThumb) heroMiniThumb.src = t.artwork;
    if (heroMiniSubtitle) heroMiniSubtitle.textContent = "Track " + String(idx + 1).padStart(2, "0") + " • " + (t.tag || "Anthem");

    // Update Playlist highlight
    document.querySelectorAll('.track-item').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });

    if (autoPlay) {
      playAudio();
    }
  }

  // Play Audio
  function playAudio() {
    initAudioContext();
    audio.play().then(() => {
      isPlaying = true;
      updatePlayIcons(true);
      if (audioActiveBadge) audioActiveBadge.classList.add('active');
    }).catch(err => {
      console.warn('Playback error:', err);
    });
  }

  // Pause Audio
  function pauseAudio() {
    audio.pause();
    isPlaying = false;
    updatePlayIcons(false);
    if (audioActiveBadge) audioActiveBadge.classList.remove('active');
  }

  // Toggle Play/Pause
  function togglePlayPause() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  // Next / Previous
  function nextTrack() {
    let nextIdx = (currentTrackIdx + 1) % tracks.length;
    loadTrack(nextIdx, isPlaying);
  }

  function prevTrack() {
    let prevIdx = (currentTrackIdx - 1 + tracks.length) % tracks.length;
    loadTrack(prevIdx, isPlaying);
  }

  // Update Buttons
  function updatePlayIcons(playing) {
    const playIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20" /></svg>`;
    const pauseIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;

    if (playPauseMasterBtn) playPauseMasterBtn.innerHTML = playing ? pauseIcon : playIcon;
    if (heroMiniPlayBtn) heroMiniPlayBtn.innerHTML = playing ? pauseIcon : playIcon;
  }

  // Format time (seconds -> m:ss)
  function formatTime(s) {
    if (isNaN(s)) return '0:00';
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Audio Events
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      scrubberFill.style.width = `${pct}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener('ended', () => {
    if (isLooping) {
      audio.currentTime = 0;
      audio.play();
    } else {
      nextTrack();
    }
  });

  // Scrubber seeking
  if (scrubberTrack) {
    scrubberTrack.addEventListener('click', (e) => {
      const rect = scrubberTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const seekRatio = Math.max(0, Math.min(1, clickX / width));
      if (audio.duration) {
        audio.currentTime = seekRatio * audio.duration;
      }
    });
  }

  // Volume slider
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      audio.volume = e.target.value;
    });
  }

  // Loop button
  if (loopTrackBtn) {
    loopTrackBtn.addEventListener('click', () => {
      isLooping = !isLooping;
      loopTrackBtn.style.color = isLooping ? 'var(--emerald-bright)' : 'var(--text-secondary)';
    });
  }

  // Event Listeners
  if (playPauseMasterBtn) playPauseMasterBtn.addEventListener('click', togglePlayPause);
  if (heroMiniPlayBtn) heroMiniPlayBtn.addEventListener('click', togglePlayPause);
  if (floatingTrackInfo) {
    floatingTrackInfo.addEventListener('click', () => {
      const musicSec = document.getElementById('music');
      if (musicSec) musicSec.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (prevTrackBtn) prevTrackBtn.addEventListener('click', prevTrack);
  if (nextTrackBtn) nextTrackBtn.addEventListener('click', nextTrack);

  // Global Quick Hero Action
  const heroStreamNowBtn = document.getElementById('heroStreamNowBtn');
  if (heroStreamNowBtn) {
    heroStreamNowBtn.addEventListener('click', () => {
      loadTrack(0, true);
      const musicSec = document.getElementById('music');
      if (musicSec) musicSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Lyrics Modal Controls
  const openLyricsBtn = document.getElementById('openLyricsBtn');
  if (openLyricsBtn) {
    openLyricsBtn.addEventListener('click', () => {
      const t = tracks[currentTrackIdx];
      lyricsModalTitle.textContent = `${t.title} — Lyrics`;
      lyricsModalContent.textContent = t.lyrics;
      lyricsModal.classList.add('open');
    });
  }

  // Web Audio API Visualizer
  function initAudioContext() {
    if (visualizerInitialized) return;
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtxClass();
      const source = audioCtx.createMediaElementSource(audio);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
      visualizerInitialized = true;
      drawVisualizer();
    } catch (e) {
      console.warn('Web Audio visualizer unavailable:', e);
    }
  }

  function drawVisualizer() {
    const canvas = document.getElementById('visualizerCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      if (!analyser) return;

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height;

        const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
        grad.addColorStop(0, '#10b981');
        grad.addColorStop(1, '#e5c158');

        ctx.fillStyle = grad;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);

        x += barWidth;
      }
    }
    renderFrame();
  }

  // Spacebar play/pause
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      togglePlayPause();
    }
  });

  // Expose global controller
  window.AoifePlayer = {
    loadTrack,
    play: playAudio,
    pause: pauseAudio,
    tracks
  };

  // Initial load
  initPlaylist();
  loadTrack(0, false);

})();
