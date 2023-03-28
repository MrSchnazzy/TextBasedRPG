  //Battle Functions

    function TutorialBattle(Monster)
    {
      alert("The "+Monster.name+" throws a poorly aimed punch your way!\n\nDefend yourself from his inebriated blows!");
        while (player.hp > 0 && Monster.hp > 0)
        {
    choice = prompt('You could try to "run" but you should probably learn to "attack" and "defend" yourself\n\nWhat do you do?');
    switch (choice) 
    {
      case "run":
        (player.hp -= Monster.str);
        alert("You try to run but the " + Monster.name + " punches you in the jaw\n\n" + player.hp + " HP remaining");
        break;

      case "attack":
        (Monster.hp -= player.str);
        (player.hp -= Monster.str);
        alert("You and the " + Monster.name + " exchange blows\n\n" + player.hp + " HP remaining");
        break;
        
      case "defend" :
        (player.hp -= (Monster.str / 2));
        alert("You block the " + Monster.name + "'s attack and take less damage\n\n" + player.hp + " HP remaining");
        break;
    }
        if(player.hp <= 0)
        {
          alert("YOU HAVE DIED!!!");
         Battle(ASAS);
        }
        }
        alert("The " + Monster.name + " falls over and passes out on the floor");
        alert("You gained " + Monster.exp + " Experience Points");
        (player.exp += Monster.exp);
    }

    function Flee()
    {
      alert("You have fled the battle");
    }

    function Attack(Monster)
    {
      Monster.hp -= player.str;
      player.hp -= Monster.str;
      if(player.mp < player.maxMp)
        player.mp += 2;
      if(player.mp > player.maxMp)
        player.mp = player.maxMp;
        alert("You attack the " + Monster.name + " " + Monster.text + "\n\n" + player.hp + " HP remaining");
    }
    
    function FinalAttack(Monster)
    {
     switch(RNG(1,3))
     {
        case 1 :
      Monster.hp -= player.str;
      player.hp -= Monster.str;
      if(player.mp < player.maxMp)
        player.mp += 2;
      if(player.mp > player.maxMp)
        player.mp = player.maxMp;
        alert("You attack " + Monster.name + "\n\n" + Monster.name + " hits you with dark magic!\n\n" + player.hp + " HP remaining");
        break;
        
        case 2 :
      Monster.hp -= player.str;
      player.hp -= Monster.str;
      Monster.hp += (Monster.str / 2);
      if(player.mp < player.maxMp)
        player.mp += 2;
      if(player.mp > player.maxMp)
        player.mp = player.maxMp;
        alert("You attack " + Monster.name + "\n\n" + Monster.name + "Drains your life force and heals himself!\n\n" + player.hp + " HP remaining");
        break;
        
        case 3 :
        alert(Monster.name + " summons an undead monster to fight you!");
        BossFight(ruinMonsters[RNG(0,5)]);
        break;
     }
    }
    
        function FinalDefend(Monster)
    {
     switch(RNG(1,3))
     {
        case 1 :
       player.hp -= Math.round(Monster.str / 2);
      if(player.mp < player.maxMp)
        player.mp += 5;
      if(player.mp > player.maxMp)
        player.mp = player.maxMp;
        alert("You block" + Monster.name + "'s spell\n\n" + player.hp + " HP remaining\n\n" + player.mp + " MP remaining");
        break;
        
        case 2 :
       player.hp -= Math.round(Monster.str / 2);
       Monster.hp += Math.round((Monster.str / 2)/2);
      if(player.mp < player.maxMp)
        player.mp += 5;
      if(player.mp > player.maxMp)
        player.mp = player.maxMp;
        alert("You block but " + Monster.name + " still drains some of your life force to heal himself\n\n" + player.hp + " HP remaining\n\n" + player.mp + " MP remaining");
        break;
        
        case 3 :
        alert("You go to block but " + Monster.name + " summons an undead monster to fight you!");
        BossFight(ruinMonsters[RNG(0,5)]);
        break;
     }
    }
    
    
    
    function Defend(Monster)
    {
       player.hp -= Math.round(Monster.str / 2);
      if(player.mp < player.maxMp)
        player.mp += 5;
      if(player.mp > player.maxMp)
        player.mp = player.maxMp;
        alert("You block the " + Monster.name + "'s attack\n\n" + player.hp + " HP remaining\n\n" + player.mp + " MP remaining");
    }

    function Heal()
    {
      if(player.mp > 4 && player.hp < player.maxHp)
      {
      (player.hp += (8 + (player.lvl*2)));
      if(player.hp > player.maxHp)
        {
        player.hp = player.maxHp;
        }
      (player.mp -= 5);
      alert("You're surrounded by holy light\n\n" + player.hp + " HP remaining\n\n" + player.mp + " MP remaining");
      }else
      alert("That won't work at this time");
    }
    
    function LevelUp()
    {
        alert("You have leveled up!");
        (player.maxHp += 5);
        (player.maxMp += 5);
        (player.hp += 5);
        (player.mp += 5);
        (player.str += 1);
        (player.exp -= (player.lvl * (1/2) * 100));
        (player.lvl += 1);
        alert("You are now level " + player.lvl + "\nYour max HP has increased to " + player.maxHp + "\nYour max MP has increased to " + player.maxMp + "\nYour Str increased to " + player.str + "\nYour heal now heals " + (8 + (player.lvl*2)) + " points of damage");
    }

    function Fight(Monster)
    {
      while (player.hp > 0 && Monster.hp > 0 && choice != "flee")
      {
    choice = prompt('You can "attack", "defend", "heal", or "flee"\n\nWhat do you do?');
    switch (choice) 
    {
        case "attack" :
        Attack(Monster);
        break;
        
        case "defend" :
        Defend(Monster);
        break;

        case "heal" :
        Heal();
        break;
        
      default :
    }
        if(player.hp <= 0)
        {
        alert("YOU HAVE DIED!!!");
         Battle(ASAS);
        }
        }
        if(choice == "flee")
        Flee();
        else
        {
        alert("The " + Monster.name + " is defeated!");
        alert("You gained " + Monster.exp + " Experience Points");
        (player.exp += Monster.exp);
        (Monster.hp = Monster.maxHp);
        }
    }

    function Battle(Monster)
    {
      choice = prompt("You have encountered a level " + Monster.lvl + " " + Monster.name + '\nDo you want to "fight" or "flee"?');
      switch (choice)
      {
        case "flee" :
        Flee();
        break;
      
        case "fight" :
        alert("You have chosen to fight");
        Fight(Monster);
        break;
        
        default :
        alert('That\'s not a choice!\n\nDo you want to "fight" or "flee"?');
        Battle(Monster);
      }
      
      if(player.exp >= (player.lvl * (1/2) * 100))
      {
        LevelUp();
      }
    }
    
        function BossBattle(Monster)
          {
          alert("You have finally made it to the " + Monster.name + "'s lair!\n\nPrepare for battle!");
            BossFight(Monster);
          if(player.exp >= (player.lvl * (1/2) * 100))
        {
          LevelUp();
        }
    }
    
        function BossFight(Monster)
    {
      while (player.hp > 0 && Monster.hp > 0)
      {
    choice = prompt('You can "attack", "defend", or "heal"\n\nWhat do you do?');
    switch (choice) 
    {
        case "attack":
        Attack(Monster);
        break;
        
        case "defend" :
        Defend(Monster);
        break;

        case "heal" :
        Heal();
        break;
        
      default :
    }
        if(player.hp <= 0)
        {
        alert("YOU HAVE DIED!!!");
         Battle(ASAS);
        }
      }
        alert("The " + Monster.name + " is defeated!");
        alert("You gained " + Monster.exp + " Experience Points");
        (player.exp += Monster.exp);
        (Monster.hp = Monster.maxHp);
      }
      
              function FinalBossFight(Monster)
    {
      while (player.hp > 0 && Monster.hp > 0)
      {
    choice = prompt('You can "attack", "defend", or "heal" \n\nWhat do you do?');
    switch (choice) 
    {
        case "attack":
        FinalAttack(Monster);
        break;
        
        case "defend" :
        FinalDefend(Monster);
        break;

        case "heal" :
        Heal();
        break;
        
      default :
    }
        if(player.hp <= 0)
        {
        alert("YOU HAVE DIED!!!");
         Battle(ASAS);
        }
      }
        alert(Monster.name + " is defeated!\n\nThe Kingdom is saved!");
      }
   
    

  //Monster Functions

  function Monster(name, maxHp, hp, lvl, str, exp, text)
  {
    this.name = name;
    this.maxHp = (maxHp * lvl);
    this.hp = (hp * lvl);
    this.lvl = lvl;
    this.str = (str * lvl);
    this.exp = (exp * lvl);
    this.text = text;
  } 

  function RNG(min, max) 
  {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  } 

  // Room Functions

  function Status(Location)
  {
    alert("You have "+player.hp+" HP remaining\nYou have "+player.mp+ " MP remaining\nYou need "+ ((player.lvl * (1/2) * 100)-player.exp) + " experience to level up");
    alert("You have proceeded " + roomCount + " times");
  }

  function Proceed(Location)
  {
    roomCount++;
    alert("You proceed deeper into the dungeon");
    //random battle
    if(roomCount == 10)
    {
      BossBattle(Location.boss);
      roomCount = 0;
    }
    else
    {
      Travel(Location);
    }
    
  }

  function Room(name, text)
  {
    this.name = name;
    this.text = text;
  }

  function Travel(Location)
  {
    response = prompt("You can check your status, heal, or proceed further into the dungeon\n\nWhat do you want to do?");
  switch (response) 
    {
    case "status":
      Status();
      Travel(Location);
      break;

    case "heal" :
      Heal();
      Travel(Location);
      break;

    case "proceed":
    if(RNG(1,10) <= 6)
    {
      Battle(Location.monsters[RNG(0,5)]);
      Proceed(Location);
    }
      else
      {
      Proceed(Location);
      }
      break;
      default:
        alert("That isn't a choice!!\n\nChoose status, heal, or proceed");
        {
          Travel(Location);
        }
    }
  }

  function Location(name, key, monsters, boss, text)
  {
    this.name = name
    this.key = key;
    this.monsters = monsters;
    this.boss = boss;
    this.text = text;
  }

  function Dungeon(Location)
  {
    alert("You head towards the " + Location.name + " to find " + Location.key);
    alert(Location.text);
    Battle(Location.monsters[RNG(0,5)]);
    Travel(Location);
  }
{
  // Player Variables

    var player = {name : "", maxHp : 50, hp : 50, maxMp : 25, mp : 25, str: 3, lvl: 1, exp: 0};
    var response;
    var choice;
    var inventory = [];
    var roomCount = 0;
    
    var drunk = new Monster("Drunken Man", 5, 5, 1, 2, 10 );

  // Cave Monsters
  
    var crab = new Monster("Giant Crab", 4, 4, RNG(1,2), 2, 8, "and it pinched you!");
    var bat = new Monster("Cave Bat", 3, 3, RNG(1,2), 1, 6, "and it bit you!");
    var pirate = new Monster("Pirate", 6, 6, RNG(1,2), 4, 16, "and he swung his blade at you!");
    var fish = new Monster("Fish Man", 4, 4, RNG(1,2), 3, 12, "and it slapped you with it's fin!");
    var snake = new Monster("Sea Snake", 5, 5, RNG(1,2), 4, 14, "and it wrapped around your leg and bit you!");
    var frog = new Monster("Salt Water Frog", 3, 3, RNG(1,2), 3, 9, "and it smacked you with it's tongue!");
    var caveBoss = new Monster("Water Dragon", 25, 25, 1, 13, 50, "and it shot a beam of fridged water at you!");
    
// Forest Monster
  
    var fungi = new Monster("Mushroom Man", 6, 6, RNG(1,3), 2, 12, "and it dusted you with spores!");
    var tree = new Monster("Treant", 8, 8, RNG(1,3), 4, 18, "and it bashed you with one of it's branches!");
    var nymph = new Monster("Evil Nymph", 6, 6, RNG(1,3), 4, 15, "and she cast a spell on you!");
    var bee = new Monster("Killer Wasp", 2, 2, RNG(1,3), 4, 8, "and it stung you!");
    var bigfoot = new Monster("Sasquatch", 9, 9, RNG(1,3),6, 20, "and it attacks you in an outrage!");
    var cat = new Monster("Black Panther", 7, 7, RNG(1,3), 6, 18, "and it slashes you with it's claws!");
    var forestBoss = new Monster("Earth Dragon",35, 35, 1, 18, 75, "and it calls roots out of the ground to strike you!");
    
// Mountain Monsters

    var bird = new Monster("Griffin", 9, 9, RNG(2,4), 5, 18, "and it clawed with it's talons!");
    var rock = new Monster("Golem", 11, 11, RNG(2,4), 6, 22, "and it launched a boulder at you!");
    var troll = new Monster("Mountain Troll", 10, 10, RNG(2,4), 5, 20, "and it hit you with it's club!");
    var goblin = new Monster("Goblin", 6, 6, RNG(2,4), 3, 9, "and it stabbed you with a spear!!");
    var fire = new Monster("Fire Spirit", 7, 7, RNG(2,4), 4, 12, "and shot a ball of fire at you!");
    var harpy = new Monster("Harpy", 5, 5, RNG(2,4), 4, 8, "and she flew towards you to attack!");
    var mountainBoss = new Monster("Fire Dragon", 50, 50, 1, 25, 100, "and it scorches you with it's fiery breath!");
    
// Ruin Monster

    var skel = new Monster("Skeleton", 6, 6, RNG(2,5), 4, 14, "and it attacked you with a rusty blade!");
    var lich = new Monster("Lich", 10, 10, RNG(2,5), 6, 18, "and it cast an unholy spell your way!");
    var ban = new Monster("Banshee", 7, 7, RNG(2,5), 5, 16, "and it let out a deafening scream!");
    var dead = new Monster("Undead", 8, 8, RNG(2,5), 4, 15, "and it slams into you with decaying flesh!");
    var vamp = new Monster("Vampire", 11, 11, RNG(2,5), 6, 20, "and it calls a swarm of bats to attack you!");
    var wraith = new Monster("Wraith", 9, 9, RNG(2,5), 5, 19, "and it drains you life force!");
    var ruinBoss = new Monster("Undead Dragon", 70, 70, 1, 30, 100, "and it blasted you with it's vile breath of death!");
    var delvin = new Monster("Delvin", 80, 80, 1, 30, 100, "");

  // Locations
  
  var caveMonsters = [crab, bat, pirate, fish, snake, frog];
  var cave = new Location("Coastal Caves", "The Water Dragon Orb", caveMonsters, caveBoss, "As you approach the caves the smell of salt water fills the air\n\nInside the caves it's dark, damp, and the crash of the waves can be heard from outside\n\nThere's ocean water on the floor, and the howl of the ocean breeze fills the air...");

  var forestMonsters = [fungi, tree, nymph, bee, bigfoot, cat];
  var forest = new Location("Forgotten Forest", "The Earth Dragon Orb", forestMonsters, forestBoss, "As you make your way to the forest you notice how overgrown the plant life has gotten\n\nThe woods gets thinker and thicker the closer you get\n\nA low fog gives the forest an eerie feel to it\n\nAlmost as if it's been forgotton by time...");

  var mountainMonsters = [bird, rock, troll, goblin, fire, harpy];
  var mountain = new Location("Mystic Mountian", "The Fire Dragon Orb", mountainMonsters, mountainBoss, "As you get closer and closer to the mountain you can feel the temperature rising\n\nSome say that the inside of the mountain is a volcano and you're suspecting the rumors to be true\n\nThis mountian is full of mythical and magical creatures so best be on your guard...");
  
  var ruinMonsters = [skel, lich, ban, dead, vamp, wraith];
  var ruin = new Location("Ruins of the Dragon Temple", "Delvin the Necromancer and stop him!", ruinMonsters, ruinBoss, "Then you place the corresponding orbs in their spots in the entrance to the ruins\n\nAs the doors open you're overwhelmed by the stench of decaying flesh\n\nYou have no choice but to power throught it and continue...");
  
  
 alert("You find yourself walking into a tavern to escape the cold\nAs you walk in, you get attacked by a drunken man!");
    
    TutorialBattle(drunk);
    
    alert("After dealing with the drunkard the rest of the tavern goes back to their ales");
    
    player.name = prompt("You spot an old man in the back and he waves you over\nHe orders you a pint of ale and asks...\n\n\What's your name traveler?");

  alert('Welcome ' + player.name + '!');

  alert("You're curious to what he wants from you so you take a seat");

  response = confirm('As you drink your ale the old man asks\n\n"Are you interested in going on an adventure?"');
  while (response != true) 
  {
    alert("You drink your ale, thank the old man for his time, and head back on your way\n\nYou're very busy and dont have time to be talking to crazy old men");
    Battle(asda);
  }
  alert("The man tells you that he's the king of this land\n\nHe's looking for a brave hero to save his land from total devastation\n\nHe wants you to travel to the three dragon lairs in this area and retrieve the dragon orbs that they guard");
  alert("The dragon orbs can be used to open up the path to the lair of the dreaded undead dragon that was brought to life by the evil necromancer Delvin");
  alert("Delvin was once a bright sorcerer, but was banished from his town after he was caught practicing necromancy while trying to resurrect his wife who had died during a bandit raid on the town");
  alert("Since he was banished before he was able to resurrect his dearly beloved, he went mad and dedicated his life to the dark arts");
  alert("He resides in the ruins of the Dragon Temple, where he practices his vile magic to build an undead army, to one day get revenge on the town that denied him");
  alert("You must travel to the Coastal Caves, then proceed through the Forgotten Forest, and finally climb the Mystic Mountain and slay the dragons that reside there");
  alert("Then with the dragon orbs in hand head to the ruins, open the door to the temple ruins, defeat the undead beast, and stop Delvin!");
  alert("After preparing yourself for the journey ahead you begin your adventure\n\nYour first stop is the Coastal Caves to obtain the water dragon orb");
  
  Dungeon(cave);
  inventory.push(cave.key);
  alert("With the water dragon orb in tow you make your way to the Forgotten Forest");
  
  Dungeon(forest);
  inventory.push(cave.key);
  alert("Now that you have the earth dragon orb, you head out towards the Mystic Mountains");
  
  Dungeon(mountain);
  inventory.push(cave.key);
  alert("With fire dragon orb in your possession you have what you need to open the door to the Ruins of the Dragon Temple");
  
  alert("You make it to the Ruins of the Dragon Temple");
  alert("You take " + inventory[0] + ", " + inventory[1] + ", and " + inventory[2] + " out of you bag");
  inventory.pop();
  inventory.pop();
  inventory.pop();
  
  Dungeon(ruin);
  
  alert("You have slayed the The Undead Dragon!\n\nAs it starts to collapse it fades into dust");
  alert("You hear a maniacal laugh");
  alert('"MWWUAHAHAHAHAHAHAHAHA"');
  alert('"You must be a fool if you think you\'ve won!"');
  alert("Delvin lunges at you!");
  
  FinalBossFight(delvin);
  
  alert("You return to the king to tell him the news that the undead dragon and Delvin are slain\n\nThe whole kingdom is there to praise you for your heroic deeds");
  alert('You will be forever known as\n\n"The Hero ' + player.name + '!\n\n"Slayer of Dragons and Destroyer of Darkness!"');
  alert("THE END!");
  
  }
  
  //Final Version
  