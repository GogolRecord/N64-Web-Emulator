// Add cover image URLs (replace with your own actual paths)
// Complete N64 Games List - All games from your ROM directory
const games = [
  // N64 GAMES
  {
    title: "007: The World Is Not Enough",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/1068-1.jpg",
    rom: "games/N64/007 - The World Is Not Enough (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Madden Football 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/56-1.jpg",
    rom: "games/N64/Madden Football 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Madden NFL 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4153-1.jpg",
    rom: "games/N64/Madden NFL 2000 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Madden NFL 2001",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4154-1.jpg",
    rom: "games/N64/Madden NFL 2001 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Madden NFL 2002",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4155-1.jpg",
    rom: "games/N64/Madden NFL 2002 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Madden NFL 99",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/57-1.jpg",
    rom: "games/N64/Madden NFL 99 (USA) (Rev 1).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Magical Tetris Challenge",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4156-1.jpg",
    rom: "games/N64/Magical Tetris Challenge (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Major League Baseball featuring Ken Griffey Jr.",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/58-1.jpg",
    rom: "games/N64/Major League Baseball featuring Ken Griffey Jr. (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Mario Golf",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/59-1.jpg",
    rom: "games/N64/Mario Golf (USA).z64",
    core: "n64",
    size: "12MB",
    region: "NTSC"
  },
  {
    title: "Mario Kart 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/60-1.jpg",
    rom: "games/N64/Mario Kart 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Mario Party",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/61-1.jpg",
    rom: "games/N64/Mario Party (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Mario Party 2",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/62-1.jpg",
    rom: "games/N64/Mario Party 2 (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Mario Party 3",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/63-1.jpg",
    rom: "games/N64/Mario Party 3 (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Mario Tennis",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/64-1.jpg",
    rom: "games/N64/Mario Tennis (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Mega Man 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/65-1.jpg",
    rom: "games/N64/Mega Man 64 (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Mia Hamm Soccer 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4157-1.jpg",
    rom: "games/N64/Mia Hamm Soccer 64 (USA) (En,Es).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Mickey's Speedway USA",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4158-1.jpg",
    rom: "games/N64/Mickey's Speedway USA (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Micro Machines 64 Turbo",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4159-1.jpg",
    rom: "games/N64/Micro Machines 64 Turbo (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Midway's Greatest Arcade Hits - Volume 1",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4160-1.jpg",
    rom: "games/N64/Midway's Greatest Arcade Hits - Volume 1 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Mike Piazza's Strike Zone",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4161-1.jpg",
    rom: "games/N64/Mike Piazza's Strike Zone (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Milo's Astro Lanes",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4162-1.jpg",
    rom: "games/N64/Milo's Astro Lanes (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "AeroFighters Assault",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4078-1.jpg",
    rom: "games/N64/AeroFighters Assault (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "AeroGauge",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4079-1.jpg",
    rom: "games/N64/AeroGauge (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Aidyn Chronicles: The First Mage",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4080-1.jpg",
    rom: "games/N64/Aidyn Chronicles - The First Mage (USA) (Rev 1).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Airboarder 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/11544-1.jpg",
    rom: "games/N64/Airboarder 64 (Europe).z64",
    core: "n64",
    size: "8MB",
    region: "PAL"
  },
  {
    title: "All Star Tennis 99",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4081-1.jpg",
    rom: "games/N64/All Star Tennis 99 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "All-Star Baseball 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4082-1.jpg",
    rom: "games/N64/All-Star Baseball 2000 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "All-Star Baseball 2001",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4083-1.jpg",
    rom: "games/N64/All-Star Baseball 2001 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "All-Star Baseball 99",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4084-1.jpg",
    rom: "games/N64/All-Star Baseball 99 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Armorines: Project S.W.A.R.M.",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4085-1.jpg",
    rom: "games/N64/Armorines - Project S.W.A.R.M. (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Army Men: Air Combat",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4086-1.jpg",
    rom: "games/N64/Army Men - Air Combat (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Army Men: Sarge's Heroes",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4087-1.jpg",
    rom: "games/N64/Army Men - Sarge's Heroes (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Army Men: Sarge's Heroes 2",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4088-1.jpg",
    rom: "games/N64/Army Men - Sarge's Heroes 2 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Asteroids Hyper 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4089-1.jpg",
    rom: "games/N64/Asteroids Hyper 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Automobili Lamborghini",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4090-1.jpg",
    rom: "games/N64/Automobili Lamborghini (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Banjo-Kazooie",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/9-1.jpg",
    rom: "games/N64/Banjo-Kazooie (USA) (Rev 1).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Banjo-Tooie",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/10-1.jpg",
    rom: "games/N64/Banjo-Tooie (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Bassmasters 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4091-1.jpg",
    rom: "games/N64/Bassmasters 2000 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Batman Beyond: Return of the Joker",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4092-1.jpg",
    rom: "games/N64/Batman Beyond - Return of the Joker (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "BattleTanx",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4093-1.jpg",
    rom: "games/N64/BattleTanx (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "BattleTanx: Global Assault",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4094-1.jpg",
    rom: "games/N64/BattleTanx - Global Assault (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Battlezone: Rise of the Black Dogs",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4095-1.jpg",
    rom: "games/N64/Battlezone - Rise of the Black Dogs (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Beetle Adventure Racing!",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4096-1.jpg",
    rom: "games/N64/Beetle Adventure Racing! (USA) (En,Fr,De).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Big Mountain 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4097-1.jpg",
    rom: "games/N64/Big Mountain 2000 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Bio F.R.E.A.K.S.",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4098-1.jpg",
    rom: "games/N64/Bio F.R.E.A.K.S. (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Blast Corps",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/11-1.jpg",
    rom: "games/N64/Blast Corps (USA) (Rev 1).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Blues Brothers 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4099-1.jpg",
    rom: "games/N64/Blues Brothers 2000 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Body Harvest",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4100-1.jpg",
    rom: "games/N64/Body Harvest (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Bomberman 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/12-1.jpg",
    rom: "games/N64/Bomberman 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Bomberman 64: The Second Attack!",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/13-1.jpg",
    rom: "games/N64/Bomberman 64 - The Second Attack! (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Bomberman Hero",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/14-1.jpg",
    rom: "games/N64/Bomberman Hero (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Bottom of the 9th",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4101-1.jpg",
    rom: "games/N64/Bottom of the 9th (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Brunswick Circuit Pro Bowling",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4102-1.jpg",
    rom: "games/N64/Brunswick Circuit Pro Bowling (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Buck Bumble",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4103-1.jpg",
    rom: "games/N64/Buck Bumble (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "A Bug's Life",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4104-1.jpg",
    rom: "games/N64/Bug's Life, A (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Bust-A-Move '99",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4105-1.jpg",
    rom: "games/N64/Bust-A-Move '99 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Bust-A-Move 2: Arcade Edition",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4106-1.jpg",
    rom: "games/N64/Bust-A-Move 2 - Arcade Edition (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "California Speed",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4107-1.jpg",
    rom: "games/N64/California Speed (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Carmageddon 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4108-1.jpg",
    rom: "games/N64/Carmageddon 64 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Castlevania",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15-1.jpg",
    rom: "games/N64/Castlevania (USA) (Rev 2).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Castlevania: Legacy of Darkness",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16-1.jpg",
    rom: "games/N64/Castlevania - Legacy of Darkness (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Centre Court Tennis",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/14571-1.jpg",
    rom: "games/N64/Centre Court Tennis (Europe).z64",
    core: "n64",
    size: "8MB",
    region: "PAL"
  },
  {
    title: "Chameleon Twist",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/17-1.jpg",
    rom: "games/N64/Chameleon Twist (USA) (Rev 1).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Chameleon Twist 2",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/18-1.jpg",
    rom: "games/N64/Chameleon Twist 2 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Charlie Blast's Territory",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4109-1.jpg",
    rom: "games/N64/Charlie Blast's Territory (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Chopper Attack",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4110-1.jpg",
    rom: "games/N64/Chopper Attack (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Clay Fighter: Sculptor's Cut",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4111-1.jpg",
    rom: "games/N64/Clay Fighter - Sculptor's Cut (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Clay Fighter 63 1/3",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/19-1.jpg",
    rom: "games/N64/Clay Fighter 63 1-3 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Command & Conquer",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4112-1.jpg",
    rom: "games/N64/Command & Conquer (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Conker's Bad Fur Day",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/20-1.jpg",
    rom: "games/N64/Conker's Bad Fur Day (USA).z64",
    core: "n64",
    size: "64MB",
    region: "NTSC"
  },
  {
    title: "Cruis'n Exotica",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4113-1.jpg",
    rom: "games/N64/Cruis'n Exotica (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Cruis'n USA",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/21-1.jpg",
    rom: "games/N64/Cruis'n USA (USA) (Rev 2).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Cruis'n World",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/22-1.jpg",
    rom: "games/N64/Cruis'n World (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "CyberTiger",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4114-1.jpg",
    rom: "games/N64/CyberTiger (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Dark Rift",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/23-1.jpg",
    rom: "games/N64/Dark Rift (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Deadly Arts",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4115-1.jpg",
    rom: "games/N64/Deadly Arts (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Destruction Derby 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4116-1.jpg",
    rom: "games/N64/Destruction Derby 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Diddy Kong Racing",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/24-1.jpg",
    rom: "games/N64/Diddy Kong Racing (USA) (En,Fr) (Rev 1).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Donald Duck: Goin' Quackers",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4117-1.jpg",
    rom: "games/N64/Donald Duck - Goin' Quackers (USA) (En,Fr,De,Es,It).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Donkey Kong 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/25-1.jpg",
    rom: "games/N64/Donkey Kong 64 (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Doom 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/26-1.jpg",
    rom: "games/N64/Doom 64 (USA) (Rev 1).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Dr. Mario 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/27-1.jpg",
    rom: "games/N64/Dr. Mario 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Super Mario 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/27-1.jpg",
    rom: "games/N64/Super Mario 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Dual Heroes",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4118-1.jpg",
    rom: "games/N64/Dual Heroes (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Duck Dodgers Starring Daffy Duck",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4119-1.jpg",
    rom: "games/N64/Duck Dodgers Starring Daffy Duck (USA) (En,Fr,Es).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Duke Nukem: Zero Hour",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4120-1.jpg",
    rom: "games/N64/Duke Nukem - Zero Hour (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Duke Nukem 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/28-1.jpg",
    rom: "games/N64/Duke Nukem 64 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "ECW Hardcore Revolution",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4121-1.jpg",
    rom: "games/N64/ECW Hardcore Revolution (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Earthworm Jim 3D",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/29-1.jpg",
    rom: "games/N64/Earthworm Jim 3D (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Excitebike 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/30-1.jpg",
    rom: "games/N64/Excitebike 64 (USA) (Rev 1).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Extreme-G",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/31-1.jpg",
    rom: "games/N64/Extreme-G (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Extreme-G XG2",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/32-1.jpg",
    rom: "games/N64/Extreme-G XG2 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "F-1 World Grand Prix",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/33-1.jpg",
    rom: "games/N64/F-1 World Grand Prix (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "F-1 World Grand Prix II",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/14574-1.jpg",
    rom: "games/N64/F-1 World Grand Prix II (Europe) (En,Fr,De,Es).z64",
    core: "n64",
    size: "16MB",
    region: "PAL"
  },
  {
    title: "F-Zero X",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/34-1.jpg",
    rom: "games/N64/F-Zero X (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "F1 Pole Position 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4122-1.jpg",
    rom: "games/N64/F1 Pole Position 64 (USA) (En,Fr,De).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "F1 Racing Championship",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/14575-1.jpg",
    rom: "games/N64/F1 Racing Championship (Europe) (En,Fr,De,Es,It).z64",
    core: "n64",
    size: "16MB",
    region: "PAL"
  },
  {
    title: "FIFA: Road to World Cup 98",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4123-1.jpg",
    rom: "games/N64/FIFA - Road to World Cup 98 (USA) (En,Fr,De,Es,It,Nl,Sv).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "FIFA 99",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4124-1.jpg",
    rom: "games/N64/FIFA 99 (USA) (En,Fr,De,Es,It,Nl,Pt,Sv).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "FIFA Soccer 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/35-1.jpg",
    rom: "games/N64/FIFA Soccer 64 (USA) (En,Fr,De).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Fighter Destiny 2",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4125-1.jpg",
    rom: "games/N64/Fighter Destiny 2 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Fighters Destiny",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/36-1.jpg",
    rom: "games/N64/Fighters Destiny (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Fighting Force 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4126-1.jpg",
    rom: "games/N64/Fighting Force 64 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Flying Dragon",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4127-1.jpg",
    rom: "games/N64/Flying Dragon (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Forsaken 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4128-1.jpg",
    rom: "games/N64/Forsaken 64 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Fox Sports College Hoops '99",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4129-1.jpg",
    rom: "games/N64/Fox Sports College Hoops '99 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "GT 64: Championship Edition",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4130-1.jpg",
    rom: "games/N64/GT 64 - Championship Edition (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "GameBooster 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4131-1.jpg",
    rom: "games/N64/GameBooster 64 (USA) (v1.1) (Unl).bin",
    core: "n64",
    size: "1MB",
    region: "NTSC"
  },
  {
    title: "GameShark Pro",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4132-1.jpg",
    rom: "games/N64/GameShark Pro (USA) (v3.3) (Unl).bin",
    core: "n64",
    size: "1MB",
    region: "NTSC"
  },
  {
    title: "Gauntlet Legends",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/37-1.jpg",
    rom: "games/N64/Gauntlet Legends (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Gex 3: Deep Cover Gecko",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4133-1.jpg",
    rom: "games/N64/Gex 3 - Deep Cover Gecko (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Gex 64: Enter the Gecko",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/38-1.jpg",
    rom: "games/N64/Gex 64 - Enter the Gecko (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Glover",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/39-1.jpg",
    rom: "games/N64/Glover (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Goemon's Great Adventure",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4134-1.jpg",
    rom: "games/N64/Goemon's Great Adventure (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Golden Nugget 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4135-1.jpg",
    rom: "games/N64/Golden Nugget 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "GoldenEye 007",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/40-1.jpg",
    rom: "games/N64/GoldenEye 007 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Harvest Moon 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/41-1.jpg",
    rom: "games/N64/Harvest Moon 64 (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Hercules: The Legendary Journeys",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4136-1.jpg",
    rom: "games/N64/Hercules - The Legendary Journeys (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Hexen",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/42-1.jpg",
    rom: "games/N64/Hexen (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Hey You, Pikachu!",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/43-1.jpg",
    rom: "games/N64/Hey You, Pikachu! (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Hot Wheels: Turbo Racing",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4137-1.jpg",
    rom: "games/N64/Hot Wheels - Turbo Racing (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Hybrid Heaven",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/44-1.jpg",
    rom: "games/N64/Hybrid Heaven (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Hydro Thunder",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4138-1.jpg",
    rom: "games/N64/Hydro Thunder (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Iggy's Reckin' Balls",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/45-1.jpg",
    rom: "games/N64/Iggy's Reckin' Balls (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "In-Fisherman: Bass Hunter 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4139-1.jpg",
    rom: "games/N64/In-Fisherman - Bass Hunter 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Indiana Jones and the Infernal Machine",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4140-1.jpg",
    rom: "games/N64/Indiana Jones and the Infernal Machine (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Indy Racing 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4141-1.jpg",
    rom: "games/N64/Indy Racing 2000 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "International Superstar Soccer '98",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/46-1.jpg",
    rom: "games/N64/International Superstar Soccer '98 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "International Superstar Soccer 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4142-1.jpg",
    rom: "games/N64/International Superstar Soccer 2000 (USA) (En,Es) (Rev 1).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "International Superstar Soccer 64",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/47-1.jpg",
    rom: "games/N64/International Superstar Soccer 64 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "International Track & Field 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4143-1.jpg",
    rom: "games/N64/International Track & Field 2000 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Jeopardy!",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4144-1.jpg",
    rom: "games/N64/Jeopardy! (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Jeremy McGrath Supercross 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4145-1.jpg",
    rom: "games/N64/Jeremy McGrath Supercross 2000 (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Jet Force Gemini",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/48-1.jpg",
    rom: "games/N64/Jet Force Gemini (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "John Romero's Daikatana",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4146-1.jpg",
    rom: "games/N64/John Romero's Daikatana (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Ken Griffey Jr.'s Slugfest",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4147-1.jpg",
    rom: "games/N64/Ken Griffey Jr.'s Slugfest (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Killer Instinct Gold",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/49-1.jpg",
    rom: "games/N64/Killer Instinct Gold (USA) (Rev 2).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Kirby 64: The Crystal Shards",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/50-1.jpg",
    rom: "games/N64/Kirby 64 - The Crystal Shards (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Knife Edge: Nose Gunner",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4148-1.jpg",
    rom: "games/N64/Knife Edge - Nose Gunner (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Knockout Kings 2000",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4149-1.jpg",
    rom: "games/N64/Knockout Kings 2000 (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "Kobe Bryant in NBA Courtside",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/51-1.jpg",
    rom: "games/N64/Kobe Bryant in NBA Courtside (USA).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "LEGO Racers",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4150-1.jpg",
    rom: "games/N64/LEGO Racers (USA) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi).z64",
    core: "n64",
    size: "16MB",
    region: "NTSC"
  },
  {
    title: "The Legend of Zelda: Majora's Mask",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/52-1.jpg",
    rom: "games/N64/Legend of Zelda, The - Majora's Mask (USA).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "The Legend of Zelda: Ocarina of Time",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/53-1.jpg",
    rom: "games/N64/Legend of Zelda, The - Ocarina of Time (USA) (Rev 2).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "The Legend of Zelda: Ocarina of Time - Master Quest",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/54-1.jpg",
    rom: "games/N64/Legend of Zelda, The - Ocarina of Time - Master Quest (USA) (GameCube).z64",
    core: "n64",
    size: "32MB",
    region: "NTSC"
  },
  {
    title: "Lode Runner 3-D",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4151-1.jpg",
    rom: "games/N64/Lode Runner 3-D (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "MRC: Multi-Racing Championship",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/4152-1.jpg",
    rom: "games/N64/MRC - Multi-Racing Championship (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },
  {
    title: "Mace: The Dark Age",
    system: "N64",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/55-1.jpg",
    rom: "games/N64/Mace - The Dark Age (USA).z64",
    core: "n64",
    size: "8MB",
    region: "NTSC"
  },

  // DS GAMES
  {
    title: "Bangai-O Spirits",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15043-1.jpg",
    rom: "games/DS/01. Bangai-O Spirits (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "The Legendary Starfy",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15041-1.jpg",
    rom: "games/DS/02. The Legendary Starfy (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mario Kart DS",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15036-1.jpg",
    rom: "games/DS/03. Mario Kart DS (USA) (En,Fr,De,Es,It).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Castlevania - Dawn of Sorrow",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15033-1.jpg",
    rom: "games/DS/04. Castlevania - Dawn of Sorrow (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "New Super Mario Bros.",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15035-1.jpg",
    rom: "games/DS/05. New Super Mario Bros. (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Contra 4",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15040-1.jpg",
    rom: "games/DS/06. Contra 4 (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Metal Slug 7",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15048-1.jpg",
    rom: "games/DS/07. Metal Slug 7 (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mega Man ZX - Advent",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15047-1.jpg",
    rom: "games/DS/09. Mega Man ZX - Advent (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Kirby - Squeak Squad",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15046-1.jpg",
    rom: "games/DS/10. Kirby - Squeak Squad (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Digimon World DS",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15044-1.jpg",
    rom: "games/DS/100. Digimon World DS (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Spectral Force - Genesis",
    system: "DS",
    // cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Spectral_Force_Genesis_cover.jpg/250px-Spectral_Force_Genesis_cover.jpg",
    rom: "games/DS/11. Spectral Force - Genesis (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Bleach - The Blade of Fate",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15042-1.jpg",
    rom: "games/DS/12. Bleach - The Blade of Fate (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mega Man ZX",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/15045-1.jpg",
    rom: "games/DS/13. Mega Man ZX (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Valkyrie Profile - Covenant of the Plume",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16337-1.jpg",
    rom: "games/DS/14. Valkyrie Profile - Covenant of the Plume (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Nanostray",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16340-1.jpg",
    rom: "games/DS/16. Nanostray (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Infinite Space",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16338-1.jpg",
    rom: "games/DS/17. Infinite Space (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Nanostray 2",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16341-1.jpg",
    rom: "games/DS/18. Nanostray 2 (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Deep Labyrinth",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16339-1.jpg",
    rom: "games/DS/19. Deep Labyrinth (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Bleach - Dark Souls",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16342-1.jpg",
    rom: "games/DS/20. Bleach - Dark Souls (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Lost in Blue 2",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16343-1.jpg",
    rom: "games/DS/21. Lost in Blue 2 (USA) (En,Ja,Fr,De,Es,It).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Super Robot Taisen OG Saga - Endless Frontier",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16344-1.jpg",
    rom: "games/DS/22. Super Robot Taisen OG Saga - Endless Frontier (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "SNK vs. Capcom - Card Fighters DS",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16345-1.jpg",
    rom: "games/DS/23. SNK vs. Capcom - Card Fighters DS (USA) (Rev 1).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Guilty Gear - Dust Strikers",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16346-1.jpg",
    rom: "games/DS/24. Guilty Gear - Dust Strikers (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Castlevania - Portrait of Ruin",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16347-1.jpg",
    rom: "games/DS/25. Castlevania - Portrait of Ruin (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Dig Dug - Digging Strike",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16348-1.jpg",
    rom: "games/DS/26. Dig Dug - Digging Strike (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Castlevania - Order of Ecclesia",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16349-1.jpg",
    rom: "games/DS/28. Castlevania - Order of Ecclesia (USA) (En,Fr).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "999 - Nine Hours, Nine Persons, Nine Doors",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16350-1.jpg",
    rom: "games/DS/29. 999 - Nine Hours, Nine Persons, Nine Doors (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Sands of Destruction",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16351-1.jpg",
    rom: "games/DS/30. Sands of Destruction (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Advance Wars - Dual Strike",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16352-1.jpg",
    rom: "games/DS/31. Advance Wars - Dual Strike (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mario vs. Donkey Kong 2 - March of the Minis",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16353-1.jpg",
    rom: "games/DS/32. Mario vs. Donkey Kong 2 - March of the Minis (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Advance Wars - Days of Ruin",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16354-1.jpg",
    rom: "games/DS/33. Advance Wars - Days of Ruin (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Avalon Code",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16355-1.jpg",
    rom: "games/DS/34. Avalon Code (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Rondo of Swords",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16356-1.jpg",
    rom: "games/DS/35. Rondo of Swords (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Nostalgia",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16357-1.jpg",
    rom: "games/DS/36. Nostalgia (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Steal Princess",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16358-1.jpg",
    rom: "games/DS/37. Steal Princess (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Izuna - Legend of the Unemployed Ninja",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16359-1.jpg",
    rom: "games/DS/38. Izuna - Legend of the Unemployed Ninja (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Kirby - Canvas Curse",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16360-1.jpg",
    rom: "games/DS/39. Kirby - Canvas Curse (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Chibi-Robo! - Park Patrol",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16361-1.jpg",
    rom: "games/DS/41. Chibi-Robo! - Park Patrol (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Custom Robo Arena",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16362-1.jpg",
    rom: "games/DS/42. Custom Robo Arena (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mario Party DS",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16363-1.jpg",
    rom: "games/DS/43. Mario Party DS (USA) (Rev 2).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Viewtiful Joe - Double Trouble!",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16364-1.jpg",
    rom: "games/DS/44. Viewtiful Joe - Double Trouble! (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Witch's Wish",
    system: "DS",
    // cover: "https://static.wikia.nocookie.net/nintendo/images/8/8d/Witch%27s_Wish_DS_cover.jpg",
    rom: "games/DS/46. Witch's Wish (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Theresia..",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16366-1.jpg",
    rom: "games/DS/47. Theresia.. (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Sonic Rush Adventure",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16367-1.jpg",
    rom: "games/DS/49. Sonic Rush Adventure (USA) (En,Ja,Fr,De,Es,It).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "A Witch's Tale",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16368-1.jpg",
    rom: "games/DS/50. A Witch's Tale (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Sonic Rush",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16369-1.jpg",
    rom: "games/DS/51. Sonic Rush (USA) (En,Ja,Fr,De,Es,It).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mega Man Star Force - Dragon",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16370-1.jpg",
    rom: "games/DS/52. Mega Man Star Force - Dragon (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mega Man Star Force - Leo",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16371-1.jpg",
    rom: "games/DS/52. Mega Man Star Force - Leo (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mega Man Star Force - Pegasus",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16372-1.jpg",
    rom: "games/DS/52. Mega Man Star Force - Pegasus (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Sonic Chronicles - The Dark Brotherhood",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16373-1.jpg",
    rom: "games/DS/53. Sonic Chronicles - The Dark Brotherhood (USA) (En,Fr,De,Es,It).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Radiant Historia",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16374-1.jpg",
    rom: "games/DS/54. Radiant Historia (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Sonic Colors",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16375-1.jpg",
    rom: "games/DS/55. Sonic Colors (USA) (En,Ja,Fr,De,Es,It).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Ragnarok DS",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16376-1.jpg",
    rom: "games/DS/56. Ragnarok DS (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Rhapsody - A Musical Adventure",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16377-1.jpg",
    rom: "games/DS/57. Rhapsody - A Musical Adventure (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Retro Game Challenge",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16378-1.jpg",
    rom: "games/DS/58. Retro Game Challenge (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Dungeon Explorer - Warriors of Ancient Arts",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16379-1.jpg",
    rom: "games/DS/59. Dungeon Explorer - Warriors of Ancient Arts (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Rhythm Heaven",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16380-1.jpg",
    rom: "games/DS/60. Rhythm Heaven (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Populous DS",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16381-1.jpg",
    rom: "games/DS/62. Populous DS (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Princess Debut",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16382-1.jpg",
    rom: "games/DS/63. Princess Debut (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "New Zealand Story Revolution",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16383-1.jpg",
    rom: "games/DS/64. New Zealand Story Revolution (USA) (En,Fr,Es).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Magical Starsign",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16384-1.jpg",
    rom: "games/DS/65. Magical Starsign (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mario vs. Donkey Kong - Mini-Land Mayhem!",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16385-1.jpg",
    rom: "games/DS/66. Mario vs. Donkey Kong - Mini-Land Mayhem! (USA) (En,Fr,Es) (Rev 2) (NDSi Enhanced).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Mr. Driller - Drill Spirits",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16386-1.jpg",
    rom: "games/DS/67. Mr. Driller - Drill Spirits (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Lunar Knights",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16387-1.jpg",
    rom: "games/DS/68. Lunar Knights (USA) (En,Es).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Ivy the Kiwi",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16388-1.jpg",
    rom: "games/DS/70. Ivy the Kiwi (USA) (En,Fr,Es).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "DK - Jungle Climber",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16389-1.jpg",
    rom: "games/DS/71. DK - Jungle Climber (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Harvest Moon DS",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16390-1.jpg",
    rom: "games/DS/72. Harvest Moon DS (USA) (Rev 1).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Heroes of Mana",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16391-1.jpg",
    rom: "games/DS/73. Heroes of Mana (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Lux-Pain",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16392-1.jpg",
    rom: "games/DS/74. Lux-Pain (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Prey the Stars",
    system: "DS",
    // cover: "https://cdn.thegamesdb.net/images/original/boxart/front/16393-1.jpg",
    rom: "games/DS/75. Prey the Stars (USA).nds",
    core: "ds",
    size: "",
    region: "USA"
  },
  {
    title: "Action in New York",
    system: "NES",
    // cover: "",
    rom: "games/NES/Action in New York (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Golf",
    system: "NES",
    // cover: "",
    rom: "games/NES/Golf (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rackets & Rivals",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rackets & Rivals (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Addams Family, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Addams Family, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Goonies II, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Goonies II, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rad Racer",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rad Racer (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Scavenger Hunt",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Scavenger Hunt (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Gradius",
    system: "NES",
    // cover: "",
    rom: "games/NES/Gradius (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rainbow Islands - Bubble Bobble 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rainbow Islands - Bubble Bobble 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventure Island Classic",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventure Island Classic (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Gremlins 2 - The New Batch",
    system: "NES",
    // cover: "",
    rom: "games/NES/Gremlins 2 - The New Batch (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rampart",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rampart (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventure Island III",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventure Island III (E) (Proto) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Guardian Legend, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Guardian Legend, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rescue - The Embassy Mission",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rescue - The Embassy Mission (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventure Island Part II",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventure Island Part II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Guerrilla War",
    system: "NES",
    // cover: "",
    rom: "games/NES/Guerrilla War (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Road Fighter",
    system: "NES",
    // cover: "",
    rom: "games/NES/Road Fighter (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures in the Magic Kingdom",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures in the Magic Kingdom (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Gun.Smoke",
    system: "NES",
    // cover: "",
    rom: "games/NES/Gun.Smoke (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "RoadBlasters",
    system: "NES",
    // cover: "",
    rom: "games/NES/RoadBlasters (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures of Bayou Billy, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures of Bayou Billy, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Harry",
    system: "NES",
    // cover: "",
    rom: "games/NES/ Harry (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Robin Hood - Prince of Thieves",
    system: "NES",
    // cover: "",
    rom: "games/NES/Robin Hood - Prince of Thieves (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures of Lolo",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures of Lolo (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "HeroQuest",
    system: "NES",
    // cover: "",
    rom: "games/NES/HeroQuest (E) (Proto) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Robo Warrior",
    system: "NES",
    // cover: "",
    rom: "games/NES/Robo Warrior (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures of Lolo",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures of Lolo (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "High Speed",
    system: "NES",
    // cover: "",
    rom: "games/NES/High Speed (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "RoboCop",
    system: "NES",
    // cover: "",
    rom: "games/NES/RoboCop (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures of Lolo 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures of Lolo 2 (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Home Alone 2 - Lost in New York",
    system: "NES",
    // cover: "",
    rom: "games/NES/Home Alone 2 - Lost in New York (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "RoboCop 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/RoboCop 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures of Lolo 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures of Lolo 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Hook",
    system: "NES",
    // cover: "",
    rom: "games/NES/Hook (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "RoboCop 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/RoboCop 3 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures of Lolo 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures of Lolo 3 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Hoops",
    system: "NES",
    // cover: "",
    rom: "games/NES/Hoops (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Kats",
    system: "NES",
    // cover: "",
    rom: "games/NES/ Kats (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Adventures of Rad Gravity, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Adventures of Rad Gravity, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Hudson Hawk",
    system: "NES",
    // cover: "",
    rom: "games/NES/Hudson Hawk (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rodland",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rodland (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Air Fortress",
    system: "NES",
    // cover: "",
    rom: "games/NES/Air Fortress (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Hunt for Red October",
    system: "NES",
    // cover: "",
    rom: "games/NES/Hunt for Red October (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rollergames",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rollergames (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Airwolf",
    system: "NES",
    // cover: "",
    rom: "games/NES/Airwolf (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ice Hockey",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ice Hockey (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Roundball - 2-on-2 Challenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/Roundball - 2-on-2 Challenge (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Aladdin",
    system: "NES",
    // cover: "",
    rom: "games/NES/Aladdin (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ice Hockey",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ice Hockey (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "n Attack",
    system: "NES",
    // cover: "",
    rom: "games/NES/n Attack (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Alfred Chicken",
    system: "NES",
    // cover: "",
    rom: "games/NES/Alfred Chicken (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ikari Warriors",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ikari Warriors (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Rygar",
    system: "NES",
    // cover: "",
    rom: "games/NES/Rygar (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Alien 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/Alien 3 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Incredible Crash Dummies, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Incredible Crash Dummies, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Section-Z",
    system: "NES",
    // cover: "",
    rom: "games/NES/Section-Z (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Alpha Mission",
    system: "NES",
    // cover: "",
    rom: "games/NES/Alpha Mission (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Indiana Jones and the Last Crusade",
    system: "NES",
    // cover: "",
    rom: "games/NES/Indiana Jones and the Last Crusade (E) (Ubisoft) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Shadow Warriors - Ninja Gaiden",
    system: "NES",
    // cover: "",
    rom: "games/NES/Shadow Warriors - Ninja Gaiden (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Anticipation",
    system: "NES",
    // cover: "",
    rom: "games/NES/Anticipation (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Iron Tank - The Invasion of Normandy",
    system: "NES",
    // cover: "",
    rom: "games/NES/Iron Tank - The Invasion of Normandy (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Shadow Warriors - Ninja Gaiden",
    system: "NES",
    // cover: "",
    rom: "games/NES/Shadow Warriors - Ninja Gaiden (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Arch Rivals - A Basketbrawl!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Arch Rivals - A Basketbrawl! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "IronSword - Wizards & Warriors II",
    system: "NES",
    // cover: "",
    rom: "games/NES/IronSword - Wizards & Warriors II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Shadow Warriors II - Ninja Gaiden II",
    system: "NES",
    // cover: "",
    rom: "games/NES/Shadow Warriors II - Ninja Gaiden II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Asterix",
    system: "NES",
    // cover: "",
    rom: "games/NES/Asterix (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Isolated Warrior",
    system: "NES",
    // cover: "",
    rom: "games/NES/Isolated Warrior (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Shadowgate",
    system: "NES",
    // cover: "",
    rom: "games/NES/Shadowgate (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Astyanax",
    system: "NES",
    // cover: "",
    rom: "games/NES/Astyanax (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Super Off Road",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Super Off Road (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Shatterhand",
    system: "NES",
    // cover: "",
    rom: "games/NES/Shatterhand (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Athletic World",
    system: "NES",
    // cover: "",
    rom: "games/NES/Athletic World (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Greatest 18 Holes of Major Championship Golf",
    system: "NES",
    // cover: "",
    rom: "games/NES/ Greatest 18 Holes of Major Championship Golf (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Side Pocket",
    system: "NES",
    // cover: "",
    rom: "games/NES/Side Pocket (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Attack of the Killer Tomatoes",
    system: "NES",
    // cover: "",
    rom: "games/NES/Attack of the Killer Tomatoes (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Action Kung Fu",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Action Kung Fu (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Silent Service",
    system: "NES",
    // cover: "",
    rom: "games/NES/Silent Service (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Bad Dudes vs. Dragon Ninja",
    system: "NES",
    // cover: "",
    rom: "games/NES/Bad Dudes vs. Dragon Ninja (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "James Bond Jr",
    system: "NES",
    // cover: "",
    rom: "games/NES/James Bond Jr (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Simpsons, The - Bart vs. the Space Mutants",
    system: "NES",
    // cover: "",
    rom: "games/NES/Simpsons, The - Bart vs. the Space Mutants (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Balloon Fight",
    system: "NES",
    // cover: "",
    rom: "games/NES/Balloon Fight (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Caper",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Caper (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Simpsons, The - Bart vs. the World",
    system: "NES",
    // cover: "",
    rom: "games/NES/Simpsons, The - Bart vs. the World (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Balloon Fight",
    system: "NES",
    // cover: "",
    rom: "games/NES/Balloon Fight (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Jimmy Connors Tennis",
    system: "NES",
    // cover: "",
    rom: "games/NES/Jimmy Connors Tennis (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Simpsons, The - Bartman Meets Radioactive Man",
    system: "NES",
    // cover: "",
    rom: "games/NES/Simpsons, The - Bartman Meets Radioactive Man (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Barbie",
    system: "NES",
    // cover: "",
    rom: "games/NES/Barbie (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Joe & Mac - Caveman Ninja",
    system: "NES",
    // cover: "",
    rom: "games/NES/Joe & Mac - Caveman Ninja (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Skate or Die",
    system: "NES",
    // cover: "",
    rom: "games/NES/Skate or Die (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Trick Shooting",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Trick Shooting (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Journey to Silius",
    system: "NES",
    // cover: "",
    rom: "games/NES/Journey to Silius (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ski or Die",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ski or Die (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Batman - Return of the Joker",
    system: "NES",
    // cover: "",
    rom: "games/NES/Batman - Return of the Joker (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Jungle Book, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Jungle Book, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Slalom",
    system: "NES",
    // cover: "",
    rom: "games/NES/Slalom (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Batman - The Video Game",
    system: "NES",
    // cover: "",
    rom: "games/NES/Batman - The Video Game (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Jurassic Park",
    system: "NES",
    // cover: "",
    rom: "games/NES/Jurassic Park (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Smash T.V.",
    system: "NES",
    // cover: "",
    rom: "games/NES/Smash T.V. (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Batman Returns",
    system: "NES",
    // cover: "",
    rom: "games/NES/Batman Returns (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Kabuki - Quantum Fighter",
    system: "NES",
    // cover: "",
    rom: "games/NES/Kabuki - Quantum Fighter (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Smurfs, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Smurfs, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Battle of Olympus, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Battle of Olympus, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Kick Off",
    system: "NES",
    // cover: "",
    rom: "games/NES/Kick Off (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Snake Rattle n Roll",
    system: "NES",
    // cover: "",
    rom: "games/NES/Snake Rattle n Roll (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Battleship",
    system: "NES",
    // cover: "",
    rom: "games/NES/Battleship (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Kickle Cubicle",
    system: "NES",
    // cover: "",
    rom: "games/NES/Kickle Cubicle (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Revenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Revenge (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Battletoads & Double Dragon",
    system: "NES",
    // cover: "",
    rom: "games/NES/Battletoads & Double Dragon (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Adventure",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Adventure (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Snow Brothers",
    system: "NES",
    // cover: "",
    rom: "games/NES/Snow Brothers (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Battletoads",
    system: "NES",
    // cover: "",
    rom: "games/NES/Battletoads (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Knight Rider",
    system: "NES",
    // cover: "",
    rom: "games/NES/Knight Rider (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Snowboard Challenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/Snowboard Challenge (E).nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Beauty and the Beast",
    system: "NES",
    // cover: "",
    rom: "games/NES/Beauty and the Beast (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Konami Hyper Soccer",
    system: "NES",
    // cover: "",
    rom: "games/NES/Konami Hyper Soccer (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Soccer",
    system: "NES",
    // cover: "",
    rom: "games/NES/Soccer (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Best of the Best - Championship Karate",
    system: "NES",
    // cover: "",
    rom: "games/NES/Best of the Best - Championship Karate (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Fun House",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Fun House (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Solar Jetman - Hunt for the Golden Warpship",
    system: "NES",
    // cover: "",
    rom: "games/NES/Solar Jetman - Hunt for the Golden Warpship (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Bigfoot",
    system: "NES",
    // cover: "",
    rom: "games/NES/Bigfoot (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Kung Fu",
    system: "NES",
    // cover: "",
    rom: "games/NES/Kung Fu (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Key",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Key (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Bionic Commando",
    system: "NES",
    // cover: "",
    rom: "games/NES/Bionic Commando (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Fighting Golf",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Fighting Golf (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Key 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Key 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Blades of Steel",
    system: "NES",
    // cover: "",
    rom: "games/NES/Blades of Steel (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Legend of Prince Valiant, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Legend of Prince Valiant, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Solstice - The Quest for the Staff of Demnos",
    system: "NES",
    // cover: "",
    rom: "games/NES/Solstice - The Quest for the Staff of Demnos (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Blades of Steel",
    system: "NES",
    // cover: "",
    rom: "games/NES/Blades of Steel (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Legend of Zelda, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Legend of Zelda, The (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Spider-Man - Return of the Sinister Six",
    system: "NES",
    // cover: "",
    rom: "games/NES/Spider-Man - Return of the Sinister Six (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Blaster Master",
    system: "NES",
    // cover: "",
    rom: "games/NES/Blaster Master (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Legend of Zelda, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Legend of Zelda, The (E) (V1.1) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Spy vs Spy",
    system: "NES",
    // cover: "",
    rom: "games/NES/Spy vs Spy (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Blue Shadow",
    system: "NES",
    // cover: "",
    rom: "games/NES/Blue Shadow (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Legend of Zelda, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Legend of Zelda, The (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Stadium Events",
    system: "NES",
    // cover: "",
    rom: "games/NES/Stadium Events (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Blues Brothers, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Blues Brothers, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Lemmings",
    system: "NES",
    // cover: "",
    rom: "games/NES/Lemmings (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Star Force",
    system: "NES",
    // cover: "",
    rom: "games/NES/Star Force (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Boulder Dash",
    system: "NES",
    // cover: "",
    rom: "games/NES/Boulder Dash (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Lethal Weapon",
    system: "NES",
    // cover: "",
    rom: "games/NES/Lethal Weapon (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Star Wars",
    system: "NES",
    // cover: "",
    rom: "games/NES/Star Wars (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Dracula",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Dracula (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Life Force - Salamander",
    system: "NES",
    // cover: "",
    rom: "games/NES/Life Force - Salamander (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Star Wars - The Empire Strikes Back",
    system: "NES",
    // cover: "",
    rom: "games/NES/Star Wars - The Empire Strikes Back (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Bubble Bobble",
    system: "NES",
    // cover: "",
    rom: "games/NES/Bubble Bobble (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Life Force - Salamander",
    system: "NES",
    // cover: "",
    rom: "games/NES/Life Force - Salamander (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "StarTropics",
    system: "NES",
    // cover: "",
    rom: "games/NES/StarTropics (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Bubble Bobble",
    system: "NES",
    // cover: "",
    rom: "games/NES/Bubble Bobble (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Lion King, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Lion King, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "StarTropics",
    system: "NES",
    // cover: "",
    rom: "games/NES/StarTropics (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Hare",
    system: "NES",
    // cover: "",
    rom: "games/NES/Hare (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Little Nemo - The Dream Master",
    system: "NES",
    // cover: "",
    rom: "games/NES/Little Nemo - The Dream Master (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Stealth ATF",
    system: "NES",
    // cover: "",
    rom: "games/NES/Stealth ATF (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Bugs Bunny Blowout, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Bugs Bunny Blowout, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Little Ninja Brothers",
    system: "NES",
    // cover: "",
    rom: "games/NES/Little Ninja Brothers (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Street Gangs",
    system: "NES",
    // cover: "",
    rom: "games/NES/Street Gangs (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Burai Fighter",
    system: "NES",
    // cover: "",
    rom: "games/NES/Burai Fighter (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Little Samson",
    system: "NES",
    // cover: "",
    rom: "games/NES/Little Samson (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Street Gangs",
    system: "NES",
    // cover: "",
    rom: "games/NES/Street Gangs (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "California Games",
    system: "NES",
    // cover: "",
    rom: "games/NES/California Games (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Low G Man - The Low Gravity Man",
    system: "NES",
    // cover: "",
    rom: "games/NES/Low G Man - The Low Gravity Man (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Sunman",
    system: "NES",
    // cover: "",
    rom: "games/NES/Sunman (E) (Proto) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "92",
    system: "NES",
    // cover: "",
    rom: "games/NES/92 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Lunar Pool",
    system: "NES",
    // cover: "",
    rom: "games/NES/Lunar Pool (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros.",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Captain Planet and the Planeteers",
    system: "NES",
    // cover: "",
    rom: "games/NES/Captain Planet and the Planeteers (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "M82 Game Selectable Working Product Display",
    system: "NES",
    // cover: "",
    rom: "games/NES/M82 Game Selectable Working Product Display (E).nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. + Duck Hunt",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. + Duck Hunt (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Captain Skyhawk",
    system: "NES",
    // cover: "",
    rom: "games/NES/Captain Skyhawk (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mach Rider",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mach Rider (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. + Tetris + Nintendo World Cup",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. + Tetris + Nintendo World Cup (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Castelian",
    system: "NES",
    // cover: "",
    rom: "games/NES/Castelian (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mach Rider",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mach Rider (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. + Tetris + Nintendo World Cup",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. + Tetris + Nintendo World Cup (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Castlevania",
    system: "NES",
    // cover: "",
    rom: "games/NES/Castlevania (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Maniac Mansion",
    system: "NES",
    // cover: "",
    rom: "games/NES/Maniac Mansion (E).nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. - 25th Anniversary",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. - 25th Anniversary (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Castlevania",
    system: "NES",
    // cover: "",
    rom: "games/NES/Castlevania (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Marble Madness",
    system: "NES",
    // cover: "",
    rom: "games/NES/Marble Madness (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. 2 (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Quest",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Quest (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mario & Yoshi",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mario & Yoshi (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Curse",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Curse (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mario Bros.",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mario Bros. (E) (PAL-MA-0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. 3 (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Curse",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Curse (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mario Bros.",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mario Bros. (E) (PAL-MC-0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Mario Bros. 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Mario Bros. 3 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Championship Rally",
    system: "NES",
    // cover: "",
    rom: "games/NES/Championship Rally (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mario is Missing!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mario is Missing! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ball",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ball (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Chessmaster, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Chessmaster, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "McDonaldland",
    system: "NES",
    // cover: "",
    rom: "games/NES/McDonaldland (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Spy Hunter",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Spy Hunter (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "n Dale - Rescue Rangers",
    system: "NES",
    // cover: "",
    rom: "games/NES/n Dale - Rescue Rangers (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Turrican",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Turrican (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "n Dale - Rescue Rangers 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/n Dale - Rescue Rangers 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 2 (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Super Turrican",
    system: "NES",
    // cover: "",
    rom: "games/NES/Super Turrican (E) [f1] (SCROLL).nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "City Connection",
    system: "NES",
    // cover: "",
    rom: "games/NES/City Connection (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Swamp Thing",
    system: "NES",
    // cover: "",
    rom: "games/NES/Swamp Thing (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "City Connection",
    system: "NES",
    // cover: "",
    rom: "games/NES/City Connection (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 3 (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Sword Master",
    system: "NES",
    // cover: "",
    rom: "games/NES/Sword Master (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Cobra Triangle",
    system: "NES",
    // cover: "",
    rom: "games/NES/Cobra Triangle (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 3 (E) (V1.1) (VC).nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Swords and Serpents",
    system: "NES",
    // cover: "",
    rom: "games/NES/Swords and Serpents (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Corvette ZR-1 Challenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/Corvette ZR-1 Challenge (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 3",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 3 (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "TaleSpin",
    system: "NES",
    // cover: "",
    rom: "games/NES/TaleSpin (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Crackout",
    system: "NES",
    // cover: "",
    rom: "games/NES/Crackout (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 4",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 4 (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tecmo Cup - Football Game",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tecmo Cup - Football Game (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Indy Heat",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Indy Heat (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 4",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 4 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tecmo World Cup Soccer",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tecmo World Cup Soccer (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Darkman",
    system: "NES",
    // cover: "",
    rom: "games/NES/Darkman (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 5",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 5 (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tecmo World Wrestling",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tecmo World Wrestling (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Darkwing Duck",
    system: "NES",
    // cover: "",
    rom: "games/NES/Darkwing Duck (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mega Man 5",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mega Man 5 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Teenage Mutant Hero Turtles",
    system: "NES",
    // cover: "",
    rom: "games/NES/Teenage Mutant Hero Turtles (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s A Boy and His Blob - Trouble on Blobolonia",
    system: "NES",
    // cover: "",
    rom: "games/NES/s A Boy and His Blob - Trouble on Blobolonia (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Metal Gear",
    system: "NES",
    // cover: "",
    rom: "games/NES/Metal Gear (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Teenage Mutant Hero Turtles",
    system: "NES",
    // cover: "",
    rom: "games/NES/Teenage Mutant Hero Turtles (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s A Boy and His Blob - Trouble on Blobolonia",
    system: "NES",
    // cover: "",
    rom: "games/NES/s A Boy and His Blob - Trouble on Blobolonia (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Metroid",
    system: "NES",
    // cover: "",
    rom: "games/NES/Metroid (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Teenage Mutant Hero Turtles - Tournament Fighters",
    system: "NES",
    // cover: "",
    rom: "games/NES/Teenage Mutant Hero Turtles - Tournament Fighters (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Days of Thunder",
    system: "NES",
    // cover: "",
    rom: "games/NES/Days of Thunder (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Metroid",
    system: "NES",
    // cover: "",
    rom: "games/NES/Metroid (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Teenage Mutant Hero Turtles II - The Arcade Game",
    system: "NES",
    // cover: "",
    rom: "games/NES/Teenage Mutant Hero Turtles II - The Arcade Game (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Defender of the Crown",
    system: "NES",
    // cover: "",
    rom: "games/NES/Defender of the Crown (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mighty Bomb Jack",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mighty Bomb Jack (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tennis",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tennis (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Devil World",
    system: "NES",
    // cover: "",
    rom: "games/NES/Devil World (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mighty Final Fight",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mighty Final Fight (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Terminator 2 - Judgment Day",
    system: "NES",
    // cover: "",
    rom: "games/NES/Terminator 2 - Judgment Day (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Die Hard",
    system: "NES",
    // cover: "",
    rom: "games/NES/Die Hard (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Punch-Out!!",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Punch-Out!! (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tetris",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tetris (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Digger T. Rock - The Legend of the Lost City",
    system: "NES",
    // cover: "",
    rom: "games/NES/Digger T. Rock - The Legend of the Lost City (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Punch-Out!!",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Punch-Out!! (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tetris 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tetris 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Donkey Kong - Original Edition",
    system: "NES",
    // cover: "",
    rom: "games/NES/Donkey Kong - Original Edition (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Miracle Piano Teaching System, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Miracle Piano Teaching System, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tiger-Heli",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tiger-Heli (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Double Dragon",
    system: "NES",
    // cover: "",
    rom: "games/NES/Double Dragon (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mission - Impossible",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mission - Impossible (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tiger-Heli",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tiger-Heli (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Double Dragon",
    system: "NES",
    // cover: "",
    rom: "games/NES/Double Dragon (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Monster in My Pocket",
    system: "NES",
    // cover: "",
    rom: "games/NES/Monster in My Pocket (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Time Lord",
    system: "NES",
    // cover: "",
    rom: "games/NES/Time Lord (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Double Dragon II - The Revenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/Double Dragon II - The Revenge (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Mr. Gimmick",
    system: "NES",
    // cover: "",
    rom: "games/NES/Mr. Gimmick (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tiny Toon Adventures",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tiny Toon Adventures (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Double Dragon III - The Sacred Stones",
    system: "NES",
    // cover: "",
    rom: "games/NES/Double Dragon III - The Sacred Stones (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "NES Open Tournament Golf",
    system: "NES",
    // cover: "",
    rom: "games/NES/NES Open Tournament Golf (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tiny Toon Adventures - Cartoon Workshop",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tiny Toon Adventures - Cartoon Workshop (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Double Dribble",
    system: "NES",
    // cover: "",
    rom: "games/NES/Double Dribble (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "NES Open Tournament Golf",
    system: "NES",
    // cover: "",
    rom: "games/NES/NES Open Tournament Golf (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tiny Toon Adventures 2 - Trouble in Wackyland",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tiny Toon Adventures 2 - Trouble in Wackyland (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Dr. Mario",
    system: "NES",
    // cover: "",
    rom: "games/NES/Dr. Mario (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "New Ghostbusters II",
    system: "NES",
    // cover: "",
    rom: "games/NES/New Ghostbusters II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "To the Earth",
    system: "NES",
    // cover: "",
    rom: "games/NES/To the Earth (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Lair",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Lair (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "NewZealand Story, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/NewZealand Story, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tom & Jerry - The Ultimate Game of Cat and Mouse!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Tom & Jerry - The Ultimate Game of Cat and Mouse! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Dropzone",
    system: "NES",
    // cover: "",
    rom: "games/NES/Dropzone (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s World Championship",
    system: "NES",
    // cover: "",
    rom: "games/NES/s World Championship (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Top Gun",
    system: "NES",
    // cover: "",
    rom: "games/NES/Top Gun (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "DuckTales",
    system: "NES",
    // cover: "",
    rom: "games/NES/DuckTales (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Nintendo World Cup",
    system: "NES",
    // cover: "",
    rom: "games/NES/Nintendo World Cup (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Top Gun - The Second Mission",
    system: "NES",
    // cover: "",
    rom: "games/NES/Top Gun - The Second Mission (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "DuckTales",
    system: "NES",
    // cover: "",
    rom: "games/NES/DuckTales (E) [Hack angrylion (06.09.2009)] (POGOv1).nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Nintendo World Cup",
    system: "NES",
    // cover: "",
    rom: "games/NES/Nintendo World Cup (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Total Recall",
    system: "NES",
    // cover: "",
    rom: "games/NES/Total Recall (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "DuckTales",
    system: "NES",
    // cover: "",
    rom: "games/NES/DuckTales (E) [Hack angrylion (28.12.2009)] (POGOv2).nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Nintendo World Cup",
    system: "NES",
    // cover: "",
    rom: "games/NES/Nintendo World Cup (E) (V1.2) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Totally Rad",
    system: "NES",
    // cover: "",
    rom: "games/NES/Totally Rad (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "DuckTales 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/DuckTales 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Ark",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Ark (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Track & Field II",
    system: "NES",
    // cover: "",
    rom: "games/NES/Track & Field II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Dynablaster",
    system: "NES",
    // cover: "",
    rom: "games/NES/Dynablaster (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "North & South",
    system: "NES",
    // cover: "",
    rom: "games/NES/North & South (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Track & Field in Barcelona",
    system: "NES",
    // cover: "",
    rom: "games/NES/Track & Field in Barcelona (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Eliminator Boat Duel",
    system: "NES",
    // cover: "",
    rom: "games/NES/Eliminator Boat Duel (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Operation Wolf",
    system: "NES",
    // cover: "",
    rom: "games/NES/Operation Wolf (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Trog!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Trog! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Elite",
    system: "NES",
    // cover: "",
    rom: "games/NES/Elite (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Over Horizon",
    system: "NES",
    // cover: "",
    rom: "games/NES/Over Horizon (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Trojan",
    system: "NES",
    // cover: "",
    rom: "games/NES/Trojan (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Eric Cantona Football Challenge - Goal! 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Eric Cantona Football Challenge - Goal! 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Pac-Man",
    system: "NES",
    // cover: "",
    rom: "games/NES/Pac-Man (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Trolls in Crazyland, The",
    system: "NES",
    // cover: "",
    rom: "games/NES/Trolls in Crazyland, The (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Excitebike",
    system: "NES",
    // cover: "",
    rom: "games/NES/Excitebike (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Panic Restaurant",
    system: "NES",
    // cover: "",
    rom: "games/NES/Panic Restaurant (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Turbo Racing",
    system: "NES",
    // cover: "",
    rom: "games/NES/Turbo Racing (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Excitebike",
    system: "NES",
    // cover: "",
    rom: "games/NES/Excitebike (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Paperboy",
    system: "NES",
    // cover: "",
    rom: "games/NES/Paperboy (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ufouria - The Saga",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ufouria - The Saga (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "F-15 Strike Eagle",
    system: "NES",
    // cover: "",
    rom: "games/NES/F-15 Strike Eagle (E) (Eng-Swe-Dan-Fin) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Paperboy 2",
    system: "NES",
    // cover: "",
    rom: "games/NES/Paperboy 2 (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ultimate Air Combat",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ultimate Air Combat (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "F-15 Strike Eagle",
    system: "NES",
    // cover: "",
    rom: "games/NES/F-15 Strike Eagle (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Parasol Stars - Rainbow Islands II",
    system: "NES",
    // cover: "",
    rom: "games/NES/Parasol Stars - Rainbow Islands II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "WWF King of the Ring",
    system: "NES",
    // cover: "",
    rom: "games/NES/WWF King of the Ring (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Faxanadu",
    system: "NES",
    // cover: "",
    rom: "games/NES/Faxanadu (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Parodius",
    system: "NES",
    // cover: "",
    rom: "games/NES/Parodius (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "WWF WrestleMania",
    system: "NES",
    // cover: "",
    rom: "games/NES/WWF WrestleMania (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Felix the Cat",
    system: "NES",
    // cover: "",
    rom: "games/NES/Felix the Cat (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Phantom Air Mission",
    system: "NES",
    // cover: "",
    rom: "games/NES/Phantom Air Mission (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "WWF WrestleMania - Challenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/WWF WrestleMania - Challenge (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ferrari Grand Prix Challenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ferrari Grand Prix Challenge (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Pin Bot",
    system: "NES",
    // cover: "",
    rom: "games/NES/Pin Bot (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "WWF WrestleMania - Steel Cage Challenge",
    system: "NES",
    // cover: "",
    rom: "games/NES/WWF WrestleMania - Steel Cage Challenge (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Quest",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Quest (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Pinball",
    system: "NES",
    // cover: "",
    rom: "games/NES/Pinball (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Woods",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Woods (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Quest",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Quest (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Pirates!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Pirates! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Werewolf - The Last Warrior",
    system: "NES",
    // cover: "",
    rom: "games/NES/Werewolf - The Last Warrior (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Flintstones, The - The Rescue of Dino & Hoppy",
    system: "NES",
    // cover: "",
    rom: "games/NES/Flintstones, The - The Rescue of Dino & Hoppy (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Power Blade",
    system: "NES",
    // cover: "",
    rom: "games/NES/Power Blade (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Willow",
    system: "NES",
    // cover: "",
    rom: "games/NES/Willow (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Flintstones, The - The Surprise at Dinosaur Peak",
    system: "NES",
    // cover: "",
    rom: "games/NES/Flintstones, The - The Surprise at Dinosaur Peak (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Prince of Persia",
    system: "NES",
    // cover: "",
    rom: "games/NES/Prince of Persia (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Wizards & Warriors",
    system: "NES",
    // cover: "",
    rom: "games/NES/Wizards & Warriors (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Formula 1 Sensation",
    system: "NES",
    // cover: "",
    rom: "games/NES/Formula 1 Sensation (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Prisoners of War",
    system: "NES",
    // cover: "",
    rom: "games/NES/Prisoners of War (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Wizards & Warriors III - Kuros...Visions of Power",
    system: "NES",
    // cover: "",
    rom: "games/NES/Wizards & Warriors III - Kuros...Visions of Power (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Tennis",
    system: "NES",
    // cover: "",
    rom: "games/NES/ Tennis (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Pro Wrestling",
    system: "NES",
    // cover: "",
    rom: "games/NES/Pro Wrestling (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "World Champ",
    system: "NES",
    // cover: "",
    rom: "games/NES/World Champ (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Galaga",
    system: "NES",
    // cover: "",
    rom: "games/NES/Galaga (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Probotector",
    system: "NES",
    // cover: "",
    rom: "games/NES/Probotector (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Wrath of the Black Manta",
    system: "NES",
    // cover: "",
    rom: "games/NES/Wrath of the Black Manta (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Galaxy 5000 - Racing in the 51st Century",
    system: "NES",
    // cover: "",
    rom: "games/NES/Galaxy 5000 - Racing in the 51st Century (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Probotector II - Return of the Evil Forces",
    system: "NES",
    // cover: "",
    rom: "games/NES/Probotector II - Return of the Evil Forces (E) (Contra Anniversary Collection) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Xevious",
    system: "NES",
    // cover: "",
    rom: "games/NES/Xevious (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Quest II",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Quest II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Probotector II - Return of the Evil Forces",
    system: "NES",
    // cover: "",
    rom: "games/NES/Probotector II - Return of the Evil Forces (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Cookie",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Cookie (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Gauntlet II",
    system: "NES",
    // cover: "",
    rom: "games/NES/Gauntlet II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Punch-Out!!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Punch-Out!! (E) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s Cookie",
    system: "NES",
    // cover: "",
    rom: "games/NES/s Cookie (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "s KO Boxing",
    system: "NES",
    // cover: "",
    rom: "games/NES/s KO Boxing (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Punch-Out!!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Punch-Out!! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Zelda II - The Adventure of Link",
    system: "NES",
    // cover: "",
    rom: "games/NES/Zelda II - The Adventure of Link (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "n Goblins",
    system: "NES",
    // cover: "",
    rom: "games/NES/n Goblins (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Puzznic",
    system: "NES",
    // cover: "",
    rom: "games/NES/Puzznic (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Zelda II - The Adventure of Link",
    system: "NES",
    // cover: "",
    rom: "games/NES/Zelda II - The Adventure of Link (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Ghostbusters II",
    system: "NES",
    // cover: "",
    rom: "games/NES/Ghostbusters II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "R.C. Pro-Am",
    system: "NES",
    // cover: "",
    rom: "games/NES/R.C. Pro-Am (E) (V1.0) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Zelda II - The Adventure of Link",
    system: "NES",
    // cover: "",
    rom: "games/NES/Zelda II - The Adventure of Link (E) (V1.2) (VC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Goal!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Goal! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "R.C. Pro-Am",
    system: "NES",
    // cover: "",
    rom: "games/NES/R.C. Pro-Am (E) (V1.1) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Zelda II - The Adventure of Link",
    system: "NES",
    // cover: "",
    rom: "games/NES/Zelda II - The Adventure of Link (E) (V1.2) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Godzilla - Monster of Monsters!",
    system: "NES",
    // cover: "",
    rom: "games/NES/Godzilla - Monster of Monsters! (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "R.C. Pro-Am II",
    system: "NES",
    // cover: "",
    rom: "games/NES/R.C. Pro-Am II (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Zen - Intergalactic Ninja",
    system: "NES",
    // cover: "",
    rom: "games/NES/Zen - Intergalactic Ninja (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Golf",
    system: "NES",
    // cover: "",
    rom: "games/NES/Golf (E) (GC) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  },
  {
    title: "Racket Attack",
    system: "NES",
    // cover: "",
    rom: "games/NES/Racket Attack (E) [!].nes",
    core: "nes",
    size: "",
    region: "E"
  }
  ];