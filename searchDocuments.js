const searchDocuments = [
  {
    "created_at": "Thu Nov 14 16:19:01 +0000 2024",
    "id_str": "1746205216926466299",
    "full_text": "No longer on Twitter! Best places to find me are:<br>- on bluesky: <a href=\"https://bsky.app/profile/tanho.ca\">@tanho.ca</a><br>- on <a href=\"https://discord.com/invite/5Er2FBnnQa\">nflverse discord</a> <br>- on <a href=\"https://r4ds.io/join\">R4DS Slack</a><br>- other social links at <a href=\"https://tanho.ca\">tanho.ca</a>",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Aug 18 16:54:59 +0000 2023",
    "id_str": "1692580866973643153",
    "full_text": "Last chance at nflverse #rstats hex stickers for this print run! <a href=\"./_TanHo/status/1688378212538085376\">https://twitter.com/_TanHo/status/1688378212538085376</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Mar 22 11:57:01 +0000 2023",
    "id_str": "1638510087579770885",
    "full_text": "<a href=\"https://twitter.com/crow_data_sci\">@crow_data_sci</a> Needing the . comes up once in a blue moon and _ works out of the box for the majority of cases. if I need two dots in the expression I usually write a new fn and use that, or just else use some sort of anon function instead",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 19 14:49:59 +0000 2021",
    "id_str": "1439602676489236483",
    "full_text": "<a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 19 14:49:44 +0000 2021",
    "id_str": "1439602612773523459",
    "full_text": "Yesterday on-stream: added the bulk of a wins-added metric to ffsimulator.<br><br>Today: adding replacement level calcs? continuing with Shiny wrapper? tune in and find out 😋<br><br>Live in ~ten minutes!",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Sep 19 14:23:55 +0000 2021",
    "id_str": "1439596119424634894",
    "full_text": "<a href=\"https://twitter.com/TomKislingbury\">@TomKislingbury</a> Also the OL doesn't flip so DL not shifting kind of makes sense too. the LB/S thing does surprise me a bit",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 19 00:28:16 +0000 2021",
    "id_str": "1439385820071354372",
    "full_text": "Going live - and better late than never! <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1439333722411646982\">https://twitter.com/_TanHo/status/1439333722411646982</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Sep 18 23:51:23 +0000 2021",
    "id_str": "1439376535857868802",
    "full_text": "Running behind today 🙃 maybe 8:30",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 18 21:01:32 +0000 2021",
    "id_str": "1439333795140931588",
    "full_text": "Link 👇 <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 18 21:01:15 +0000 2021",
    "id_str": "1439333722411646982",
    "full_text": "Tonight on-stream: futzing with ffsimulator to try and make a \"wins-added\" metric specific to your fantasy league :) <br><br>#nflverse<br><br>Live at about 8pm EDT!",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Sep 18 15:36:40 +0000 2021",
    "id_str": "1439252038391578624",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> wait a minute",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 14 16:08:58 +0000 2021",
    "id_str": "1437810617000333320",
    "full_text": "...and so much fricken more (see this thread 👇)<br><br><a href=\"https://twitter.com/danmorse_/status/1369444374518632448?s=20\">https://twitter.com/danmorse_/status/1369444374518632448?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 14 16:08:58 +0000 2021",
    "id_str": "1437810615142297602",
    "full_text": "...and there's this Shiny app analyzing <a href=\"https://twitter.com/LeeSharpeNFL\">@LeeSharpeNFL</a>'s NFL predictions contest <a href=\"https://twitter.com/danmorse_/status/1437419946141646849?s=20\">https://twitter.com/danmorse_/status/1437419946141646849?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 14 16:08:58 +0000 2021",
    "id_str": "1437810613116448772",
    "full_text": "...and there's this <a href=\"https://twitter.com/would_it_dong\">@would_it_dong</a> bot measuring baseball park effects on home runs <a href=\"https://twitter.com/danmorse_/status/1422379739851804673?s=20\">https://twitter.com/danmorse_/status/1422379739851804673?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 14 16:08:57 +0000 2021",
    "id_str": "1437810611145125901",
    "full_text": "ICYMI <a href=\"https://twitter.com/danmorse_\">@danmorse_</a> has been on an absolutely prolific 🔥streak of #rstats productivity lately - across hockey, football, baseball, and more! <br><br>Some highlights: there's this brand new hockey pbp package... <a href=\"https://twitter.com/danmorse_/status/1437803896949198848\">https://twitter.com/danmorse_/status/1437803896949198848</a>",
    "favorite_count": "9",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Sep 14 13:27:14 +0000 2021",
    "id_str": "1437769912857006087",
    "full_text": "Happily holding it over the rest of the #nflverse squad that I'm beating them in <a href=\"https://twitter.com/LeeSharpeNFL\">@LeeSharpeNFL</a>'s predictions contest...primarily off of the Steelers winning, no less! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1437769912857006087-E_P7vW_WYAInf41.jpg\"><img src=\"../../tweets_media/1437769912857006087-E_P7vW_WYAInf41.jpg\"></a></li><li><a href=\"../../tweets_media/1437769912857006087-E_P76I6XsAQhYy4.png\"><img src=\"../../tweets_media/1437769912857006087-E_P76I6XsAQhYy4.png\"></a></li></ul></div>",
    "favorite_count": "16",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Sep 12 14:42:18 +0000 2021",
    "id_str": "1437064030963765252",
    "full_text": "<a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 12 14:42:06 +0000 2021",
    "id_str": "1437063977733869574",
    "full_text": "This morning, on stream: setting a dozen fantasy lineups and then starting a shiny app for ffsimulator 🤩 zomg it's football szn and i'm so excited!<br><br>Live at 11am ET (in twenty minutes!)",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 12 00:10:23 +0000 2021",
    "id_str": "1436844601877348358",
    "full_text": "Live in five! <a href=\"./_TanHo/status/1436750754824531976\">https://twitter.com/_TanHo/status/1436750754824531976</a>",
    "favorite_count": "3",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Sep 11 17:57:28 +0000 2021",
    "id_str": "1436750754824531976",
    "full_text": "Tonight on stream: working on automating some #nflverse data pipelines in #rstats!<br><br>Live at about ~ 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Sep 11 14:08:06 +0000 2021",
    "id_str": "1436693033467228171",
    "full_text": "Immensely grateful to everyone who's used and shared ffsimulator so far, it's incredibly motivating! <br><br>Special shoutouts to <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a>, <a href=\"https://twitter.com/topfunky\">@topfunky</a>, and <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> for their feedback and contributions :)",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 11 14:08:05 +0000 2021",
    "id_str": "1436693031919435779",
    "full_text": "It also has verbose progress output! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1436693031919435779-E_AokqOXoAYt-_n.png\"><img src=\"../../tweets_media/1436693031919435779-E_AokqOXoAYt-_n.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 11 14:08:05 +0000 2021",
    "id_str": "1436693029721673736",
    "full_text": "New features: you can simulate the upcoming week with ffs_simulate_week()!<br><br><a href=\"https://ffsimulator.ffverse.com/articles/basic.html#usage---simulating-weeks\">https://ffsimulator.ffverse.com/articles/basic.html#usage---simulating-weeks</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1436693029721673736-E_AogI9WQAMPKl4.png\"><img src=\"../../tweets_media/1436693029721673736-E_AogI9WQAMPKl4.png\"></a></li><li><a href=\"../../tweets_media/1436693029721673736-E_AnD70X0Acqk_M.png\"><img src=\"../../tweets_media/1436693029721673736-E_AnD70X0Acqk_M.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 11 14:08:04 +0000 2021",
    "id_str": "1436693026202587147",
    "full_text": "Links here:<br><a href=\"https://ffsimulator.ffverse.com/index.html\">https://ffsimulator.ffverse.com/index.html</a><br><a href=\"https://ffsimulator.ffverse.com/news/index.html\">https://ffsimulator.ffverse.com/news/index.html</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 11 14:08:04 +0000 2021",
    "id_str": "1436693024310968320",
    "full_text": "Released ffsimulator v1.1.0 on CRAN today! A few new features, including an upcoming week simulation, as well as backend refactoring (e.g. data.table for speed💨💨💨!)<br><br>#nflverse #rstats<br>News here 👇 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1436693024310968320-E_Al2Z2XMAAsSwc.png\"><img src=\"../../tweets_media/1436693024310968320-E_Al2Z2XMAAsSwc.png\"></a></li></ul></div>",
    "favorite_count": "51",
    "retweet_count": "11"
  },
  {
    "created_at": "Fri Sep 10 17:59:04 +0000 2021",
    "id_str": "1436388771201748997",
    "full_text": "holy shit <a href=\"https://twitter.com/drob\">@drob</a>'s dbcooper package to make an #rstats package out of any SQL database is SO FKIN COOL <a href=\"https://twitter.com/rstatsai/status/1436386698145894400\">https://twitter.com/rstatsai/status/1436386698145894400</a>",
    "favorite_count": "9",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Sep 07 17:03:49 +0000 2021",
    "id_str": "1435287702098915330",
    "full_text": "LFG #nflverse <a href=\"https://twitter.com/mrcaseb/status/1435285515708862474\">https://twitter.com/mrcaseb/status/1435285515708862474</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Sep 06 14:27:56 +0000 2021",
    "id_str": "1434886085100855298",
    "full_text": "Oops, messed up the domain stuff. Now lives at <a href=\"http://sfbprojections.dynastyprocess.com\">http://sfbprojections.dynastyprocess.com</a>! <br><br>Also, as a bonus - it now has a selection of percentile outcomes, so you can now see what kind of range of outcomes you're looking at :) <a href=\"./_TanHo/status/1434572657924657156\">https://twitter.com/_TanHo/status/1434572657924657156</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1434886085100855298-E-m9NAcWYAQlHHT.png\"><img src=\"../../tweets_media/1434886085100855298-E-m9NAcWYAQlHHT.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Sep 06 14:25:20 +0000 2021",
    "id_str": "1434885431951306767",
    "full_text": "<a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> Messed up the domain stuff, it now lives at <a href=\"http://sfbprojections.dynastyprocess.com\">http://sfbprojections.dynastyprocess.com</a> :)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 05 22:41:42 +0000 2021",
    "id_str": "1434647956687396867",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> Also wait a tick I forgot that I succeeded at what I set out to do <a href=\"https://twitter.com/Cooper_DFF/status/1434589337530904578?s=20\">https://twitter.com/Cooper_DFF/status/1434589337530904578?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 05 17:42:29 +0000 2021",
    "id_str": "1434572659371778059",
    "full_text": "You can check out the package that built these simulations here: <a href=\"https://ffsimulator.ffverse.com\">https://ffsimulator.ffverse.com</a><br><br>As ever, I'm immensely grateful to <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a>, <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a>, <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a>, and everyone else involved in running this fantastic contest ♥",
    "favorite_count": "5",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Sep 05 17:42:29 +0000 2021",
    "id_str": "1434572657924657156",
    "full_text": "OFFICIAL DYNASTYPROCESS #SFB11 POWER RANKINGS ARE FINALLY HERE 🎉<br><br><a href=\"http://sfb_projections.dynastyprocess.com\">http://sfb_projections.dynastyprocess.com</a><br><br>This page has ffsimulator team rankings from 1-1920 for the main contest and 1-2496 for the satellite as of today - let the trash talk commence! <br><br>#rstats #nflverse",
    "favorite_count": "22",
    "retweet_count": "14"
  },
  {
    "created_at": "Sun Sep 05 15:02:32 +0000 2021",
    "id_str": "1434532407655469056",
    "full_text": "Live! <a href=\"./_TanHo/status/1434520755333746690\">https://twitter.com/_TanHo/status/1434520755333746690</a>",
    "favorite_count": "3",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Sep 05 14:16:14 +0000 2021",
    "id_str": "1434520755333746690",
    "full_text": "Made great progress on the ffsimulator pkg last night, I'll be on for round two in under an hour :) 🥊<br><br>Live about 11AM EDT: <a href=\"http://twitch.tv/tanho_\">http://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1434193197706715136\">https://twitter.com/_TanHo/status/1434193197706715136</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Sep 05 00:04:11 +0000 2021",
    "id_str": "1434306327048855555",
    "full_text": "Live!<br><a href=\"http://twitch.tv/tanho_\">http://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1434193197706715136\">https://twitter.com/_TanHo/status/1434193197706715136</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 04 16:34:39 +0000 2021",
    "id_str": "1434193197706715136",
    "full_text": "Tonight on stream: AGH FOOTBALL IS SO CLOSE, THERES SO MUCH I WANTED TO DO! (automating an #rstats #sfb11 report with Distill/GHA? Adding an inseason/weekly feature for ffsimulator? making an ffsimulator app?) 😱 so little time 😱<br><br>Live at 8pm EDT: <a href=\"http://twitch.tv/tanho_\">http://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Sep 03 18:14:08 +0000 2021",
    "id_str": "1433855846614806531",
    "full_text": "I was today years old when I was introduced (c/o <a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a>)  to <a href=\"https://twitter.com/Emil_Hvitfeldt\">@Emil_Hvitfeldt</a>'s paletteer package and my brain is borked🤯<br><br>🎨<a href=\"https://emilhvitfeldt.github.io/r-color-palettes/discrete.html\">https://emilhvitfeldt.github.io/r-color-palettes/discrete.html</a><br>📦<a href=\"https://emilhvitfeldt.github.io/paletteer/index.html\">https://emilhvitfeldt.github.io/paletteer/index.html</a><br>#rstats <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1433855846614806531-E-YUSk9XoAgV9og.mp4\"></video></li></ul></div>",
    "favorite_count": "38",
    "retweet_count": "6"
  },
  {
    "created_at": "Fri Sep 03 17:20:34 +0000 2021",
    "id_str": "1433842368281726977",
    "full_text": "Corey Davis? (ducks) <a href=\"https://twitter.com/JustinFreeman18/status/1433838693488365571\">https://twitter.com/JustinFreeman18/status/1433838693488365571</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 02 02:46:55 +0000 2021",
    "id_str": "1433260118800490496",
    "full_text": "<a href=\"https://twitter.com/THER4KE\">@THER4KE</a> <a href=\"https://twitter.com/kevishie\">@kevishie</a> Got to love seeing that first place chart though!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 01 22:12:57 +0000 2021",
    "id_str": "1433191173536075776",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> it me, unable to resist trolling both your legitimate and your troll takes",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 01 03:25:32 +0000 2021",
    "id_str": "1432907448080293889",
    "full_text": "#nflverse 👀 <a href=\"https://twitter.com/joeyanalytics/status/1432906725145907202\">https://twitter.com/joeyanalytics/status/1432906725145907202</a>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Sep 01 02:27:20 +0000 2021",
    "id_str": "1432892802044735488",
    "full_text": "<a href=\"https://twitter.com/cjzero/status/1432892202162790400?s=20\">https://twitter.com/cjzero/status/1432892202162790400?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 01 02:24:59 +0000 2021",
    "id_str": "1432892209104408576",
    "full_text": "MARIE PHILIP POULIN WHAT A FUCKING GOAL",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Aug 31 15:29:31 +0000 2021",
    "id_str": "1432727256674226179",
    "full_text": "Adding accessibility to Shiny apps &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;<br>#rstats <a href=\"https://twitter.com/Mayacelium/status/1432363406107951112\">https://twitter.com/Mayacelium/status/1432363406107951112</a>",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Aug 29 16:18:27 +0000 2021",
    "id_str": "1432014795776069633",
    "full_text": "<a href=\"https://twitter.com/ZachFeldman3\">@ZachFeldman3</a> and another! #nflverse",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Aug 29 16:15:25 +0000 2021",
    "id_str": "1432014031171227652",
    "full_text": "<a href=\"https://twitter.com/ZachFeldman3\">@ZachFeldman3</a> this is your just deserts for replying muahaha #nflverse",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Aug 29 15:26:59 +0000 2021",
    "id_str": "1432001842687397898",
    "full_text": "#nflverse three",
    "favorite_count": "0",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Aug 29 15:18:00 +0000 2021",
    "id_str": "1431999583354302470",
    "full_text": "#nflverse 2",
    "favorite_count": "0",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Aug 29 15:13:32 +0000 2021",
    "id_str": "1431998458060230661",
    "full_text": "more deliberate #nflverse triggers",
    "favorite_count": "0",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Aug 29 14:57:58 +0000 2021",
    "id_str": "1431994540999708678",
    "full_text": "SUNDAY STREAMR SQUAD STARTS...NOW!<br><br>Continuing work on the ffsimulator #rstats package for inseason week simulations :)<br><br>Live in five: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "7",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Aug 28 23:55:51 +0000 2021",
    "id_str": "1431767516657987588",
    "full_text": "Live in ~ five! Might procrastinate a tad by building a retweet bot on stream, for funsies! <br><br>Tune in here: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a><br><br>*deliberately triggering at least three bots* #nflverse #rstats <a href=\"./_TanHo/status/1431644945144811522\">https://twitter.com/_TanHo/status/1431644945144811522</a>",
    "favorite_count": "2",
    "retweet_count": "3"
  },
  {
    "created_at": "Sat Aug 28 23:44:00 +0000 2021",
    "id_str": "1431764536118456321",
    "full_text": "<a href=\"https://twitter.com/YZR_Fantasy\">@YZR_Fantasy</a> <a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> You're not shitting me. What the fuck.",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 28 16:28:08 +0000 2021",
    "id_str": "1431654845535199236",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> if you're willing to steal from kev's and able to show me historical ep/g for RBs in same range I'll stop complaining :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 28 15:57:32 +0000 2021",
    "id_str": "1431647143593455630",
    "full_text": "<a href=\"https://twitter.com/_NickWhalen\">@_NickWhalen</a> It's still too early to conclude that Minshew is clearly better than Hurts, imo, and I still think Hurts has a range of upside outcomes that beat Minshew's",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 28 15:48:48 +0000 2021",
    "id_str": "1431644945144811522",
    "full_text": "Tonight on-stream: as yet undecided! Probably will work on setting up data and infrastructure for simulating individual in-season weeks in ffsimulator. Might be a shiny app night. Whatever it is, it'll be #rstats and #nflverse!<br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "3",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Aug 27 16:03:59 +0000 2021",
    "id_str": "1431286377744846864",
    "full_text": "*pokes the new #nflverse retweet bot* <a href=\"https://twitter.com/nflversetweets/status/1431259822750674946\">https://twitter.com/nflversetweets/status/1431259822750674946</a>",
    "favorite_count": "12",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Aug 25 14:44:19 +0000 2021",
    "id_str": "1430541554289106944",
    "full_text": "This looks really well designed and possibly will go to the top of my “how do I get started with R” resources! <a href=\"https://t.co/eK0nkdGd1L\">https://t.co/eK0nkdGd1L</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 24 12:04:25 +0000 2021",
    "id_str": "1430138926036144164",
    "full_text": "ONE DISCORD FOR ALL YOUR FAVOURITE #rstats TWITCH STREAMERS!  <a href=\"https://discord.gg/mEQftRzhEm\">https://discord.gg/mEQftRzhEm</a> <a href=\"https://twitter.com/aftonsteps/status/1430007240669290496\">https://twitter.com/aftonsteps/status/1430007240669290496</a>",
    "favorite_count": "11",
    "retweet_count": "5"
  },
  {
    "created_at": "Sun Aug 22 17:20:17 +0000 2021",
    "id_str": "1429493640372555779",
    "full_text": "it's only a \"tradition\" on the second time you do it!",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 22 17:19:25 +0000 2021",
    "id_str": "1429493422797303813",
    "full_text": "A SUNDAY STREAMR TRADITION IS BORN  #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1429493422797303813-E9aUjJIXoAIwZwA.png\"><img src=\"../../tweets_media/1429493422797303813-E9aUjJIXoAIwZwA.png\"></a></li></ul></div>",
    "favorite_count": "11",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Aug 22 14:59:52 +0000 2021",
    "id_str": "1429458306347765760",
    "full_text": "Live now! <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1429445929246076934\">https://twitter.com/_TanHo/status/1429445929246076934</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Aug 22 14:10:42 +0000 2021",
    "id_str": "1429445929246076934",
    "full_text": "Live in less than 60 for some project planning and then some apps and dataviz! <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1428341478271590402\">https://twitter.com/_TanHo/status/1428341478271590402</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 21 23:56:55 +0000 2021",
    "id_str": "1429231068574535685",
    "full_text": "Live in five! <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1429101966580453376\">https://twitter.com/_TanHo/status/1429101966580453376</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 21 15:23:54 +0000 2021",
    "id_str": "1429101966580453376",
    "full_text": "Tonight on-stream: continuing to speed up ffsimulator (mostly with data.table) and possibly starting to wrap it into a Shiny app!<br><br>Live at 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <br><br>Also - ICYMI - I'll be streaming tomorrow at 11am EDT instead of 1pm!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 21 13:41:23 +0000 2021",
    "id_str": "1429076164434407428",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> R^2 = 0.999999",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 19 13:04:37 +0000 2021",
    "id_str": "1428342137452695555",
    "full_text": "I'll still be aiming to do viz and modelling on Sundays (and dev on Saturday evenings) but, yknow, with even more football flavour than before?<br><br>You can tune in here: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 19 13:02:00 +0000 2021",
    "id_str": "1428341478271590402",
    "full_text": "Minor #rstats twitch stream update: starting this Sunday, I'll be starting at 11am ET (instead of 1pm) because FOOTBALL IS BACK BABY! <br><br><a href=\"https://twitter.com/aftonsteps\">@aftonsteps</a> has graciously agreed to swap slots with me so that our Sunday StreamR lineup remains unbroken😁",
    "favorite_count": "5",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Aug 18 22:29:33 +0000 2021",
    "id_str": "1428121921334427649",
    "full_text": "<a href=\"https://twitter.com/greerreNFL\">@greerreNFL</a> is your hypothesis based on this chart only or is there some other calculation/modelling beyond these four players?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 17 15:37:26 +0000 2023",
    "id_str": "1636753616491933701",
    "full_text": "Had a wonderful time talking about Shiny debugging in #rstats today <a href=\"https://twitter.com/ShinyConf\">@ShinyConf</a> - you can find my materials here: <a href=\"https://tanho.ca/shiny-debugging\">https://tanho.ca/shiny-debugging</a> and I'll have the video linked there as well!",
    "favorite_count": "19",
    "retweet_count": "4"
  },
  {
    "created_at": "Wed Mar 15 12:41:22 +0000 2023",
    "id_str": "1635984533894967296",
    "full_text": "SHINYCONF STARTS TODAY! <br><br>Super stoked to tune in to all of the talks, and also pretty excited to be giving a talk on Friday about Shiny debugging! <br>#rstats <a href=\"https://twitter.com/ShinyConf/status/1635955305111511042\">https://twitter.com/ShinyConf/status/1635955305111511042</a>",
    "favorite_count": "8",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Mar 14 14:33:45 +0000 2023",
    "id_str": "1635650427524972544",
    "full_text": "Also, this is not designed for recording/collecting user timezones, only display - if you're gonna be saving that for later use, you should explicitly have an input to collect it via OlsonName (i.e. America/Toronto)<br> <br><a href=\"https://twitter.com/JonTheGeek/status/1635649213139697667?s=20\">https://twitter.com/JonTheGeek/status/1635649213139697667?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 14 14:27:04 +0000 2023",
    "id_str": "1635648746951262208",
    "full_text": "<a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> <a href=\"https://twitter.com/theRcast\">@theRcast</a> The real trouble with this approach is half-hour offsets I think. Probably needs rounding <a href=\"./_TanHo/status/1635648683730452481?s=20\">https://twitter.com/_TanHo/status/1635648683730452481?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 14 14:26:49 +0000 2023",
    "id_str": "1635648683730452481",
    "full_text": "Some known limitations: <br>- if called within a module namespace, you'll need to namespace the UI inputId and ensure the server function has the matching (but not namespaced) id<br>- If you're in an unlucky timezone where it's 30mins offset, I think this won't work (needs rounding)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 14 14:02:08 +0000 2023",
    "id_str": "1635642468917039108",
    "full_text": "Function code here (feel free to copypaste to import to your own projects) <br><a href=\"https://github.com/tanho63/tantastic/blob/HEAD/R/shiny_timezone.R\">https://github.com/tanho63/tantastic/blob/HEAD/R/shiny_timezone.R</a><br>and my documentation notes here: <a href=\"https://tanho63.github.io/tantastic/reference/shiny_timezone.html\">https://tanho63.github.io/tantastic/reference/shiny_timezone.html</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 14 14:02:07 +0000 2023",
    "id_str": "1635642466337431556",
    "full_text": "Obscure #rstats #rshiny thing I spent too much time on: here's a pair of functions that retrieve the user's timezone (offset) so that you can present time and date to users without making them do timezone math in their heads. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1635642466337431556-FrL4HvtWIAESHJA.png\"><img src=\"../../tweets_media/1635642466337431556-FrL4HvtWIAESHJA.png\"></a></li><li><a href=\"../../tweets_media/1635642466337431556-FrL3pxTWAAMGa6Y.png\"><img src=\"../../tweets_media/1635642466337431556-FrL3pxTWAAMGa6Y.png\"></a></li></ul></div>",
    "favorite_count": "31",
    "retweet_count": "7"
  },
  {
    "created_at": "Sun Mar 12 04:07:23 +0000 2023",
    "id_str": "1634768023184719874",
    "full_text": "<a href=\"https://twitter.com/MeghanChayka\">@MeghanChayka</a> Funny that it was the exact Toronto-&gt; London you’re doing. Lounges closed around 12am, and there isn’t otherwise a good spot to catch some zzz’s either… good luck!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 15 19:11:48 +0000 2021",
    "id_str": "1426984991469326339",
    "full_text": "SUNDAY STREAMR SQUAD SHOWING UP  LFGGGGGGG <a href=\"https://twitter.com/kierisi\">@kierisi</a>  #rstats <a href=\"https://twitter.com/aftonsteps/status/1426959353450360835\">https://twitter.com/aftonsteps/status/1426959353450360835</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1426984991469326339-E82q9hvWYAI5Xzp.jpg\"><img src=\"../../tweets_media/1426984991469326339-E82q9hvWYAI5Xzp.jpg\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Aug 15 16:53:00 +0000 2021",
    "id_str": "1426950061733335044",
    "full_text": "Today on-stream: wrapping some dataviz from past streams into a Shiny app! Then, maybe, more viz?<br><br>Live in ~ 10 minutes: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 14 23:59:04 +0000 2021",
    "id_str": "1426694897407561732",
    "full_text": "Going live 💨💨💨 <a href=\"./_TanHo/status/1426621317235847170\">https://twitter.com/_TanHo/status/1426621317235847170</a>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Aug 14 19:06:42 +0000 2021",
    "id_str": "1426621317235847170",
    "full_text": "Tonight on-stream: going back to the ffsimulator well after a few streams off, tackling some initial feedback and (maybe) dabbling with a little data.table optimizing?<br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Aug 13 15:20:35 +0000 2021",
    "id_str": "1426202027672195074",
    "full_text": "<a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <a href=\"https://twitter.com/Mayacelium\">@Mayacelium</a> <a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> <a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> <a href=\"https://twitter.com/TonyElHabr\">@TonyElHabr</a> Code here (minus the raw data) <a href=\"https://github.com/tanho63/r4ds_slack_analysis\">https://github.com/tanho63/r4ds_slack_analysis</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Aug 13 14:49:10 +0000 2021",
    "id_str": "1426194122038251520",
    "full_text": "The <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> Slack has become a huge part of my life over the past 1.5 years. <br><br>I got to dabbling with my message counts recently - as it turns out, it pretty much tells the story of my pandemic🙃<br>Immensely grateful for the friends I've made there &amp; here on #rstats Twitter <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1426194122038251520-E8rbjgTWEAQpR-a.png\"><img src=\"../../tweets_media/1426194122038251520-E8rbjgTWEAQpR-a.png\"></a></li></ul></div>",
    "favorite_count": "83",
    "retweet_count": "7"
  },
  {
    "created_at": "Thu Aug 12 20:29:40 +0000 2021",
    "id_str": "1425917422096297992",
    "full_text": "Excuse me wat #rstats <a href=\"https://twitter.com/thomas_mock/status/1425910659741622278\">https://twitter.com/thomas_mock/status/1425910659741622278</a>",
    "favorite_count": "16",
    "retweet_count": "3"
  },
  {
    "created_at": "Thu Aug 12 16:21:26 +0000 2021",
    "id_str": "1425854953214693383",
    "full_text": "Live right now! Come join, #rstats twitch legion 🙌🙌🙌 <a href=\"https://twitter.com/LisaDeBruine/status/1425730917167943683\">https://twitter.com/LisaDeBruine/status/1425730917167943683</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Aug 11 19:11:21 +0000 2021",
    "id_str": "1425535326546767878",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> If I have a pretty good rapport with said person and we have the nicety exchange frequently, it’s nbd. It’s the infrequent ones that can feel like “can we talk?”",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 11 18:59:12 +0000 2021",
    "id_str": "1425532269066919942",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> Or do you mean “please include a hiya! In the message”",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 11 13:24:00 +0000 2021",
    "id_str": "1425447911689789445",
    "full_text": "You guys are amazing: <a href=\"https://youtube.com/tanho\">https://youtube.com/tanho</a> is already live and currently has the three office-hours tutorials I've run to-date. Thank you so much for the support, and if you'd like to see a stream on a given R topic in the future please let me know 👇 <a href=\"./_TanHo/status/1425177738105733121\">https://twitter.com/_TanHo/status/1425177738105733121</a>",
    "favorite_count": "17",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Aug 10 19:30:58 +0000 2021",
    "id_str": "1425177876110979083",
    "full_text": "<a href=\"https://www.youtube.com/channel/UC5JCYcWXkVQM-iq1p1BcLSw\">https://www.youtube.com/channel/UC5JCYcWXkVQM-iq1p1BcLSw</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 10 19:30:25 +0000 2021",
    "id_str": "1425177738105733121",
    "full_text": "Okay, apparently I need 100 subs to get a real channel URL, so I'll announce properly this time: <br><br>I made a YouTube channel✨it has replays from my Twitch streams, including my #rstats office hours series on debugging shiny, rvest scraping, and wrangling json! Pls follow ♥ <a href=\"./_TanHo/status/1425173919464624128\">https://twitter.com/_TanHo/status/1425173919464624128</a>",
    "favorite_count": "60",
    "retweet_count": "24"
  },
  {
    "created_at": "Tue Aug 10 19:15:15 +0000 2021",
    "id_str": "1425173919464624128",
    "full_text": "uploading videos to youtube for the first time, rip my internet speed,,,<br><br>(also you can follow it here, editing is currently minimal/nonexistent: <a href=\"https://www.youtube.com/channel/UC5JCYcWXkVQM-iq1p1BcLSw\">https://www.youtube.com/channel/UC5JCYcWXkVQM-iq1p1BcLSw</a>) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1425173919464624128-E8c7QCIXIAEO4Ei.png\"><img src=\"../../tweets_media/1425173919464624128-E8c7QCIXIAEO4Ei.png\"></a></li></ul></div>",
    "favorite_count": "34",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Aug 10 15:50:07 +0000 2021",
    "id_str": "1425122298000990209",
    "full_text": "<a href=\"https://twitter.com/NateNohling\">@NateNohling</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> also I like the naming conventions in nflreadr better but that's not a reason to switch 😂",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 09 18:45:51 +0000 2021",
    "id_str": "1424804131160657927",
    "full_text": "Extremely proud of this #RStats package, which makes it so much easier to stand on the shoulders of giants in the NFL analytics community and get the latest data! <a href=\"https://twitter.com/nflfastR/status/1424802720700043270\">https://twitter.com/nflfastR/status/1424802720700043270</a>",
    "favorite_count": "42",
    "retweet_count": "6"
  },
  {
    "created_at": "Mon Aug 09 17:46:45 +0000 2021",
    "id_str": "1424789261770018819",
    "full_text": "<a href=\"https://twitter.com/theRcast\">@theRcast</a> <a href=\"https://twitter.com/kierisi\">@kierisi</a> <a href=\"https://twitter.com/LukeMorris\">@LukeMorris</a> <a href=\"https://twitter.com/system76\">@system76</a> I’d also consider removing bottlenecks w/ internet upload speed and/or CPU/GPU, but only after you get started and decide how much you like streaming",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 08 16:55:36 +0000 2021",
    "id_str": "1424413999253397505",
    "full_text": "Continuing to work on data viz on today's stream, and possibly wrapping these into a Shiny app (if I run out of ideas). <br><br>Live in five: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1421937824807411718\">https://twitter.com/_TanHo/status/1421937824807411718</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 08 00:05:58 +0000 2021",
    "id_str": "1424159918005837825",
    "full_text": "Live! (finally)<br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1424094185410469888\">https://twitter.com/_TanHo/status/1424094185410469888</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Aug 07 19:44:46 +0000 2021",
    "id_str": "1424094185410469888",
    "full_text": "On-stream tonight: aw what the heck let's get nflreadr to CRAN #rstats <br><br>Live at ~ 8pm ish: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Aug 06 14:50:12 +0000 2021",
    "id_str": "1423657666707173377",
    "full_text": "PENALTIES ARE INSANE WOW WOW WOW",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Aug 06 14:49:02 +0000 2021",
    "id_str": "1423657371012849669",
    "full_text": "<div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1423657371012849669-E8HY1J_WYAAT7BD.mp4\"></video></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 03 20:57:22 +0000 2021",
    "id_str": "1422662902520205315",
    "full_text": "<a href=\"https://twitter.com/mtdukes\">@mtdukes</a> <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> <a href=\"https://twitter.com/jcorkecu\">@jcorkecu</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> Wait, misread the logic, okay that makes sense",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 03 01:19:17 +0000 2021",
    "id_str": "1422366428779491330",
    "full_text": "I'm enjoying doing these informal #TanTalks tutorials and would be happy to do more (trying to group them around specific topics) - if you have something you'd like me to look at in future streams like this, please let me know!",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 03 01:15:45 +0000 2021",
    "id_str": "1422365540513992706",
    "full_text": "Tonight we tackled wrangling JSON in #rstats (and talked a lot about unnesting and hoisting and other fun list-y stuff!)<br><br>Code repo here: <a href=\"https://github.com/tanho63/office_hours/tree/main/20210802-json_wrangling\">https://github.com/tanho63/office_hours/tree/main/20210802-json_wrangling</a><br><br>Video replay here: <a href=\"https://www.twitch.tv/videos/1106257479\">https://www.twitch.tv/videos/1106257479</a> (will expire eventually, please nag me if I don't add a youtube link soon) <a href=\"./_TanHo/status/1422223053832994818\">https://twitter.com/_TanHo/status/1422223053832994818</a>",
    "favorite_count": "22",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Aug 02 22:56:51 +0000 2021",
    "id_str": "1422330585511514118",
    "full_text": "Going live! <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1422223053832994818\">https://twitter.com/_TanHo/status/1422223053832994818</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Aug 02 19:11:03 +0000 2021",
    "id_str": "1422273760762208263",
    "full_text": "Absolutely love this thread on mental health and self-acceptance <a href=\"https://twitter.com/RufusPeabody/status/1422269898609369091\">https://twitter.com/RufusPeabody/status/1422269898609369091</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 02 18:21:40 +0000 2021",
    "id_str": "1422261333173624834",
    "full_text": "<a href=\"https://twitter.com/fhbrian\">@fhbrian</a> <a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> (presuming that you also follow me and allow push notifications, that is)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 02 15:55:22 +0000 2021",
    "id_str": "1422224515959033861",
    "full_text": "If you have examples of JSON that you'd like to see me tackle, please drop links/data in replies here and I'll gladly have a look!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 02 15:49:34 +0000 2021",
    "id_str": "1422223053832994818",
    "full_text": "Okay, so tonight I'll be doing a stream tutorial on wrangling JSON in #rstats, at about 7pm EDT - along the way I'll be talking about some of my favourite tidying tricks like hoist, pluck, map, and (of course) tibble() %&gt;% unnest()!<br><br>Tune in here: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1421949171133734912\">https://twitter.com/_TanHo/status/1421949171133734912</a>",
    "favorite_count": "53",
    "retweet_count": "8"
  },
  {
    "created_at": "Mon Aug 02 01:50:01 +0000 2021",
    "id_str": "1422011776598790144",
    "full_text": "I think my current fav idea so far is tackling JSON, but definitely keep throwing ideas at me and I'll try to get to them :)",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 01 21:41:15 +0000 2021",
    "id_str": "1421949171133734912",
    "full_text": "Hey #rstats friends - I have some free time tomorrow to do another tutorial ish stream. What might be a good thing for me to cover?",
    "favorite_count": "18",
    "retweet_count": "4"
  },
  {
    "created_at": "Sun Aug 01 20:56:10 +0000 2021",
    "id_str": "1421937824807411718",
    "full_text": "Kept working on this and landed here! (The URL does not work yet, in case you eager people type it into your address bars 😂) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1421937824807411718-E7u8sX4XsAUCMM9.png\"><img src=\"../../tweets_media/1421937824807411718-E7u8sX4XsAUCMM9.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 01 19:16:50 +0000 2021",
    "id_str": "1421912828093599750",
    "full_text": "Working through my #ggplot2 skillz w/ strategic similarity scores... still a little ways to go, but here's where I ended up after this stream!<br><br>#rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1421912828093599750-E7ulOSwXsAIOeb-.png\"><img src=\"../../tweets_media/1421912828093599750-E7ulOSwXsAIOeb-.png\"></a></li></ul></div>",
    "favorite_count": "36",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Aug 01 16:45:07 +0000 2021",
    "id_str": "1421874644932513792",
    "full_text": "Today on-stream: revamping some of the data viz for this SFB similarity-score app, and other fun shiny-ish stuff!<br><br>Live at 1pm EDT (in ~15 minutes!) <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1421608368737751040\">https://twitter.com/_TanHo/status/1421608368737751040</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 01 15:10:45 +0000 2021",
    "id_str": "1421850897831927812",
    "full_text": "WE DID IT FAM, WE GOT TOE KNEE <a href=\"https://twitter.com/TonyElHabr/status/1421848458412138500\">https://twitter.com/TonyElHabr/status/1421848458412138500</a>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 01 00:15:43 +0000 2021",
    "id_str": "1421625654144118788",
    "full_text": "Going live! <a href=\"./_TanHo/status/1421608368737751040\">https://twitter.com/_TanHo/status/1421608368737751040</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 31 23:07:01 +0000 2021",
    "id_str": "1421608368737751040",
    "full_text": "Tonight on-stream: dusting off some Shiny skills for the first time in a while after hyperfocusing on #rstats packages by wrapping some recent clustering modelling work into a similarity-score app. <br><br>Live in about an hour (8:15 EDT or so)! <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Feb 08 20:44:05 +0000 2023",
    "id_str": "1623422437043093504",
    "full_text": "👀👀👀 <a href=\"https://twitter.com/ShinyConf/status/1623353631813533696\">https://twitter.com/ShinyConf/status/1623353631813533696</a>",
    "favorite_count": "21",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 28 02:58:54 +0000 2021",
    "id_str": "1420217168885600257",
    "full_text": "Uhh <a href=\"https://twitter.com/kierisi\">@kierisi</a> are you giving <a href=\"https://twitter.com/drob\">@drob</a> courses on memes and if so where can I sign up? #SLICED #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1420217168885600257-E7Wf0okWEAAkDjv.png\"><img src=\"../../tweets_media/1420217168885600257-E7Wf0okWEAAkDjv.png\"></a></li></ul></div>",
    "favorite_count": "13",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Jul 27 14:06:37 +0000 2021",
    "id_str": "1420022821162569739",
    "full_text": "Added app-based 2FA to my twitter account today. In case anyone needed a nudge to do so - you totally should!",
    "favorite_count": "3",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Jul 25 17:02:36 +0000 2021",
    "id_str": "1419342330486796298",
    "full_text": "Live again! I'll be working on using ffsimulator to ask and try to answer some research questions I've been thinking about lately<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "5",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Jul 25 03:05:53 +0000 2021",
    "id_str": "1419131766221201415",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> and hamler i actually love as a profile, fwiw!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jul 25 02:42:57 +0000 2021",
    "id_str": "1419125994615619588",
    "full_text": "Quality doggo science, arf! <a href=\"https://twitter.com/aftonsteps/status/1419124704342777858\">https://twitter.com/aftonsteps/status/1419124704342777858</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jul 25 00:00:32 +0000 2021",
    "id_str": "1419085118787006469",
    "full_text": "Going live in ~ five! <a href=\"./_TanHo/status/1419005925789249539\">https://twitter.com/_TanHo/status/1419005925789249539</a>",
    "favorite_count": "4",
    "retweet_count": "3"
  },
  {
    "created_at": "Sat Jul 24 23:40:32 +0000 2021",
    "id_str": "1419080087308316672",
    "full_text": "Incredibly surprised to have hit a milestone today - 2^11 followers! <br><br>I'm so glad to have made so many wonderful friendships over the past few years, bonding over fantasy football, data science, and general nerdery🤓 <br><br>Here's to more fun, puns, and sun for everyone🌞 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1419080087308316672-E7GUkGVXEAMGcX9.png\"><img src=\"../../tweets_media/1419080087308316672-E7GUkGVXEAMGcX9.png\"></a></li></ul></div>",
    "favorite_count": "37",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 24 18:45:51 +0000 2021",
    "id_str": "1419005925789249539",
    "full_text": "On stream later today: assorted package maintenance (gah CRAN y u test \\donttest ?!) and possibly revamping my personal #rstats package to include some favourite ggplot themes!<br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "23",
    "retweet_count": "3"
  },
  {
    "created_at": "Sat Jul 24 18:35:45 +0000 2021",
    "id_str": "1419003386389803011",
    "full_text": "Incredibly hyped about getting ✨stickers ✨from <a href=\"https://twitter.com/ChelseaParlett\">@ChelseaParlett</a> in the mail today - these are so fantastic!!! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1419003386389803011-E7FQDovWEAgaFAx.jpg\"><img src=\"../../tweets_media/1419003386389803011-E7FQDovWEAgaFAx.jpg\"></a></li></ul></div>",
    "favorite_count": "39",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Jul 23 21:35:19 +0000 2021",
    "id_str": "1418686185644478464",
    "full_text": "<a href=\"https://twitter.com/DynastyZoltanFF\">@DynastyZoltanFF</a> <a href=\"https://twitter.com/dynasty_name\">@dynasty_name</a> <a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> <a href=\"https://twitter.com/dynasty_discord\">@dynasty_discord</a> Usually if you want to downweight the effect of outliers, using the median is better than using the mean of something minus throwing stuff out arbitrarily",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:21:43 +0000 2021",
    "id_str": "1418637465502601217",
    "full_text": "I have many many many more opinions but whew i'm tired and it's friday",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:28 +0000 2021",
    "id_str": "1418636899397341200",
    "full_text": "I similarly opine that modules and golem are hard to start with for new shiny devs (especially without previous pkg experience) and thus vastly prefer a simplified app.R one-pager as the primary structure for the entire app, referring to functions in R/ and data/ as necessary",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:28 +0000 2021",
    "id_str": "1418636897644171271",
    "full_text": "I chimed into this thread (which I largely agree with!)  make the complex parts of logic reusable. Packages are great for this and the primary way that logic should be wrapped up for production (useful for scripting, reporting, apps, or APIs) <a href=\"./_TanHo/status/1415709884021157891\">https://twitter.com/_TanHo/status/1415709884021157891</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:27 +0000 2021",
    "id_str": "1418636896113250305",
    "full_text": "Lastly, keep shiny simple. One of the biggest mistakes I've made with Shiny is doing the logic within the app. <br><br>The more complex the logic, the more likely that you don't want it being done while the user is waiting for it. <br><br>Complex server segment also mega pain to debug!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:27 +0000 2021",
    "id_str": "1418636894481625092",
    "full_text": "#2 - rely on good templating and take in UI/UX resources? bs4Dash and shinyMobile are good \"pit of success\" places to start (s/o <a href=\"https://twitter.com/divadnojnarg\">@divadnojnarg</a>)<br><br>I also like <a href=\"https://twitter.com/erikdkennedy\">@erikdkennedy</a> LearnUI blog a lot! (Blog is free, course is paid/looks-amazing/maybe-one-day-I'll-get-there)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:26 +0000 2021",
    "id_str": "1418636892829061125",
    "full_text": "CSS for shiny devs is two-part:<br><br>1) how do I get this element to look like/do what I want?<br>2) what does a good design/styling even look like?<br><br>I'm still not great at either of these but understanding css selectors is a billionty times +++EV for #1 <a href=\"https://wizardzines.com/comics/selectors/\">https://wizardzines.com/comics/selectors/</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Jul 23 18:19:26 +0000 2021",
    "id_str": "1418636891121934338",
    "full_text": "Apps are for USERS. What decision does the user make by visiting this app? What does the user learn? <br><br>How do they interact with your app to do this?<br><br>These guide how you should design the app, more so than how you came to understand the data or the logic that powers the app",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:26 +0000 2021",
    "id_str": "1418636889373003779",
    "full_text": "Two video resources for this: <br><br>I made a video! <a href=\"https://www.twitch.tv/videos/1065545295\">https://www.twitch.tv/videos/1065545295</a><br><br>which was inspired by <a href=\"https://twitter.com/hadleywickham\">@hadleywickham</a>'s video! <a href=\"https://www.youtube.com/watch?v=9w8ANOAlWy4\">https://www.youtube.com/watch?v=9w8ANOAlWy4</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:25 +0000 2021",
    "id_str": "1418636887921774598",
    "full_text": "Debugging shiny is a different beast because there's a whole layer of \"stuff that happens behind the scenes\" before you get to see the effect of your code. <br><br>browser()/debug() are key weapons here, but more important is thinking through the flow of data through the app",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 18:19:25 +0000 2021",
    "id_str": "1418636885384122370",
    "full_text": "Great stuff in this thread - I'll add that learning:<br><br>- to interpret errors + good debugging practices<br>- to think through user flows/stories before writing a single line of code<br>- basic CSS<br>- to keep shiny simple<br><br>made the biggest differences for me as a Shiny dev #rstats thread: <a href=\"<a href=\"<a href=\"<a href=\"<a href=\"<a href=\"<a href=\"<a href=\"<a href=\"<a href=\"https://t.co/lPykRZH0FN\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>\">https://t.co/lPykRZH0FN</a>",
    "favorite_count": "16",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Jul 23 13:57:30 +0000 2021",
    "id_str": "1418570975537516551",
    "full_text": "<a href=\"https://twitter.com/nickwan\">@nickwan</a> <a href=\"https://twitter.com/redickio\">@redickio</a> Things I don’t know at this time:<br>-&gt; how do I get the North America countries background to overlay underneath<br><br>All in all, I think this’ll be a fun sliced-like challenge for Nick to run and I might even be interested in competing…",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 23 13:57:11 +0000 2021",
    "id_str": "1418570894591635458",
    "full_text": "<a href=\"https://twitter.com/nickwan\">@nickwan</a> <a href=\"https://twitter.com/redickio\">@redickio</a>'s experience in Tableau definitely showed through, and deservingly had a better graded plot - but for “half-asleep-at-11pm” + “never-done-a-single-viz-before” I’m overall pleased by my efforts for a thirty minute challenge. I now know what the heck a fips code is!",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Jul 23 13:37:44 +0000 2021",
    "id_str": "1418565999385841664",
    "full_text": "Got drawn into a quick \"recreate-this-viz\" challenge on <a href=\"https://twitter.com/nickwan\">@nickwan</a>'s stream last night 🙈 and made my first ever map in ggplot🌎👨‍🎨🎨<br><br>Overall pleased by my efforts esp w/o prev map plot experience!<br><br>code: <a href=\"https://github.com/tanho63/office_hours/blob/master/R/viz-usmap.md\">https://github.com/tanho63/office_hours/blob/master/R/viz-usmap.md</a><br><br>#rstats <a href=\"https://twitter.com/nickwan/status/1418423668426821632\">https://twitter.com/nickwan/status/1418423668426821632</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1418565999385841664-E6_BzPeWUAAEjMd.png\"><img src=\"../../tweets_media/1418565999385841664-E6_BzPeWUAAEjMd.png\"></a></li><li><a href=\"../../tweets_media/1418565999385841664-E6_CBFYWUAEIfF7.png\"><img src=\"../../tweets_media/1418565999385841664-E6_CBFYWUAEIfF7.png\"></a></li></ul></div>",
    "favorite_count": "22",
    "retweet_count": "4"
  },
  {
    "created_at": "Fri Jul 23 04:15:18 +0000 2021",
    "id_str": "1418424457350328325",
    "full_text": "baby’s first geo plot 🎨👨‍🎨 <a href=\"https://twitter.com/nickwan/status/1418423968374079492\">https://twitter.com/nickwan/status/1418423968374079492</a>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 21 19:10:49 +0000 2021",
    "id_str": "1417925044362153991",
    "full_text": "<a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> and also as I'm correcting myself, here's the nflfastR discord link: <a href=\"https://discord.com/invite/5Er2FBnnQa\">https://discord.com/invite/5Er2FBnnQa</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 21 19:08:19 +0000 2021",
    "id_str": "1417924417955450880",
    "full_text": "<a href=\"https://twitter.com/adriancm93\">@adriancm93</a> One of the things I've struggled the most with over the course of the pandemic is coming to terms with what is \"within my control\" and what is \"outside of my control\". <br><br>It's really hard to separate these!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 21 19:02:26 +0000 2021",
    "id_str": "1417922935482982401",
    "full_text": "<a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> er, <a href=\"http://mastering-shiny.org\">http://mastering-shiny.org</a> ope",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 21 18:50:57 +0000 2021",
    "id_str": "1417920045678739458",
    "full_text": "<a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> Shiny: <br>- <a href=\"http://masteringshiny.org\">http://masteringshiny.org</a> is the definitive, there's also a bunch of tutorials <a href=\"https://shiny.rstudio.com/tutorial/\">https://shiny.rstudio.com/tutorial/</a><br><br>RStudio - just install + use it while learning R/ggplot/shiny, fluency with RStudio will come",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 21 17:02:16 +0000 2021",
    "id_str": "1417892696908255238",
    "full_text": "<a href=\"https://twitter.com/adriancm93\">@adriancm93</a> given the UK pattern I would suspect \"matter of time\", unfortunately",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 19:27:12 +0000 2021",
    "id_str": "1417566783632990210",
    "full_text": "<a href=\"https://twitter.com/JosiahParry\">@JosiahParry</a> #ggplot2 needs no introduction, #tidyverse needs no introduction etc",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 19:25:54 +0000 2021",
    "id_str": "1417566455781105671",
    "full_text": "<a href=\"https://twitter.com/JosiahParry\">@JosiahParry</a> It also namespaces the hashtag to be easier to find (cause shiny is not the first thing you get when you look up #shiny )",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 16:18:22 +0000 2021",
    "id_str": "1417519259157159939",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> i.e. \"knowing nothing about what actually happened in the future, what do we expect\"",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 13:51:50 +0000 2021",
    "id_str": "1417482381716512776",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> CRAN is an official package repository for R packages and does some robust checking/testing. It's kind of like getting published in a publication",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 12:33:41 +0000 2021",
    "id_str": "1417462718513176576",
    "full_text": "<a href=\"https://twitter.com/JordanBackes33\">@JordanBackes33</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> I believe there's a known bug that just came up in Sleeper leagues that should be resolved in the development version of ffscrapr",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 12:25:34 +0000 2021",
    "id_str": "1417460672514899983",
    "full_text": "I'm incredibly grateful to: <br><br>- all of the wonderful people beta-testing this for me (<a href=\"https://twitter.com/TAlbTree\">@TAlbTree</a>, <a href=\"https://twitter.com/philmanor\">@philmanor</a>, <a href=\"https://twitter.com/JustUriahFF\">@JustUriahFF</a> and more)<br>- the support and motivation from DS Twitch chat throughout this process<br>- and <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a>, without whom this package would not exist",
    "favorite_count": "13",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 12:25:32 +0000 2021",
    "id_str": "1417460666336792576",
    "full_text": "It also is extremely easy to get started with, automatically generates pretty plots, and is flexible and extensible for customizing your own simulations! <br><a href=\"https://twitter.com/ChristianLohr9/status/1416781893681532935?s=20\">https://twitter.com/ChristianLohr9/status/1416781893681532935?s=20</a>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 20 12:25:30 +0000 2021",
    "id_str": "1417460656853426178",
    "full_text": "It generates robust simulations and tons of data that helps you study:<br>- preseason ranks =&gt; actual outcomes<br>- league expected finishes and ranges of outcomes<br>- player contributions to season wins<br>- roster constructions<br>- effects of trades<br>- and more!",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Jul 20 12:25:28 +0000 2021",
    "id_str": "1417460650855514126",
    "full_text": "FOLKS I'M BEYOND STOKED TO SHARE THAT {ffsimulator} IS NOW ON🎉CRAN🔥#rstats<br><br>ffsimulator helps simulate fantasy football seasons using bootstrap resampling and incorporating <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> data, historical ADP rankings, and direct connections to your league!<br><br><a href=\"https://ffsimulator.ffverse.com\">https://ffsimulator.ffverse.com</a>",
    "favorite_count": "138",
    "retweet_count": "30"
  },
  {
    "created_at": "Tue Jul 20 00:58:46 +0000 2021",
    "id_str": "1417287834311008260",
    "full_text": "Hiya folks, thanks for tuning in to the rvest scraping tutorial!<br><br>You can see the recording (including all of the technical difficulties😭) here: <a href=\"https://www.twitch.tv/videos/1091907360\">https://www.twitch.tv/videos/1091907360</a><br><br>and the git repo here: <a href=\"https://github.com/tanho63/office_hours\">https://github.com/tanho63/office_hours</a><br><br>#rstats <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <a href=\"./_TanHo/status/1417141768261361664\">https://twitter.com/_TanHo/status/1417141768261361664</a>",
    "favorite_count": "7",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Jul 19 22:59:15 +0000 2021",
    "id_str": "1417257756269154313",
    "full_text": "Going live! #rstats <a href=\"./_TanHo/status/1417141768261361664\">https://twitter.com/_TanHo/status/1417141768261361664</a>",
    "favorite_count": "8",
    "retweet_count": "5"
  },
  {
    "created_at": "Mon Jul 19 17:37:39 +0000 2021",
    "id_str": "1417176824124264449",
    "full_text": "Whoa, looks like this is more popular than expected. I've started compiling a list of pages I'll try to tackle here (and i'll set up a proper repo for stuff later) <br><br><a href=\"https://gist.github.com/tanho63/2165d8e963b503e372f8811e1d6167fc\">https://gist.github.com/tanho63/2165d8e963b503e372f8811e1d6167fc</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 19 15:20:22 +0000 2021",
    "id_str": "1417142276606898182",
    "full_text": "(and I forgot to specify but I mean 7pm EDT)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 19 15:18:49 +0000 2021",
    "id_str": "1417141886750429187",
    "full_text": "<a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> If I have time, I can also look at some other scraping exercises :)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 19 15:18:21 +0000 2021",
    "id_str": "1417141768261361664",
    "full_text": "Figured I'd mention it earlier this time: I'll be going through a mini tutorial on rvest scraping in #rstats around ~7pm tonight based on a reprex from <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <br><br>You can tune in here (and it'll be recorded/posted to YT afterwards) <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "58",
    "retweet_count": "15"
  },
  {
    "created_at": "Sun Jul 18 22:33:00 +0000 2021",
    "id_str": "1416888765981859841",
    "full_text": "Just #SFB11 memes <a href=\"https://twitter.com/andyestridge\">@andyestridge</a> <a href=\"https://twitter.com/ericbelair\">@ericbelair</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1416888765981859841-E6nMgwwWYAI9QRS.png\"><img src=\"../../tweets_media/1416888765981859841-E6nMgwwWYAI9QRS.png\"></a></li></ul></div>",
    "favorite_count": "10",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Jul 18 16:56:42 +0000 2021",
    "id_str": "1416804131986157569",
    "full_text": "Today on-stream: revisiting #SFB11 positional clustering and mapping those clusters to simulation results!<br><br>Live in ~ five minutes! <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 17 23:59:31 +0000 2021",
    "id_str": "1416548149280247810",
    "full_text": "Going live! 🙌 <a href=\"./_TanHo/status/1416437328801935362\">https://twitter.com/_TanHo/status/1416437328801935362</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 17 16:39:09 +0000 2021",
    "id_str": "1416437328801935362",
    "full_text": "Today on stream: running the final checks on ffsimulator and submitting it to CRAN for the first time. <br><br>Also, I've polished up a bunch of docs, figured out what's NOT making v1, and and think it's ...(gulp) ready?<br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a><br><br>#RStats",
    "favorite_count": "9",
    "retweet_count": "3"
  },
  {
    "created_at": "Thu Jul 15 21:14:16 +0000 2021",
    "id_str": "1415781785796026368",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> <a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> <a href=\"https://twitter.com/andyestridge\">@andyestridge</a> <a href=\"https://twitter.com/ericbelair\">@ericbelair</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> shush I can do a hundred seasons for a 12 team league in 30 seconds",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 15 20:43:01 +0000 2021",
    "id_str": "1415773921694072840",
    "full_text": "<a href=\"https://twitter.com/andyestridge\">@andyestridge</a> <a href=\"https://twitter.com/ericbelair\">@ericbelair</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> Like, I DIDN'T WANT TO THINK ABOUT HOW TO DEAL WITH OPTIMIZING INVALID LINEUPS YOU PRICKS",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 15 16:36:46 +0000 2021",
    "id_str": "1415711949938122755",
    "full_text": "<a href=\"https://twitter.com/JosiahParry\">@JosiahParry</a> I still prefer to start my thought process in scripts or notebooks, but converting to functions is +++EV when it comes time to do anything with it",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 15 14:11:00 +0000 2021",
    "id_str": "1415675266689642496",
    "full_text": "Another day, another #SFB11 curiosities thread, this time by request of <a href=\"https://twitter.com/BigDougie83\">@BigDougie83</a>: who drafted the most rookies? A full half (11!) of <a href=\"https://twitter.com/fantasynumbers\">@fantasynumbers</a>'s squad is made up of rookies, and <a href=\"https://twitter.com/dynasty_jake\">@dynasty_jake</a>'s not far behind with 10 🐣after that, there are seven people with 9! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415675266689642496-E6TiCBWWQAAJtcl.png\"><img src=\"../../tweets_media/1415675266689642496-E6TiCBWWQAAJtcl.png\"></a></li><li><a href=\"../../tweets_media/1415675266689642496-E6TiCBTXsAQ9gaC.png\"><img src=\"../../tweets_media/1415675266689642496-E6TiCBTXsAQ9gaC.png\"></a></li><li><a href=\"../../tweets_media/1415675266689642496-E6TiBlKXMAYkAmy.png\"><img src=\"../../tweets_media/1415675266689642496-E6TiBlKXMAYkAmy.png\"></a></li></ul></div>",
    "favorite_count": "8",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Jul 14 18:47:18 +0000 2021",
    "id_str": "1415382412419338244",
    "full_text": "And <a href=\"https://twitter.com/Smokewagon47\">@Smokewagon47</a> and <a href=\"https://twitter.com/DTC_IzzyE\">@DTC_IzzyE</a> are taking the quadruple approach to TE and kicker respectively! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415382412419338244-E6RygvCWEAIdTQg.png\"><img src=\"../../tweets_media/1415382412419338244-E6RygvCWEAIdTQg.png\"></a></li><li><a href=\"../../tweets_media/1415382412419338244-E6RyU4hXEAYveUC.png\"><img src=\"../../tweets_media/1415382412419338244-E6RyU4hXEAYveUC.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jul 14 18:47:17 +0000 2021",
    "id_str": "1415382408816439298",
    "full_text": ".<a href=\"https://twitter.com/IanKenyonNFL\">@IanKenyonNFL</a> is living the \"quantity is it's own quality\" life at QB, taking six straight after being the absolute last person to his first one... <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415382408816439298-E6Rylu4WUAQ5cYV.png\"><img src=\"../../tweets_media/1415382408816439298-E6Rylu4WUAQ5cYV.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 14 18:47:16 +0000 2021",
    "id_str": "1415382406719279104",
    "full_text": "(and because I'm a data completionist, diving through the other positions...)<br><br><a href=\"https://twitter.com/damenbrookes\">@damenbrookes</a> and <a href=\"https://twitter.com/DougyG27\">@DougyG27</a> share the feat of seven straight RBs... <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415382406719279104-E6Ryxo-WUAY87B2.png\"><img src=\"../../tweets_media/1415382406719279104-E6Ryxo-WUAY87B2.png\"></a></li><li><a href=\"../../tweets_media/1415382406719279104-E6RxkjbXsAY6p6x.png\"><img src=\"../../tweets_media/1415382406719279104-E6RxkjbXsAY6p6x.png\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 14 18:47:16 +0000 2021",
    "id_str": "1415382402801836039",
    "full_text": "Today, in random #SFB11 curiosities: you've heard of doubletapping a position, but have you ever, uh, octuple-tapped WRs? (s/o <a href=\"https://twitter.com/frank_duffy\">@frank_duffy</a>) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415382402801836039-E6RxG9SWYAInlhQ.png\"><img src=\"../../tweets_media/1415382402801836039-E6RxG9SWYAInlhQ.png\"></a></li></ul></div>",
    "favorite_count": "18",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Jul 14 13:51:50 +0000 2021",
    "id_str": "1415308057173692419",
    "full_text": "I just realized my initial screenshot shows conversion to integers - just updated the gist with the appropriate code",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 14 00:05:39 +0000 2021",
    "id_str": "1415100138989707266",
    "full_text": "This thread was inspired by <a href=\"https://twitter.com/alyssastweeting\">@alyssastweeting</a>'s Twitch stream last night - check out the cool dataviz here, and happy #TidyTuesday! <br><a href=\"https://twitter.com/alyssastweeting/status/1414766593758744579?s=20\">https://twitter.com/alyssastweeting/status/1414766593758744579?s=20</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jul 14 00:05:38 +0000 2021",
    "id_str": "1415100137945325573",
    "full_text": "Why use many line when one line do trick? <br><br>You can read more about this pivot_longer feature here: <a href=\"https://tidyr.tidyverse.org/articles/pivot.html#multiple-observations-per-row\">https://tidyr.tidyverse.org/articles/pivot.html#multiple-observations-per-row</a>",
    "favorite_count": "13",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 14 00:05:38 +0000 2021",
    "id_str": "1415100136305397762",
    "full_text": "pivot_longer has a \"names_to\" argument that takes a special \"sentinel value\" called \".value\" - it immediately re-pivots the cols so that \"character\" (fred, daphne etc) stays as a column and then the \".value\" part becomes colnames (caught, captured etc) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415100136305397762-E6NxBUcWEAEyWMm.jpg\"><img src=\"../../tweets_media/1415100136305397762-E6NxBUcWEAEyWMm.jpg\"></a></li><li><a href=\"../../tweets_media/1415100136305397762-E6NuyIPWEAANnts.png\"><img src=\"../../tweets_media/1415100136305397762-E6NuyIPWEAANnts.png\"></a></li></ul></div>",
    "favorite_count": "23",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Jul 14 00:05:37 +0000 2021",
    "id_str": "1415100131582615554",
    "full_text": "Past me: hmm, well, I can pivot_longer, then separate the name, then pivot_wider again?<br><br>Seems to work okay! <br><br>BUT WHAT IF I TOLD YOU THERE IS A ONE LINER? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415100131582615554-E6Nw0L4WEAMY19K.png\"><img src=\"../../tweets_media/1415100131582615554-E6Nw0L4WEAMY19K.png\"></a></li><li><a href=\"../../tweets_media/1415100131582615554-E6NterIX0Awy-_C.png\"><img src=\"../../tweets_media/1415100131582615554-E6NterIX0Awy-_C.png\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Jul 14 00:05:36 +0000 2021",
    "id_str": "1415100128172646400",
    "full_text": "Gist here with all code in this thread: <a href=\"https://gist.github.com/tanho63/50d9b323e29165ad3e027bc3cf1c5926\">https://gist.github.com/tanho63/50d9b323e29165ad3e027bc3cf1c5926</a>",
    "favorite_count": "12",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 14 00:05:36 +0000 2021",
    "id_str": "1415100126272577536",
    "full_text": "A random #TidyTuesday #rstats thread! <br><br>One of my favourite data-wrangling tricks is tidyr::pivot_longer's names_to &amp; .value sentinel - use-cases don't come up often, but it's soo ✨satisfying✨when it does!<br><br>Let's say you have this starting dataframe and you want this end: <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1415100126272577536-E6NsNv0XEAUXr0e.png\"><img src=\"../../tweets_media/1415100126272577536-E6NsNv0XEAUXr0e.png\"></a></li><li><a href=\"../../tweets_media/1415100126272577536-E6NqxJ1WYAE2-F4.png\"><img src=\"../../tweets_media/1415100126272577536-E6NqxJ1WYAE2-F4.png\"></a></li></ul></div>",
    "favorite_count": "219",
    "retweet_count": "43"
  },
  {
    "created_at": "Tue Jul 13 20:34:12 +0000 2021",
    "id_str": "1415046929483018243",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> or, yknow, <a href=\"http://ffsimulator.ffverse.com\">http://ffsimulator.ffverse.com</a> and/or wait for me to tweet it once i sort out how the hell to do kickers",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 12 19:20:25 +0000 2021",
    "id_str": "1414665971848163331",
    "full_text": "Brief #SFB11 Positional Chicken update (no thread, just pictures + tags) <a href=\"https://twitter.com/Jman_FF/status/1414636665944031240\">https://twitter.com/Jman_FF/status/1414636665944031240</a><br><a href=\"https://twitter.com/ericbelair\">@ericbelair</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> <a href=\"https://twitter.com/andyestridge\">@andyestridge</a> hunting RB crown (<a href=\"https://twitter.com/smendels90\">@smendels90</a> folded with Gio!), fifteen left in TEs (<a href=\"https://twitter.com/Jman_FF\">@Jman_FF</a> passing <a href=\"https://twitter.com/cooterdoodle\">@cooterdoodle</a> for lead), <a href=\"https://twitter.com/hjchami\">@hjchami</a> claiming WRs *shock* <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1414665971848163331-E6Hm0YlXMAASRJD.png\"><img src=\"../../tweets_media/1414665971848163331-E6Hm0YlXMAASRJD.png\"></a></li><li><a href=\"../../tweets_media/1414665971848163331-E6Hm0YoXEAga3O9.png\"><img src=\"../../tweets_media/1414665971848163331-E6Hm0YoXEAga3O9.png\"></a></li><li><a href=\"../../tweets_media/1414665971848163331-E6HZeLIXIAMJVRZ.png\"><img src=\"../../tweets_media/1414665971848163331-E6HZeLIXIAMJVRZ.png\"></a></li><li><a href=\"../../tweets_media/1414665971848163331-E6HZgNtWUAIpkJQ.png\"><img src=\"../../tweets_media/1414665971848163331-E6HZgNtWUAIpkJQ.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "3"
  },
  {
    "created_at": "Mon Jul 12 14:59:26 +0000 2021",
    "id_str": "1414600291228467200",
    "full_text": "Shoutout of snipes that made me grumpy:<br>- <a href=\"https://twitter.com/TheCommishFF\">@TheCommishFF</a> (Swift, Hooper, Alie-Cox going 1 spot ahead of me AGH)<br>- <a href=\"https://twitter.com/FantasyPastor\">@FantasyPastor</a> (Keenan, Jared Cook going 2 spots ahead of me smashing them)<br>- <a href=\"https://twitter.com/ChrisAllenFFWX\">@ChrisAllenFFWX</a> (AB😭)<br>- <a href=\"https://twitter.com/Fantasy_Giant\">@Fantasy_Giant</a> (Evans and Brandin Cooks😢)<br><br>LP was sharp AF!",
    "favorite_count": "4",
    "retweet_count": "3"
  },
  {
    "created_at": "Mon Jul 12 14:42:37 +0000 2021",
    "id_str": "1414596062078189579",
    "full_text": "In true SFB spirit, I've also made a donation towards <a href=\"https://twitter.com/BlackGirlsCode\">@BlackGirlsCode</a> - a fantastic charity working on building up a brighter future for girls of colour in STEM! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1414596062078189579-E6GmqSFXIAYL4HK.jpg\"><img src=\"../../tweets_media/1414596062078189579-E6GmqSFXIAYL4HK.jpg\"></a></li><li><a href=\"../../tweets_media/1414596062078189579-E6GmrgrXoA0CNqe.png\"><img src=\"../../tweets_media/1414596062078189579-E6GmrgrXoA0CNqe.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 12 14:42:36 +0000 2021",
    "id_str": "1414596056957046786",
    "full_text": "And that's a wrap for my #SFB11 team! <br><br>It was an absolute pleasure drafting against the Linkin Park division. I also left them some fun ✨Easter eggs✨as I went 🧙‍♂️<br><br>Immensely grateful for all of the work that <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a>, <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> and their team do in organizing this event! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1414596056957046786-E6GnGwtWQAw_bty.png\"><img src=\"../../tweets_media/1414596056957046786-E6GnGwtWQAw_bty.png\"></a></li><li><a href=\"../../tweets_media/1414596056957046786-E6Gj_u4XIAIt3aD.jpg\"><img src=\"../../tweets_media/1414596056957046786-E6Gj_u4XIAIt3aD.jpg\"></a></li></ul></div>",
    "favorite_count": "15",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Jul 11 20:32:17 +0000 2021",
    "id_str": "1414321670513430529",
    "full_text": "Example usage here: <a href=\"https://github.com/ffverse/ffsimulator/blob/main/dev/autoplot.md\">https://github.com/ffverse/ffsimulator/blob/main/dev/autoplot.md</a>",
    "favorite_count": "7",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Jul 11 20:30:13 +0000 2021",
    "id_str": "1414321147810881536",
    "full_text": "added autoplot to ffsimulator, v satisfied with self *pats self on back* #rstats package dev woop woop <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1414321147810881536-E6CtgOhWQAExXqU.png\"><img src=\"../../tweets_media/1414321147810881536-E6CtgOhWQAExXqU.png\"></a></li></ul></div>",
    "favorite_count": "54",
    "retweet_count": "6"
  },
  {
    "created_at": "Sun Jul 11 17:01:11 +0000 2021",
    "id_str": "1414268546280996868",
    "full_text": "✨autoplots assemble ✨(going live!) <a href=\"./_TanHo/status/1414232565658046471\">https://twitter.com/_TanHo/status/1414232565658046471</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Jul 11 14:38:13 +0000 2021",
    "id_str": "1414232565658046471",
    "full_text": "Cheating on my schedule a little today by teaching myself how to add autoplots to an #rstats package, but hey it’s still data viz! <br><br>Live at 1pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"https://t.co/RDP4rcz9wR\">https://t.co/RDP4rcz9wR</a>",
    "favorite_count": "2",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Jul 11 00:00:36 +0000 2021",
    "id_str": "1414011707844927493",
    "full_text": "Going live! <a href=\"./_TanHo/status/1413900209969668103\">https://twitter.com/_TanHo/status/1413900209969668103</a>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 10 19:07:28 +0000 2021",
    "id_str": "1413937936610078725",
    "full_text": "As always, I am 💯endorsing that you chase these titles, as a ~~non~~ biased observer!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 10 19:07:28 +0000 2021",
    "id_str": "1413937934806491137",
    "full_text": "Aaand lastly, I got a few messages asking for, uh, kicker stats, so let's look at earliest PK selections (hello <a href=\"https://twitter.com/The1Hudsonian\">@The1Hudsonian</a>, <a href=\"https://twitter.com/koswede\">@koswede</a>, <a href=\"https://twitter.com/gladysLtyler\">@gladysLtyler</a>) as well as most kickers taken (<a href=\"https://twitter.com/maliacbarnett\">@maliacbarnett</a> has four!) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413937934806491137-E59QxKZX0AISOv3.png\"><img src=\"../../tweets_media/1413937934806491137-E59QxKZX0AISOv3.png\"></a></li><li><a href=\"../../tweets_media/1413937934806491137-E59QjJnX0AIxe45.png\"><img src=\"../../tweets_media/1413937934806491137-E59QjJnX0AIxe45.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 10 19:07:26 +0000 2021",
    "id_str": "1413937929928445956",
    "full_text": "The field of Chicken TE has shrunk to only 109 (that's less than half of the 274 people without TEs as of yesterday!), with <a href=\"https://twitter.com/DTC_IzzyE\">@DTC_IzzyE</a> , <a href=\"https://twitter.com/adamrank\">@adamrank</a>, and <a href=\"https://twitter.com/Jman_FF\">@Jman_FF</a> leading the pack chasing <a href=\"https://twitter.com/cooterdoodle\">@cooterdoodle</a>'s mark of 17.06! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413937929928445956-E59PSa7XIAAaJE3.png\"><img src=\"../../tweets_media/1413937929928445956-E59PSa7XIAAaJE3.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 10 19:07:25 +0000 2021",
    "id_str": "1413937925067264000",
    "full_text": "Only <a href=\"https://twitter.com/hjchami\">@hjchami</a> is still without a receiver after his most recent pick, 10.01, although he's got a bit of a long way to go to catch <a href=\"https://twitter.com/FL2drinkMinimum\">@FL2drinkMinimum</a> at 12.09 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413937925067264000-E59Od0KWUBAuqCA.png\"><img src=\"../../tweets_media/1413937925067264000-E59Od0KWUBAuqCA.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 10 19:07:24 +0000 2021",
    "id_str": "1413937920667525125",
    "full_text": "Chicken RB is still underway! Five teams still don't have a RB, most insanely <a href=\"https://twitter.com/smendels90\">@smendels90</a> still without his first RB after pick 15.10, <a href=\"https://twitter.com/ericbelair\">@ericbelair</a> without one after 14.08, and <a href=\"https://twitter.com/amicsta\">@amicsta</a> / <a href=\"https://twitter.com/andyestridge\">@andyestridge</a>  / <a href=\"https://twitter.com/peteroverzet\">@peteroverzet</a> still without one after 10.01. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413937920667525125-E59ND7RWUAA6GY-.png\"><img src=\"../../tweets_media/1413937920667525125-E59ND7RWUAA6GY-.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 10 19:07:23 +0000 2021",
    "id_str": "1413937916137586688",
    "full_text": "Chicken QB is settled and belongs to <a href=\"https://twitter.com/IanKenyonNFL\">@IanKenyonNFL</a> at a ridiculous pick 12.12, one pick ahead <a href=\"https://twitter.com/PauLimas10\">@PauLimas10</a>'s first QB at 12.11, and both a little ways ahead of than <a href=\"https://twitter.com/FF_Peacock\">@FF_Peacock</a> taking his QB at 11.03. I think <a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a> already awarded a ... trophy ...? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413937916137586688-E59MOEkWUAoAZsE.png\"><img src=\"../../tweets_media/1413937916137586688-E59MOEkWUAoAZsE.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 10 19:07:22 +0000 2021",
    "id_str": "1413937913323196416",
    "full_text": "By request of <a href=\"https://twitter.com/ericbelair\">@ericbelair</a>, here's a Saturday #SFB11 Positional Chicken Update, now including the current \"leaders\" (i.e. the latest to take their first at the position, should match <a href=\"https://twitter.com/Josh_ADHD\">@Josh_ADHD</a>'s app) <a href=\"https://twitter.com/ericbelair/status/1413925698893398022\">https://twitter.com/ericbelair/status/1413925698893398022</a>",
    "favorite_count": "3",
    "retweet_count": "3"
  },
  {
    "created_at": "Sat Jul 10 18:03:43 +0000 2021",
    "id_str": "1413921894642954248",
    "full_text": "<a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> <a href=\"https://twitter.com/jpflores_31\">@jpflores_31</a> <a href=\"https://twitter.com/SaiemGilani\">@SaiemGilani</a> <a href=\"https://twitter.com/JesseOPiburn\">@JesseOPiburn</a> And yes, plenty of data and apps aggregated via dynastyprocess as Tom linked, repos can be found here <a href=\"https://GitHub.com/DynastyProcess\">https://GitHub.com/DynastyProcess</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 10 16:37:33 +0000 2021",
    "id_str": "1413900209969668103",
    "full_text": "Tonight on stream: continuing to push ffsimulator #rstats package towards CRAN-readiness and talking #SFB11 draft! <br><br>Live around 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Jul 10 15:57:30 +0000 2021",
    "id_str": "1413890128523808774",
    "full_text": "Hey <a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> did I do this right <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413890128523808774-E58laKKXoAY5jvG.png\"><img src=\"../../tweets_media/1413890128523808774-E58laKKXoAY5jvG.png\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 09 17:35:07 +0000 2021",
    "id_str": "1413552308139462667",
    "full_text": "Also yes I haven’t put in the current leader who had taken one, next iteration will have it",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 09 13:11:48 +0000 2021",
    "id_str": "1413486044029280259",
    "full_text": "(I may or may not be trying to goad people into going further craziness...)",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 09 13:11:48 +0000 2021",
    "id_str": "1413486042380963841",
    "full_text": "TE chicken squad is, uh, quite full - 274 people without one so far! Notables: <a href=\"https://twitter.com/fftheathomedad\">@fftheathomedad</a>, <a href=\"https://twitter.com/ChadParsonsNFL\">@ChadParsonsNFL</a>, <a href=\"https://twitter.com/dibari22\">@dibari22</a> , and....me? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413486042380963841-E5218EjVUAgE9gL.png\"><img src=\"../../tweets_media/1413486042380963841-E5218EjVUAgE9gL.png\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Jul 09 13:11:47 +0000 2021",
    "id_str": "1413486040002830336",
    "full_text": "WRs? What WRs? Found <a href=\"https://twitter.com/hjchami\">@hjchami</a>, also <a href=\"https://twitter.com/ff_spaceman\">@ff_spaceman</a> and <a href=\"https://twitter.com/ItsTimTorch\">@ItsTimTorch</a> ?! (DAVE WAT U DOIN?!?!) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413486040002830336-E521sZ5VkAAEkJI.png\"><img src=\"../../tweets_media/1413486040002830336-E521sZ5VkAAEkJI.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 09 13:11:47 +0000 2021",
    "id_str": "1413486037519802370",
    "full_text": "ZeroRB truther squad currently being led by <a href=\"https://twitter.com/smendels90\">@smendels90</a>, but this includes some famous names like <a href=\"https://twitter.com/YardsPerGretch\">@YardsPerGretch</a>, <a href=\"https://twitter.com/2Hats1Mike\">@2Hats1Mike</a>, <a href=\"https://twitter.com/AmItheRealBlair\">@AmItheRealBlair</a>, and <a href=\"https://twitter.com/amicsta\">@amicsta</a>! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413486037519802370-E521qmCUYAA-R9N.png\"><img src=\"../../tweets_media/1413486037519802370-E521qmCUYAA-R9N.png\"></a></li></ul></div>",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Jul 09 13:11:46 +0000 2021",
    "id_str": "1413486034982215682",
    "full_text": "Quarterback chicken...in this ~~economy~~ scoring?! <a href=\"https://twitter.com/PauLimas10\">@PauLimas10</a> and <a href=\"https://twitter.com/IanKenyonNFL\">@IanKenyonNFL</a> neck and neck, and still time for <a href=\"https://twitter.com/BennyR11\">@BennyR11</a> to take a turn back to sanity! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413486034982215682-E521mt9VoAozw2C.png\"><img src=\"../../tweets_media/1413486034982215682-E521mt9VoAozw2C.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 09 13:11:46 +0000 2021",
    "id_str": "1413486033094729730",
    "full_text": "Happy Friday, folks! Inspired by <a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a>'s annual game of QB chicken of past years, let's have a peek in at the #SFB11 \"positional chicken\" lists so far...",
    "favorite_count": "13",
    "retweet_count": "8"
  },
  {
    "created_at": "Thu Jul 08 23:49:28 +0000 2021",
    "id_str": "1413284129324535808",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> I appreciate FF charts and even more so when it boosts my self-esteem 😎that said I can't wait to run ffsimulator over 1000 seasons and figure out what percentile I'm at",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 08 23:44:55 +0000 2021",
    "id_str": "1413282984225038339",
    "full_text": ".<a href=\"https://twitter.com/theDudeZee\">@theDudeZee</a> says I have to tag <a href=\"https://twitter.com/amazehayes_\">@amazehayes_</a> and #SFB11",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 08 23:39:23 +0000 2021",
    "id_str": "1413281591087050758",
    "full_text": "Really interesting thread and methodology by Nick - I'm looking forward to seeing how ffsimulator stacks all of these teams up also!<br><br>Here's how the first half of the LP draft has shaken out so far: <a href=\"https://twitter.com/electronicks_ff/status/1413198069139742727\">https://twitter.com/electronicks_ff/status/1413198069139742727</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1413281591087050758-E5z8G_oWQAECrT0.jpg\"><img src=\"../../tweets_media/1413281591087050758-E5z8G_oWQAECrT0.jpg\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 07 16:06:41 +0000 2021",
    "id_str": "1412805279180279809",
    "full_text": "<a href=\"https://twitter.com/aftonsteps\">@aftonsteps</a> <a href=\"https://twitter.com/kierisi\">@kierisi</a> <a href=\"https://twitter.com/theRcast\">@theRcast</a> Can we just roll it five times and divide that number by three, rounding to the nearest int?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 06 19:35:15 +0000 2021",
    "id_str": "1412495375991291910",
    "full_text": "Continuing to work on my quickplot skills - by request of the LP division chat, here's \"does the number of fans/celebrities in a #SFB11 division affect how fast it drafts?\"<br><br>...nope, no effect! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1412495375991291910-E5owt1pXoAs1_pL.png\"><img src=\"../../tweets_media/1412495375991291910-E5owt1pXoAs1_pL.png\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Jul 04 19:36:54 +0000 2021",
    "id_str": "1411771015026327560",
    "full_text": "ffsimulator combines preseason FP rankings with the weekly outcomes for those players, resampling from those outcomes to generate simulated fantasy seasons. <br><br>More about ffsimulator here: <a href=\"https://ffsimulator.ffverse.com\">https://ffsimulator.ffverse.com</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jul 04 19:36:53 +0000 2021",
    "id_str": "1411771013390647298",
    "full_text": "Had a quick look at this, c/o <a href=\"https://twitter.com/brianmcleish2\">@brianmcleish2</a>! ffsimulator seems to think that ADP's WR24 range of outcomes is better than RB20 (at the 25th, 50th, and 75th percentiles of outcomes) for #SFB11 scoring. <br><br>#rstats <a href=\"https://twitter.com/brianmcleish2/status/1411676441620750336\">https://twitter.com/brianmcleish2/status/1411676441620750336</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1411771013390647298-E5eeOOKXMAA_eEe.png\"><img src=\"../../tweets_media/1411771013390647298-E5eeOOKXMAA_eEe.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Jul 04 16:38:28 +0000 2021",
    "id_str": "1411726113559154689",
    "full_text": "Continuing to plug away on this on today's stream, and later tonight ~8pm ish I'll do a bonus stream where I do SFB mocks and research and stuff (classic procrastinating energy)<br><br>Live at about 1pm EDT (~20 minutes!): <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1411359668404883465\">https://twitter.com/_TanHo/status/1411359668404883465</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jul 04 00:03:16 +0000 2021",
    "id_str": "1411475664184786947",
    "full_text": "Going live! <a href=\"./_TanHo/status/1411359668404883465\">https://twitter.com/_TanHo/status/1411359668404883465</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 03 16:22:21 +0000 2021",
    "id_str": "1411359668404883465",
    "full_text": "Tonight on stream: putting finishing touches on ffsimulator #rstats package and pushing it towards CRAN submission readiness - summaries, docs, and tests 🤓<br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "10",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Jun 30 15:12:33 +0000 2021",
    "id_str": "1410254938735796228",
    "full_text": "<a href=\"https://twitter.com/LeeSharpeNFL\">@LeeSharpeNFL</a> <a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> <a href=\"https://twitter.com/benj_robinson\">@benj_robinson</a> (Looking forward to seeing the results of this!)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 28 16:20:12 +0000 2021",
    "id_str": "1409547187462324224",
    "full_text": "MORE DATA SCIENCE TWITCH STREAMERS WOOHOO! #rstats <a href=\"https://twitter.com/trevin_flick/status/1409546287758839813\">https://twitter.com/trevin_flick/status/1409546287758839813</a>",
    "favorite_count": "7",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Jun 27 17:00:56 +0000 2021",
    "id_str": "1409195050555297793",
    "full_text": "On stream today: more work on my ffsimulator #rstats package - linking all of the pieces together and tying it all into a single main function. <br><br>Also taking requests on simulating charts for your fantasy league, like the below!<br><br>Live in ~ 5 min: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1409195050555297793-E452q_6WQAEWKsb.png\"><img src=\"../../tweets_media/1409195050555297793-E452q_6WQAEWKsb.png\"></a></li></ul></div>",
    "favorite_count": "13",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Jun 27 00:03:04 +0000 2021",
    "id_str": "1408938898995167232",
    "full_text": "Going live! <a href=\"./_TanHo/status/1408914591241867264\">https://twitter.com/_TanHo/status/1408914591241867264</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jun 26 22:26:29 +0000 2021",
    "id_str": "1408914591241867264",
    "full_text": "Tonight on stream: recapping work since last stream’s #rstats linear programming adventures (and speeding it up 100x!) and then working on generating round robin schedules and investigating work already done by <a href=\"https://twitter.com/TonyElHabr\">@TonyElHabr</a>! <br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "7",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Jun 25 14:13:16 +0000 2021",
    "id_str": "1408428079215747077",
    "full_text": "<a href=\"https://twitter.com/kierisi\">@kierisi</a> <a href=\"https://twitter.com/aftonsteps\">@aftonsteps</a> <a href=\"https://twitter.com/theRcast\">@theRcast</a> <a href=\"https://twitter.com/IAmJericho\">@IAmJericho</a> (and Chris Jericho, for some reason!)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 24 00:00:57 +0000 2021",
    "id_str": "1407851199982981123",
    "full_text": "<a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <a href=\"https://twitter.com/Shel_Kariuki\">@Shel_Kariuki</a> Video here: <a href=\"https://www.twitch.tv/videos/1065545295\">https://www.twitch.tv/videos/1065545295</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jun 23 22:55:03 +0000 2021",
    "id_str": "1407834617944621056",
    "full_text": "A short and random #rstats twitch stream: debugging a Shiny app problem found on <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> and narrating my thoughts - app by <a href=\"https://twitter.com/Shel_Kariuki\">@Shel_Kariuki</a>! <br><br>Live now: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "9",
    "retweet_count": "5"
  },
  {
    "created_at": "Tue Jun 22 13:54:22 +0000 2021",
    "id_str": "1407336159190073350",
    "full_text": "Followup thought: <br><br>Understanding where you generally stand on these compared to the market and especially your leaguemates helps you build a framework for making decisions",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 22 13:44:00 +0000 2021",
    "id_str": "1407333551843037200",
    "full_text": "wait did I just mentally run a PCA model over dynasty twitter <a href=\"./_TanHo/status/1407331558613303305\">https://twitter.com/_TanHo/status/1407331558613303305</a>",
    "favorite_count": "13",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 22 13:36:23 +0000 2021",
    "id_str": "1407331637461934093",
    "full_text": "(inspired by a discussion on <a href=\"https://twitter.com/dynasty_discord\">@dynasty_discord</a>)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 22 13:36:05 +0000 2021",
    "id_str": "1407331558613303305",
    "full_text": "I think the five biggest philosophical debates in (dynasty) fantasy football are:<br><br>- value vs production<br>- analytics vs film<br>- talent vs situation<br>- studs vs depth<br>- team structure vs player evaluation",
    "favorite_count": "27",
    "retweet_count": "7"
  },
  {
    "created_at": "Mon Jun 21 03:15:50 +0000 2021",
    "id_str": "1406813079950835719",
    "full_text": "I see The <a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> Effect at work here 😂 <a href=\"https://twitter.com/JackMiller02/status/1406812144813887492\">https://twitter.com/JackMiller02/status/1406812144813887492</a>",
    "favorite_count": "6",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Jun 21 02:36:34 +0000 2021",
    "id_str": "1406803200146018305",
    "full_text": "Kevin is live 💫right now💫 and talking through his ideas for a tidymodels customization package!!<br><br>#rstats <br><br><a href=\"https://twitch.tv/kkent999\">https://twitch.tv/kkent999</a> <a href=\"https://twitter.com/kevin_m_kent/status/1406778641950904321\">https://twitter.com/kevin_m_kent/status/1406778641950904321</a>",
    "favorite_count": "8",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Jun 20 16:50:02 +0000 2021",
    "id_str": "1406655594082279424",
    "full_text": "On stream today: continuing to figure out how to do linear programming in R for my ffsimulator package! <br><br>Live in about ten minutes: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jun 20 00:07:50 +0000 2021",
    "id_str": "1406403383020429317",
    "full_text": "Going live! <a href=\"./_TanHo/status/1406370730154020867\">https://twitter.com/_TanHo/status/1406370730154020867</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jun 19 21:58:05 +0000 2021",
    "id_str": "1406370730154020867",
    "full_text": "On stream tonight: continuing work on the ffsimulator package, including teaching myself how to use #rstats linear programming packages like lpSolve, ROI, and/or ompr (?!) <br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Jun 19 17:58:18 +0000 2021",
    "id_str": "1406310386182283264",
    "full_text": "Lazy #rstats - anyone have recommendations on a linear/constraint programming package? I know of lpSolve but haven't worked with it, any others worth looking into?",
    "favorite_count": "2",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Jun 19 03:09:05 +0000 2021",
    "id_str": "1406086607246036993",
    "full_text": "Code here: <a href=\"https://github.com/dynastyprocess/research-scottfishbowl/blob/master/R/draft_slots.md\">https://github.com/dynastyprocess/research-scottfishbowl/blob/master/R/draft_slots.md</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jun 19 03:02:31 +0000 2021",
    "id_str": "1406084953209774081",
    "full_text": "Ran a quick plot on 2016-2020 SFB data that I had handy. Interestingly, 1.01 not a \"dominant\" draft slot - instead, seems to have one of the broadest ranges of outcomes!<br><br>#SFB11 #rstats <a href=\"https://twitter.com/pahowdy/status/1406074756735057923\">https://twitter.com/pahowdy/status/1406074756735057923</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1406084953209774081-E4NqfilWEAAqjdq.png\"><img src=\"../../tweets_media/1406084953209774081-E4NqfilWEAAqjdq.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "5"
  },
  {
    "created_at": "Mon Jun 14 21:52:17 +0000 2021",
    "id_str": "1404557328620396545",
    "full_text": "<a href=\"https://twitter.com/AdamHarstad\">@AdamHarstad</a> Case B: they did poorly ➡ people overestimate the probability they break out in Y2 *given* they were poor in Y1. Also, truthers + people a bit anchored in their prospect evaluation will still pay more than EV for a \"young player who had a good college profile\"",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 14 21:49:53 +0000 2021",
    "id_str": "1404556726989426690",
    "full_text": "<a href=\"https://twitter.com/AdamHarstad\">@AdamHarstad</a> They don't even have to do all that well! (CeeDee, Claypool showed *something* and increased in value)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 14 21:49:07 +0000 2021",
    "id_str": "1404556533183270912",
    "full_text": "<a href=\"https://twitter.com/AdamHarstad\">@AdamHarstad</a> Case A: they did well in their rookie year ➡ the market is incredibly fast to react to them being a young player with a hit season and now values them near top of their career maximum value.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jun 13 20:21:46 +0000 2021",
    "id_str": "1404172164404756482",
    "full_text": "Addicted to making 🤦‍♂️",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jun 13 20:11:45 +0000 2021",
    "id_str": "1404169641379966985",
    "full_text": "Hi 🙋‍♂️I'm Tan and I am ✨addicted✨making to hex logos,,,<br><br>(also #SFB11 avi season wat up, come challenge me in the Linkin Park division!) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1404169641379966985-E3ycthWWYAMDEaV.png\"><img src=\"../../tweets_media/1404169641379966985-E3ycthWWYAMDEaV.png\"></a></li></ul></div>",
    "favorite_count": "14",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Jun 13 16:37:09 +0000 2021",
    "id_str": "1404115634749902848",
    "full_text": "Today on stream: doing more research to support the ffsimulator package, mostly figuring out how to simulate injuries!<br><br>Live in about 30 minutes: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jun 13 00:30:11 +0000 2021",
    "id_str": "1403872290828394498",
    "full_text": "Live now (finally)! 😎 <a href=\"./_TanHo/status/1403734167788175360\">https://twitter.com/_TanHo/status/1403734167788175360</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jun 12 23:25:55 +0000 2021",
    "id_str": "1403856117990580225",
    "full_text": "Okay, maybe more like 8:30 🙃🤞",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jun 12 21:26:05 +0000 2021",
    "id_str": "1403825961418768384",
    "full_text": "Linkin Park 🥳 starting a division DM :) <br><a href=\"https://twitter.com/TheCommishFF\">@TheCommishFF</a> <a href=\"https://twitter.com/ChrisAllenFFWX\">@ChrisAllenFFWX</a> <a href=\"https://twitter.com/bvelaski\">@bvelaski</a> <a href=\"https://twitter.com/ffbackroads\">@ffbackroads</a> <a href=\"https://twitter.com/The1Hudsonian\">@The1Hudsonian</a> <a href=\"https://twitter.com/ScottFish24/status/1403779156509216768\">https://twitter.com/ScottFish24/status/1403779156509216768</a> <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1403825961418768384-E3tkRMxXoAUwQTQ.mp4\"></video></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jun 12 17:35:53 +0000 2021",
    "id_str": "1403768027699724295",
    "full_text": "Pushed a small update of ffscrapr to CRAN - adding ability to grab auction amounts for <a href=\"https://twitter.com/SleeperHQ\">@SleeperHQ</a>, improved dp_cleannames() functionality (\"Atwell, Chartarius\" ➡ \"Tutu Atwell\"), and other bugfixes!<br><br>#rstats <br><br>Full changelog here: <a href=\"https://ffscrapr.dynastyprocess.com/news/index.html\">https://ffscrapr.dynastyprocess.com/news/index.html</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Jun 12 15:21:20 +0000 2021",
    "id_str": "1403734167788175360",
    "full_text": "Continuing work on the ffsimulator #rstats package tonight on stream!<br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Jun 07 12:41:43 +0000 2021",
    "id_str": "1401882059069706240",
    "full_text": "Grateful to: <a href=\"https://twitter.com/curso_r\">@curso_r</a> for making Auth0 SUPER easy, <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> for his everpresent support, and to everyone who joined me as I hammered this out live on stream🥰<br><br>I do a lot of my work on-stream and love sharing it, please feel free to tune in here: <a href=\"http://twitch.tv/tanho_\">http://twitch.tv/tanho_</a>",
    "favorite_count": "10",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Jun 07 12:41:43 +0000 2021",
    "id_str": "1401882058121748485",
    "full_text": "Things I learned in this project: <br><br>- authenticating Shiny apps (esp with social integrations)<br>- using DT's proxy and replacedata functions<br>- improving my visualization skills (including interactivity via ggiraph)",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 07 12:15:00 +0000 2021",
    "id_str": "1401875336103612416",
    "full_text": "Ecstatic to finally be releasing the DynastyProcess Rankings app! <br><br>Ever wanted to make your own FF rankings? Compare yourself against consensus? See your opinion change over time? Build your own cheatsheets? <br><br>This app's for you! <a href=\"https://apps.dynastyprocess.com/rankings\">https://apps.dynastyprocess.com/rankings</a><br><br><a href=\"https://streamable.com/w7nv5y\">https://streamable.com/w7nv5y</a>",
    "favorite_count": "37",
    "retweet_count": "12"
  },
  {
    "created_at": "Sun Jun 06 00:02:21 +0000 2021",
    "id_str": "1401328572309164034",
    "full_text": "Going live! <a href=\"./_TanHo/status/1401229629025886214\">https://twitter.com/_TanHo/status/1401229629025886214</a>",
    "favorite_count": "3",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Jun 05 17:29:11 +0000 2021",
    "id_str": "1401229629025886214",
    "full_text": "On stream tonight: continuing trade calculator updates and/or also planning out a new #rstats package for simulating fantasy football seasons!<br><br>Live at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "8",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Jun 02 00:51:58 +0000 2021",
    "id_str": "1399891504970272774",
    "full_text": "ROOTING FOR MY GUYS <a href=\"https://twitter.com/adriancm93\">@adriancm93</a> <a href=\"https://twitter.com/JosiahParry\">@JosiahParry</a> LETS GOOOOOO #SLICED <a href=\"https://twitter.com/nickwan/status/1399886104434823171\">https://twitter.com/nickwan/status/1399886104434823171</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 15:54:01 +0000 2021",
    "id_str": "1399393737323786248",
    "full_text": "<a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> Could definitely be a good thing to look at for in-season waiver/stream/filling, esp at the replacement-level for other positions",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 15:27:30 +0000 2021",
    "id_str": "1399387066899877889",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> I could theoretically map out the distribution of weekly scores for kickers 1-6 vs QB 25-30 vs WR 50-60 vs RB 40-50 etc, perhaps this weekend's stream...",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 14:30:32 +0000 2021",
    "id_str": "1399372728268898311",
    "full_text": "As always, a huge thank you to <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> for running a fantastic fantasy football contest - it's been so invaluable to have a dataset I really enjoy working with and practicing data science on.  (n/n)",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 14:30:31 +0000 2021",
    "id_str": "1399372724821270533",
    "full_text": "And lastly, I wondered if certain strategies had more volatility in terms of weekly fantasy score outputs - it doesn't really seem to be the case on first glance - mostly the same range and distribution shape across all the clusters.  (6/n) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1399372724821270533-E2uQqHbXIAYMr3_.png\"><img src=\"../../tweets_media/1399372724821270533-E2uQqHbXIAYMr3_.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 14:30:30 +0000 2021",
    "id_str": "1399372721293832198",
    "full_text": "I also took some time investigating contrarianism - does being extremely different from the median strategy really benefit? Correlation is minuscule and negative - and I found it hilarious to see <a href=\"https://twitter.com/amicsta\">@amicsta</a> and <a href=\"https://twitter.com/hjchami\">@hjchami</a> counterbalancing each other at the far end of the plot (5/n) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1399372721293832198-E2uRa90WQAcZMlt.png\"><img src=\"../../tweets_media/1399372721293832198-E2uRa90WQAcZMlt.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 14:30:29 +0000 2021",
    "id_str": "1399372717598687241",
    "full_text": "That said, those dominant strategies in the regular season DIDN'T show up proportionately in the SFB playoffs - <a href=\"https://twitter.com/jcernicka\">@jcernicka</a>, SFBX winner, actually came from the *worst* cluster in-season, cluster 6! (4/n) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1399372717598687241-E2uRKbiWUAkxflD.png\"><img src=\"../../tweets_media/1399372717598687241-E2uRKbiWUAkxflD.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 14:30:28 +0000 2021",
    "id_str": "1399372713966419970",
    "full_text": "All strategies can be successful, obvi, but in looking at the distribution of all-play wins for each (ML-generated) cluster it *does* look like the QB/WR centric gang has a lead on the RB/TE centric strategies - a larger proportion of those clusters won &gt;50% of AP games [3/n] <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1399372713966419970-E2uQ2ppWUAA0xho.png\"><img src=\"../../tweets_media/1399372713966419970-E2uQ2ppWUAA0xho.png\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 31 14:30:28 +0000 2021",
    "id_str": "1399372712573816834",
    "full_text": "You can rewatch the stream here: <a href=\"https://www.twitch.tv/videos/1040416001\">https://www.twitch.tv/videos/1040416001</a><br><br>and check out the code here: <a href=\"https://github.com/dynastyprocess/research-scottfishbowl/blob/master/R/strategy_pca.md\">https://github.com/dynastyprocess/research-scottfishbowl/blob/master/R/strategy_pca.md</a><br><br>2/n",
    "favorite_count": "9",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon May 31 14:30:27 +0000 2021",
    "id_str": "1399372709075861506",
    "full_text": "On-stream yesterday, I revisited some work in clustering #SFBX team building strategies - here are some of the highlights! #RStats <br><br>Thread with thoughts here: <br>1/n <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1399372709075861506-E2uQ1SqWYAkExwT.png\"><img src=\"../../tweets_media/1399372709075861506-E2uQ1SqWYAkExwT.png\"></a></li><li><a href=\"../../tweets_media/1399372709075861506-E2uRHF5XMAAS0vZ.png\"><img src=\"../../tweets_media/1399372709075861506-E2uRHF5XMAAS0vZ.png\"></a></li><li><a href=\"../../tweets_media/1399372709075861506-E2uRZMXXMAAe7cO.png\"><img src=\"../../tweets_media/1399372709075861506-E2uRZMXXMAAe7cO.png\"></a></li><li><a href=\"../../tweets_media/1399372709075861506-E2uQroQXEAQ9is1.png\"><img src=\"../../tweets_media/1399372709075861506-E2uQroQXEAQ9is1.png\"></a></li></ul></div>",
    "favorite_count": "40",
    "retweet_count": "9"
  },
  {
    "created_at": "Sun May 30 17:03:30 +0000 2021",
    "id_str": "1399048837147283464",
    "full_text": "Live now! <a href=\"./_TanHo/status/1399042571066920961\">https://twitter.com/_TanHo/status/1399042571066920961</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 30 16:38:36 +0000 2021",
    "id_str": "1399042571066920961",
    "full_text": "On today's stream: researching #SFB11 strategy and outcome with clustering models on the 2020 contest!<br><br>Live in about twenty minutes: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat May 29 23:10:31 +0000 2021",
    "id_str": "1398778814067625984",
    "full_text": "Tonight’s stream will be a bit later (8:30ish), and I’ll be working on cleaning and publishing more data as well as continuing work on updates to the DynastyProcess trade calculator! <br><br>Live at about 8:30 EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 28 17:29:14 +0000 2021",
    "id_str": "1398330538008719362",
    "full_text": "<a href=\"https://twitter.com/kierisi\">@kierisi</a> I also started to keep track of R Twitch streamers I know of here: <a href=\"https://twitter.com/i/lists/1395424285129314304?s=20\">https://twitter.com/i/lists/1395424285129314304?s=20</a>",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 28 01:30:35 +0000 2021",
    "id_str": "1398089286499586049",
    "full_text": "FREE FF DATA: <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> public league data repo that includes thousands of leagues and several years of league/draft/transactions/starters/standings for <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a>'s SFB and <a href=\"https://twitter.com/SafeLeagues\">@SafeLeagues</a> leagues! <br><br>Distributed in parquet format here:<br><a href=\"https://github.com/dynastyprocess/data-mfl_public\">https://github.com/dynastyprocess/data-mfl_public</a>",
    "favorite_count": "25",
    "retweet_count": "11"
  },
  {
    "created_at": "Thu May 27 23:20:17 +0000 2021",
    "id_str": "1398056493207937026",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> <a href=\"https://twitter.com/kevinobrienFF\">@kevinobrienFF</a> <a href=\"https://twitter.com/tacitassassin13\">@tacitassassin13</a> I've also got plans for a bit of a repository of public MFL league data that should include trades and such from a historical perspective, more on that v soon",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 26 12:45:20 +0000 2021",
    "id_str": "1397534314657722369",
    "full_text": "me: ooh what's {epoxy📦}?<br>*visits github page*<br>*sees that I've already starred this*<br>me: DAMMIT I SHOULD HAVE ALREADY KNOWN ABOUT THIS? WAT🤯 <a href=\"https://twitter.com/dataandme/status/1397533302081327108\">https://twitter.com/dataandme/status/1397533302081327108</a>",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue May 25 02:23:07 +0000 2021",
    "id_str": "1397015341797199872",
    "full_text": "<a href=\"https://twitter.com/GrahamBarfield\">@GrahamBarfield</a> <a href=\"https://www.ceros.com/inspire/originals/recaptcha-waymo-future-of-self-driving-cars/\">https://www.ceros.com/inspire/originals/recaptcha-waymo-future-of-self-driving-cars/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 23 22:32:22 +0000 2021",
    "id_str": "1396594883176116224",
    "full_text": "Stream replay here: <a href=\"https://www.twitch.tv/videos/1032720628\">https://www.twitch.tv/videos/1032720628</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 23 22:28:18 +0000 2021",
    "id_str": "1396593862156632072",
    "full_text": "On stream today, I dove as far as I cared to into #SFB11's new kicker stuff. tl/dr: VORP thinks best kicker is around RB 40/WR50 ish? <br>Also, year over year stability of kicker fantasy points is poop. In short, kickers are still poop.<br><br>repo: <a href=\"https://github.com/dynastyprocess/research-scottfishbowl/blob/master/R/kicker_vorp.md\">https://github.com/dynastyprocess/research-scottfishbowl/blob/master/R/kicker_vorp.md</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1396593862156632072-E2GylKSXoAEP_T6.png\"><img src=\"../../tweets_media/1396593862156632072-E2GylKSXoAEP_T6.png\"></a></li><li><a href=\"../../tweets_media/1396593862156632072-E2GxViPXIAMXoN2.png\"><img src=\"../../tweets_media/1396593862156632072-E2GxViPXIAMXoN2.png\"></a></li><li><a href=\"../../tweets_media/1396593862156632072-E2GxmlBWEAAPfrC.png\"><img src=\"../../tweets_media/1396593862156632072-E2GxmlBWEAAPfrC.png\"></a></li><li><a href=\"../../tweets_media/1396593862156632072-E2Gxn7tXMAAZwjl.png\"><img src=\"../../tweets_media/1396593862156632072-E2Gxn7tXMAAZwjl.png\"></a></li></ul></div>",
    "favorite_count": "51",
    "retweet_count": "13"
  },
  {
    "created_at": "Sun May 23 17:00:23 +0000 2021",
    "id_str": "1396511338193735681",
    "full_text": "Live now! <a href=\"./_TanHo/status/1396500084158783491\">https://twitter.com/_TanHo/status/1396500084158783491</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 23 16:15:40 +0000 2021",
    "id_str": "1396500084158783491",
    "full_text": "On today's stream, I'll be looking at 🤢fantasy kicker scoring...because of #SFB11. Sigh.<br><br>Live at 1pm EDT (45 minutes from now!) <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun May 23 16:10:56 +0000 2021",
    "id_str": "1396498893643321344",
    "full_text": "<a href=\"https://twitter.com/kc_analytics\">@kc_analytics</a> or, yeah, <a href=\"http://semver.org\">http://semver.org</a> as Jesse suggests! (same thing)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 23 03:38:15 +0000 2021",
    "id_str": "1396309473157861384",
    "full_text": "Is this…<a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> ? <a href=\"https://twitter.com/HankTikTok/status/1395854286593171461\">https://twitter.com/HankTikTok/status/1395854286593171461</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 22 23:48:59 +0000 2021",
    "id_str": "1396251778455310340",
    "full_text": "Tonight on stream: working on the <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> trade calculator app - upgrading to the latest shinyMobile package, code cleanup, UI tweaks, and more!<br><br>Live in ~ 10 minutes: <br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri May 21 02:35:54 +0000 2021",
    "id_str": "1395569007135272964",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> <a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> Also consider joining the nflfastR discord! <a href=\"https://discord.gg/UCKxQyuPw5\">https://discord.gg/UCKxQyuPw5</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 21 02:33:27 +0000 2021",
    "id_str": "1395568389482024960",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> <a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1395568389482024960-E14ODBxWYAAEIHk.png\"><img src=\"../../tweets_media/1395568389482024960-E14ODBxWYAAEIHk.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 21 02:28:38 +0000 2021",
    "id_str": "1395567180767453186",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> <a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> Recommend dropping player_name from your aggregate and then just using full_name from your roster join",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 19 14:50:57 +0000 2021",
    "id_str": "1395029212092841985",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> The happy medium ends up being something like Shiny wrappers to take SQL tables to Excel sheets as easy wins + building out apps to solve more complex problems that can't be solved with Excel or available BI tools (i.e. joining many sources together + modelling etc)",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue May 18 14:15:39 +0000 2021",
    "id_str": "1394657943791022087",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> (use load_player_stats, not calculate_player_stats - the former is a speedy download, the other rebuilds it from pbp)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 16 17:00:45 +0000 2021",
    "id_str": "1393974713903366144",
    "full_text": "Live now! <a href=\"./_TanHo/status/1393962387628302342\">https://twitter.com/_TanHo/status/1393962387628302342</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 16 16:11:46 +0000 2021",
    "id_str": "1393962387628302342",
    "full_text": "Today on-stream: kicking off a new weekly stream dedicated to FF research (aka Data Science ™), starting with #SFB11 (and SFB 2016-2020) data! <br><br>Live starting at about ~1pm: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun May 16 00:02:20 +0000 2021",
    "id_str": "1393718422639366145",
    "full_text": "Live now! <a href=\"./_TanHo/status/1393710927472627712\">https://twitter.com/_TanHo/status/1393710927472627712</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 15 23:32:33 +0000 2021",
    "id_str": "1393710927472627712",
    "full_text": "Tonight on-stream: trade calculator Shiny maintenance, polishing the Rankings app for production release, and wrangling some data so that I can start a dedicated FF research (Data Science ™) stream series tomorrow! <br><br>Live in about 30 minutes: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "8",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu May 13 12:05:00 +0000 2021",
    "id_str": "1392813123027947524",
    "full_text": "DP update: I've been spending a good chunk of time rebuilding my data pipeline (now leverages GitHub Actions) and in the process have also rebuilt the rookie pick models! Updated both on the data repo and the calc: <a href=\"https://apps.dynastyprocess.com/calculator/\">https://apps.dynastyprocess.com/calculator/</a><br><br>Enjoy!",
    "favorite_count": "9",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed May 12 23:28:03 +0000 2021",
    "id_str": "1392622631904583688",
    "full_text": "Man, is this where targets go on vacation? <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> #VacationTargets <a href=\"https://twitter.com/tacitassassin13/status/1392620188500205568\">https://twitter.com/tacitassassin13/status/1392620188500205568</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1392622631904583688-E1OW5k6X0AkGh2u.jpg\"><img src=\"../../tweets_media/1392622631904583688-E1OW5k6X0AkGh2u.jpg\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "4"
  },
  {
    "created_at": "Wed May 12 16:42:25 +0000 2021",
    "id_str": "1392520548970795009",
    "full_text": "Figured this might be a nice time to challenge myself to a quick plot, the answer is most definitely still yes lmao <a href=\"https://twitter.com/CoopsFB/status/1392499071282290690\">https://twitter.com/CoopsFB/status/1392499071282290690</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1392520548970795009-E1M5xutXEAUXWDM.png\"><img src=\"../../tweets_media/1392520548970795009-E1M5xutXEAUXWDM.png\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue May 11 19:50:14 +0000 2021",
    "id_str": "1392205429158072326",
    "full_text": "<a href=\"https://twitter.com/kevinobrienFF\">@kevinobrienFF</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> <a href=\"https://twitter.com/amazehayes_\">@amazehayes_</a> <a href=\"https://github.com/dynastyprocess/data/blob/master/files/db_playerids.csv\">https://github.com/dynastyprocess/data/blob/master/files/db_playerids.csv</a><br><br>should be back with a good chunk of PFR IDs",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Dec 19 00:28:19 +0000 2022",
    "id_str": "1604634699804155904",
    "full_text": "Okay, after seeing that Pats/Raiders ending I am confident I have seen everything",
    "favorite_count": "7",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun May 09 16:58:17 +0000 2021",
    "id_str": "1391437377097412610",
    "full_text": "Live for the second session this weekend - this time working on the trade values data pipeline that powers the DP Trade Calculator! <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1391062337445146626\">https://twitter.com/_TanHo/status/1391062337445146626</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun May 09 00:02:28 +0000 2021",
    "id_str": "1391181740761395202",
    "full_text": "Live now! <br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1391062337445146626\">https://twitter.com/_TanHo/status/1391062337445146626</a>",
    "favorite_count": "4",
    "retweet_count": "4"
  },
  {
    "created_at": "Sat May 08 16:08:00 +0000 2021",
    "id_str": "1391062337445146626",
    "full_text": "Tonight on-stream: more data pipeline work, possibly also some Shiny Contest app dev! <br><br>Live at about 8pm ET: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri May 07 22:03:39 +0000 2021",
    "id_str": "1390789450570010625",
    "full_text": "TE Premium trade values, woop woop! <a href=\"https://twitter.com/DLFootball/status/1390699268692971520\">https://twitter.com/DLFootball/status/1390699268692971520</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 05 14:35:43 +0000 2021",
    "id_str": "1389951948556750855",
    "full_text": "Fantasy football name joiners - anyone got a list kicking around of annoying names to map (historical or otherwise)? Thinking of adding a function for it to ffscrapr - Rob vs Robert Kelley, Mitch vs Mitchell Trubisky etc. <br><br>cc <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/LeeSharpeNFL\">@LeeSharpeNFL</a> <a href=\"https://twitter.com/ff_spaceman\">@ff_spaceman</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 02 17:00:00 +0000 2021",
    "id_str": "1388901094730915847",
    "full_text": "Going live! Working on data pipelines and trade calculator app maintenance.<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 02 14:44:03 +0000 2021",
    "id_str": "1388866881893904386",
    "full_text": "and (mostly for myself, for future navigation) - the aforementioned priors: <a href=\"./_TanHo/status/1386124632693039105?s=20\">https://twitter.com/_TanHo/status/1386124632693039105?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 02 14:42:58 +0000 2021",
    "id_str": "1388866609910063108",
    "full_text": "Spent some time on stream last night thinking through my initial reactions on post-draft rookie ranks (primarily aiming to measure the draft's effect's on my priors).<br><br>You can re-watch the stream here: <a href=\"https://www.twitch.tv/videos/1007959601\">https://www.twitch.tv/videos/1007959601</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1388866609910063108-E0Y9KdrWUAA70d3.png\"><img src=\"../../tweets_media/1388866609910063108-E0Y9KdrWUAA70d3.png\"></a></li><li><a href=\"../../tweets_media/1388866609910063108-E0Y-fwdWUAMTIgN.png\"><img src=\"../../tweets_media/1388866609910063108-E0Y-fwdWUAMTIgN.png\"></a></li></ul></div>",
    "favorite_count": "8",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat May 01 23:52:37 +0000 2021",
    "id_str": "1388642547493388290",
    "full_text": "Going live shortly! <a href=\"./_TanHo/status/1388489382256996357\">https://twitter.com/_TanHo/status/1388489382256996357</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 01 23:50:23 +0000 2021",
    "id_str": "1388641983246356482",
    "full_text": "<a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> and (checks display picture) I'm a Steelers fan!",
    "favorite_count": "17",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 01 19:39:03 +0000 2021",
    "id_str": "1388578734224052224",
    "full_text": "More importantly, we raised $165 for <a href=\"https://twitter.com/BlackGirlsCode\">@BlackGirlsCode</a> - an awesome charity supporting women of colour in STEM! Thanks again for participating, everyone!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 01 19:36:29 +0000 2021",
    "id_str": "1388578088141864965",
    "full_text": "The Draft Contest is in the books - congrats to <a href=\"https://twitter.com/JerrickBackous\">@JerrickBackous</a> and <a href=\"https://twitter.com/TAlbTree\">@TAlbTree</a>, who both managed to match EIGHT players to their correct teams! <br><br>Huge thanks to sponsors <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> and <a href=\"https://twitter.com/4for4football\">@4for4football</a> for donating prizes! Results here: <a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1388578088141864965-E0U4YBtX0Ak9ePJ.png\"><img src=\"../../tweets_media/1388578088141864965-E0U4YBtX0Ak9ePJ.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 01 13:44:00 +0000 2021",
    "id_str": "1388489382256996357",
    "full_text": "Tonight on-stream: instant-reaction post-draft rookie ranks, venting about the Steelers idiocy, and possibly doing some trade calculator maintenance! <br><br>(Less coding, more fantasy football!)<br><br>Live starting at about 8pm: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 30 13:40:05 +0000 2021",
    "id_str": "1388126010735042560",
    "full_text": "Tight race early on in the DP Draft Contest, with <a href=\"https://twitter.com/JerrickBackous\">@JerrickBackous</a> holding a narrow lead! (full table at <a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1388126010735042560-E0OdM-4XIAU7caM.png\"><img src=\"../../tweets_media/1388126010735042560-E0OdM-4XIAU7caM.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 30 03:22:40 +0000 2021",
    "id_str": "1387970632680361985",
    "full_text": "<a href=\"https://twitter.com/reinhurdler\">@reinhurdler</a> because i am miserable rn",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 30 00:28:29 +0000 2021",
    "id_str": "1387926795815723008",
    "full_text": "A) accuracy as a downcheck for first overall QB? Hrmmmmmmm<br>B) Where's my fking player comp?<br>C) LOOK ISSA HEX STICKER! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1387926795815723008-E0Ln238XMAUCeEL.png\"><img src=\"../../tweets_media/1387926795815723008-E0Ln238XMAUCeEL.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 29 13:55:13 +0000 2021",
    "id_str": "1387767429477146625",
    "full_text": "Incredibly grateful to have raised $165 for <a href=\"https://twitter.com/BlackGirlsCode\">@BlackGirlsCode</a> via the Draft Contest! <br><br>Thank you to everyone who joined in, and also to awesome sponsors <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> and <a href=\"https://twitter.com/4for4football\">@4for4football</a>.<br><br>You can see how the contestants think the draft breaks down here: <a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1387767429477146625-E0JUGJRWYAoAzBz.png\"><img src=\"../../tweets_media/1387767429477146625-E0JUGJRWYAoAzBz.png\"></a></li><li><a href=\"../../tweets_media/1387767429477146625-E0JXG4qXoAQlPjp.png\"><img src=\"../../tweets_media/1387767429477146625-E0JXG4qXoAQlPjp.png\"></a></li></ul></div>",
    "favorite_count": "14",
    "retweet_count": "6"
  },
  {
    "created_at": "Thu Apr 29 02:23:59 +0000 2021",
    "id_str": "1387593477165391873",
    "full_text": "Also, are you using cfbfastr?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Apr 28 12:13:11 +0000 2021",
    "id_str": "1387379365613346817",
    "full_text": "LAST DAY TO ENTER - SUBMISSIONS CLOSE MIDNIGHT ET TONIGHT! <a href=\"./_TanHo/status/1386679197326888966\">https://twitter.com/_TanHo/status/1386679197326888966</a>",
    "favorite_count": "6",
    "retweet_count": "4"
  },
  {
    "created_at": "Mon Apr 26 13:50:58 +0000 2021",
    "id_str": "1386679197326888966",
    "full_text": "THIS IS IT - DRAFT WEEK! Are you signed up for my NFL Draft Predictions contest? $5 charity entry and awesome prizes courtesy of <a href=\"https://twitter.com/DLFootball\">@DLFootball</a><br> and <a href=\"https://twitter.com/4for4football\">@4for4football</a> <br><br><a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "15",
    "retweet_count": "17"
  },
  {
    "created_at": "Sun Apr 25 17:01:38 +0000 2021",
    "id_str": "1386364792110211072",
    "full_text": "Live again! Working on dataviz for my Rankings app :)<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 25 04:00:03 +0000 2021",
    "id_str": "1386168098177302528",
    "full_text": "<a href=\"./_TanHo/status/1122145217048719363\">https://twitter.com/_tanho/status/1122145217048719363</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 25 03:22:09 +0000 2021",
    "id_str": "1386158562615824385",
    "full_text": "<a href=\"https://twitter.com/ff_spaceman\">@ff_spaceman</a> And the size + poor usage patterns makes me think NFL teams will be low on him",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 25 03:16:36 +0000 2021",
    "id_str": "1386157164344053762",
    "full_text": "<a href=\"https://twitter.com/ff_spaceman\">@ff_spaceman</a> In all seriousness, I’m concerned about the “freshman one hit wonder and disappear” pattern and haven’t looked into it more, but I want to",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 25 01:07:51 +0000 2021",
    "id_str": "1386124766042525698",
    "full_text": "Past years exercises: <br><a href=\"./_TanHo/status/1270727358237024257?s=20\">https://twitter.com/_TanHo/status/1270727358237024257?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 25 01:07:20 +0000 2021",
    "id_str": "1386124632693039105",
    "full_text": "An annual exercise I like to do is quantify my pre-draft rookie thoughts (this time doing it live-on-stream!) Here's where I'm at as of today! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1386124632693039105-Ezx_ljpWUAEOpto.png\"><img src=\"../../tweets_media/1386124632693039105-Ezx_ljpWUAEOpto.png\"></a></li><li><a href=\"../../tweets_media/1386124632693039105-EzyA-_0XIAEEUVc.png\"><img src=\"../../tweets_media/1386124632693039105-EzyA-_0XIAEEUVc.png\"></a></li></ul></div>",
    "favorite_count": "16",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Apr 25 00:00:26 +0000 2021",
    "id_str": "1386107800057794561",
    "full_text": "Live now! <a href=\"./_TanHo/status/1385939166828040192\">https://twitter.com/_TanHo/status/1385939166828040192</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Apr 24 12:50:21 +0000 2021",
    "id_str": "1385939166828040192",
    "full_text": "Starting with a rare non-coding sesh tonight on stream: documenting my pre-draft dynasty rookie thoughts (as per my annual ritual, for my own benefit) and afterwards wrapping up some data-viz code for the Rankings app! <br><br>Live starting at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Thu Apr 22 15:31:55 +0000 2021",
    "id_str": "1385255051309035523",
    "full_text": "Stumbling on people using ffscrapr in the wild still makes my day 😍<br><br><a href=\"https://www.reddit.com/r/DynastyFF/comments/mw4aal/league_history_and_collecting_data_with_ffscrapr/\">https://www.reddit.com/r/DynastyFF/comments/mw4aal/league_history_and_collecting_data_with_ffscrapr/</a>",
    "favorite_count": "7",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Apr 22 14:10:06 +0000 2021",
    "id_str": "1385234462103977992",
    "full_text": "ONE WEEK UNTIL THE NFL DRAFT! Are you signed up for my NFL Draft Predictions contest? $5 charity entry and awesome prizes courtesy of <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> and <a href=\"https://twitter.com/4for4football\">@4for4football</a><br><br><a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "1",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Apr 21 16:34:52 +0000 2021",
    "id_str": "1384908505434542083",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> In all seriousness, happy to help w/ build if you actually go this route - I also like <a href=\"https://www.logicalincrements.com/\">https://www.logicalincrements.com/</a> as a budget to specs guide",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Apr 19 19:00:56 +0000 2021",
    "id_str": "1384220485865467916",
    "full_text": "Oh damn I guess I gotta figure out kicker modelling too...<br><br><a href=\"https://twitter.com/KentWeyrauch/status/1384219653522657290?s=20\">https://twitter.com/KentWeyrauch/status/1384219653522657290?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Apr 19 18:55:26 +0000 2021",
    "id_str": "1384219101761966082",
    "full_text": "#SFB11 woop woop!<br><br>Hmm, maybe I should revisit my SFB PCA modelling on stream soon... <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1384219101761966082-EzW77v8VoAM1O5Q.jpg\"><img src=\"../../tweets_media/1384219101761966082-EzW77v8VoAM1O5Q.jpg\"></a></li></ul></div>",
    "favorite_count": "37",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Apr 18 17:02:33 +0000 2021",
    "id_str": "1383828308060622854",
    "full_text": "Live again! Tackling some early feedback from the Rankings App beta release:<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Apr 17 23:59:50 +0000 2021",
    "id_str": "1383570931973443590",
    "full_text": "Live now! <a href=\"./_TanHo/status/1383422449321082884\">https://twitter.com/_TanHo/status/1383422449321082884</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Apr 17 14:09:49 +0000 2021",
    "id_str": "1383422449321082884",
    "full_text": "Tonight on stream: patching some ffscrapr bugs to keep it on CRAN, and other assorted project maintenance issues🤓#rstats <br><br>Live starting at ~8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "3",
    "retweet_count": "4"
  },
  {
    "created_at": "Thu Apr 15 14:10:00 +0000 2021",
    "id_str": "1382697719672754177",
    "full_text": "Two weeks til the NFL Draft! Are you signed up for my NFL Draft Predictions contest? $5 charity entry and awesome prizes courtesy of <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> and <a href=\"https://twitter.com/4for4football\">@4for4football</a> 🎉<br><br><a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "3",
    "retweet_count": "5"
  },
  {
    "created_at": "Wed Apr 14 01:13:39 +0000 2021",
    "id_str": "1382139959365238789",
    "full_text": "<a href=\"https://twitter.com/JosiahParry\">@JosiahParry</a> ...but at least you can now refer to them with a starts_with?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Apr 14 00:09:58 +0000 2021",
    "id_str": "1382123929666514946",
    "full_text": "<a href=\"https://twitter.com/spcanelon\">@spcanelon</a> Okay, I fixed the X lmao (on github) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1382123929666514946-Ey5KXV8XAAEU_cA.png\"><img src=\"../../tweets_media/1382123929666514946-Ey5KXV8XAAEU_cA.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Apr 13 21:18:58 +0000 2021",
    "id_str": "1382080896568803330",
    "full_text": "<a href=\"https://twitter.com/spcanelon/status/1382063172530671617?s=20\">https://twitter.com/spcanelon/status/1382063172530671617?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Apr 13 21:11:29 +0000 2021",
    "id_str": "1382079013724827648",
    "full_text": "I was nerdsniped by <a href=\"https://twitter.com/spcanelon\">@spcanelon</a> and <a href=\"https://twitter.com/travisgerke\">@travisgerke</a>  into making a xaringanclub hex logo...<br><br>github link here: <a href=\"https://github.com/dynastyprocess/graphics/tree/main/xaringanclub\">https://github.com/dynastyprocess/graphics/tree/main/xaringanclub</a><br><br>#rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1382079013724827648-Ey4hY4kXIAAL8kj.png\"><img src=\"../../tweets_media/1382079013724827648-Ey4hY4kXIAAL8kj.png\"></a></li></ul></div>",
    "favorite_count": "29",
    "retweet_count": "7"
  },
  {
    "created_at": "Tue Apr 13 13:27:30 +0000 2021",
    "id_str": "1381962247266832385",
    "full_text": "Now on CRAN: ffscrapr 1.4.0! This release adds some functions to help interface with <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> data, and uses it to help reconstruct scoring history for your league. <br><br>Check out all the new features here: <a href=\"https://ffscrapr.dynastyprocess.com/news/index.html\">https://ffscrapr.dynastyprocess.com/news/index.html</a> #RStats",
    "favorite_count": "20",
    "retweet_count": "7"
  },
  {
    "created_at": "Sun Apr 11 17:10:10 +0000 2021",
    "id_str": "1381293510217904137",
    "full_text": "Live now! <a href=\"./_TanHo/status/1381073199916589056\">https://twitter.com/_TanHo/status/1381073199916589056</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 11 02:38:01 +0000 2021",
    "id_str": "1381074024982274055",
    "full_text": "The prototype app is live here: <a href=\"https://apps.dynastyprocess.com/rankings\">https://apps.dynastyprocess.com/rankings</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 11 02:34:44 +0000 2021",
    "id_str": "1381073199916589056",
    "full_text": "Getting ever so close on this rankings app! Here's a quick demo of where it's at as of today - putting some more finishing touches on it tomorrow, catch me live at 1pm :) <br><br><a href=\"https://streamable.com/h6f6jn\">https://streamable.com/h6f6jn</a>",
    "favorite_count": "9",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Apr 10 23:59:23 +0000 2021",
    "id_str": "1381034106398646273",
    "full_text": "Going live! <a href=\"./_TanHo/status/1380872945497673739\">https://twitter.com/_TanHo/status/1380872945497673739</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Apr 10 13:19:00 +0000 2021",
    "id_str": "1380872945497673739",
    "full_text": "Tonight on stream: putting the finishing touches on the Rankings app and deploying to server! #rstats #rshiny<br><br>I'll be live starting at ~8pm (and again tomorrow at 1pm) <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Apr 09 18:28:37 +0000 2021",
    "id_str": "1380588474819043334",
    "full_text": "I'm running a charity draft contest - $5 entry, one year of <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> at stake! <br><br>All you need to do is pick the QBs, RBs, WRs, and TEs who get selected in the top 64 and the team they end up going to:<br><br><a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "4",
    "retweet_count": "7"
  },
  {
    "created_at": "Wed Nov 30 20:25:04 +0000 2022",
    "id_str": "1598050499370323968",
    "full_text": "<a href=\"https://twitter.com/Emil_Hvitfeldt\">@Emil_Hvitfeldt</a> We archived it earlier in the year and that removes it from everyone's joined channels",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Nov 30 14:15:22 +0000 2022",
    "id_str": "1597957462098780160",
    "full_text": "You can follow along with the leaderboard here that sorts by total stars and average time to complete 🤩 <a href=\"https://rstats-aoc.netlify.app/\">https://rstats-aoc.netlify.app/</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Nov 30 14:15:21 +0000 2022",
    "id_str": "1597957460090040324",
    "full_text": "Hey friends, #AdventOfCode starts TONIGHT! I've organized a friendly leaderboard every year for the #rstats (and friends) community, and you can join 2022's with this code: <br><br>1032765-5d428d59<br><br><a href=\"https://twitter.com/Emil_Hvitfeldt\">@Emil_Hvitfeldt</a> did a great talk on why AOC is so awesome: <a href=\"https://www.youtube.com/watch?v=HnHAIdqULd0\">https://www.youtube.com/watch?v=HnHAIdqULd0</a>",
    "favorite_count": "30",
    "retweet_count": "8"
  },
  {
    "created_at": "Sun Apr 04 17:03:25 +0000 2021",
    "id_str": "1378755096201285636",
    "full_text": "Live again! Messing with UI and doing some debugging. <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1378525701998018560\">https://twitter.com/_TanHo/status/1378525701998018560</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 04 01:51:53 +0000 2021",
    "id_str": "1378525701998018560",
    "full_text": "Played with different ways of saving data to server today on stream and settled (ish) on using arrow's partitioned parquets for now! I'll be back tomorrow at 1pm EDT, continuing to work on the rankings app!<br><br><a href=\"https://www.twitch.tv/videos/974529213\">https://www.twitch.tv/videos/974529213</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 04 00:02:40 +0000 2021",
    "id_str": "1378498217420189712",
    "full_text": "Now live! <a href=\"./_TanHo/status/1378318034008440832\">https://twitter.com/_TanHo/status/1378318034008440832</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Apr 03 12:06:41 +0000 2021",
    "id_str": "1378318034008440832",
    "full_text": "Tonight on stream, I’ll be continuing on the Rankings app - exploring different ways of saving ranks to a database! <br>#rstats #rshiny <br><br>Live starting at about 8pm EDT: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "11",
    "retweet_count": "3"
  },
  {
    "created_at": "Thu Apr 01 19:24:34 +0000 2021",
    "id_str": "1377703452206366727",
    "full_text": "I think this is pretty darn useful advice for both fantasy football tools as well as just R packages in general! <a href=\"https://twitter.com/rsms/status/1377701572725989380\">https://twitter.com/rsms/status/1377701572725989380</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 01 12:06:49 +0000 2021",
    "id_str": "1377593289835220993",
    "full_text": "Schedule is now Saturdays at 8pm EDT and Sunday 1pm EDT, and obligatory: not an April Fools joke.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 01 12:05:00 +0000 2021",
    "id_str": "1377592832425254920",
    "full_text": "I've honestly had a fantastic time streaming #rstats &amp; #rshiny on Twitch - it's been a highlight of every week - so I'm tentatively adding a second stream on Sundays at 1pm EDT! (until NFL starts back up, of course)<br><br>Catch it here: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "12",
    "retweet_count": "3"
  },
  {
    "created_at": "Thu Apr 01 03:13:52 +0000 2021",
    "id_str": "1377459168563621888",
    "full_text": "_whimpers_ <a href=\"https://twitter.com/ColinDMello/status/1377428045343035396\">https://twitter.com/ColinDMello/status/1377428045343035396</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 29 15:57:07 +0000 2021",
    "id_str": "1376564081918935046",
    "full_text": "I'm also going to stan this company so they earn more market share than evil competitor",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 29 15:56:41 +0000 2021",
    "id_str": "1376563973080948746",
    "full_text": "Knowing SQL is super useful as an adjunct to R/Python in DS- and this looks like a fantastic way to add to your knowledge! #rstats <a href=\"https://twitter.com/dataquestio/status/1376557428519632904\">https://twitter.com/dataquestio/status/1376557428519632904</a>",
    "favorite_count": "4",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Mar 28 02:34:45 +0000 2021",
    "id_str": "1375999774676168705",
    "full_text": "Had some technical difficulties at the start of the stream, but got Auth0 working on the Shiny app! Also, fussed with how to best lay out the UI. Next stream, I'll be working on storing the data to server!<br><br>You can check out the stream video here: <a href=\"https://www.twitch.tv/videos/965812950\">https://www.twitch.tv/videos/965812950</a> <a href=\"./_TanHo/status/1375799515517714434\">https://twitter.com/_TanHo/status/1375799515517714434</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Mar 27 23:57:36 +0000 2021",
    "id_str": "1375960224289464325",
    "full_text": "Going live in a few minutes! <a href=\"./_TanHo/status/1375799515517714434\">https://twitter.com/_TanHo/status/1375799515517714434</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Mar 27 15:34:09 +0000 2021",
    "id_str": "1375833528634638338",
    "full_text": "<a href=\"https://twitter.com/benj_robinson\">@benj_robinson</a> <a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> <a href=\"https://twitter.com/JosiahParry\">@JosiahParry</a> Could also reduce font size a bit, go for fixed/minimum column widths, and add stripes?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 27 13:47:52 +0000 2021",
    "id_str": "1375806780169728005",
    "full_text": "<a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> ArtMimic? PaintMimic?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 27 13:19:00 +0000 2021",
    "id_str": "1375799515517714434",
    "full_text": "Continuing to work tonight on-stream on the Rankings Shiny app - teaching myself how to use the Auth0 package to add authentication! #rstats #rshiny<br><br>Live at about 8pm EDT: <a href=\"http://twitch.tv/tanho_\">http://twitch.tv/tanho_</a>",
    "favorite_count": "5",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Mar 24 20:30:17 +0000 2021",
    "id_str": "1374820890773499913",
    "full_text": "<a href=\"https://twitter.com/ff_spaceman\">@ff_spaceman</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> And R minimum is something like 1 core + 4GB ram, you probably have that already!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 22 16:29:51 +0000 2021",
    "id_str": "1374035604183379970",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> <a href=\"https://twitter.com/electronicks_ff\">@electronicks_ff</a> All in all we're whining about minor differences in true speed and 40s aren't that significant to begin with!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 22 16:22:05 +0000 2021",
    "id_str": "1374033649708978178",
    "full_text": "<a href=\"https://twitter.com/electronicks_ff\">@electronicks_ff</a> <a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> 0.07s is probably a good guess of the breadth of this range, actually",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 22 13:51:14 +0000 2021",
    "id_str": "1373995688737013761",
    "full_text": "THE definitive guide to xaringan presentations, folks - holy crap this is awesome! #rstats <a href=\"https://twitter.com/icymi_r/status/1373992975727001609\">https://twitter.com/icymi_r/status/1373992975727001609</a>",
    "favorite_count": "1",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Mar 21 17:39:04 +0000 2021",
    "id_str": "1373690636935761925",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> I do make a point to keep my fav of favs in the nearest cube tho! (which is why the other book-specific ones are overstuffed)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 21 03:15:05 +0000 2021",
    "id_str": "1373473210575032321",
    "full_text": "Next week: teaching myself (live/on-stream) how to use Auth0 to authenticate the app!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 21 02:39:33 +0000 2021",
    "id_str": "1373464264963411968",
    "full_text": "DT’s RowReorder is tough to use, but I got it working! (And my catchphrase lives on for another day: “all things are possible in Shiny...with the appropriate amount of head bashing!”)<br><br>You can check out the recording here: <a href=\"https://www.twitch.tv/videos/957140179\">https://www.twitch.tv/videos/957140179</a> <a href=\"./_TanHo/status/1373260283842543624\">https://twitter.com/_TanHo/status/1373260283842543624</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 20 23:59:39 +0000 2021",
    "id_str": "1373424028279574537",
    "full_text": "Live now! <a href=\"./_TanHo/status/1373260283842543624\">https://twitter.com/_TanHo/status/1373260283842543624</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Mar 20 13:09:00 +0000 2021",
    "id_str": "1373260283842543624",
    "full_text": "Tonight's Twitch stream will continue work on the Rankings Shiny app, digging into the guts of DT's RowReorder, conditional formatting, and reactive dataframes! #rstats #rshiny<br><br>I'll be live starting at about 8pm EST: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "18",
    "retweet_count": "5"
  },
  {
    "created_at": "Fri Mar 19 14:38:06 +0000 2021",
    "id_str": "1372920319560781824",
    "full_text": "<a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> continuing the feedbackfirehose: how many plays are we talking about here in each sample?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 19 14:36:59 +0000 2021",
    "id_str": "1372920040622727178",
    "full_text": "<a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> Also, are you using any kind of threshold to compare \"star offensive player\" like Lockett vs \"KR/PR specialist\" like Andre Roberts?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 19 12:11:37 +0000 2021",
    "id_str": "1372883455000858624",
    "full_text": "\"When you find a *positive* obsession, an obsession that seems like it can take you somewhere good, you need to keep feeding it\" <a href=\"https://twitter.com/austinkleon/status/1372219501840859143\">https://twitter.com/austinkleon/status/1372219501840859143</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 17 04:58:41 +0000 2021",
    "id_str": "1372049729043972097",
    "full_text": "<a href=\"https://twitter.com/daattali\">@daattali</a> Tradeoff is more duplication of runtime (if default is expensive the ifelse structure is better since it only runs once)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 16 17:54:01 +0000 2021",
    "id_str": "1371882458786988033",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> ...which CAN correspond with your argument that it does not have a significant relationship with breakouts",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 14 04:36:11 +0000 2021",
    "id_str": "1370956905150083079",
    "full_text": "Kicked off a new Shiny app for user rankings on stream tonight by checking out some past work, doing some project planning, and doing a bit of import/cleaning code! <br><br>Check it out here:<br><a href=\"https://www.twitch.tv/videos/948553796\">https://www.twitch.tv/videos/948553796</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 14 01:04:33 +0000 2021",
    "id_str": "1370903643004747788",
    "full_text": "Live now! <a href=\"./_TanHo/status/1370740178629783553\">https://twitter.com/_TanHo/status/1370740178629783553</a>",
    "favorite_count": "5",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Mar 13 20:50:31 +0000 2021",
    "id_str": "1370839714970927104",
    "full_text": "<a href=\"https://twitter.com/RussellJClay\">@RussellJClay</a> Goals being to test out your overall management/budgeting/planning etc and to turn the usual \"win this year\" on its head by forcing you to play for Y4",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 13 20:49:09 +0000 2021",
    "id_str": "1370839370194944003",
    "full_text": "<a href=\"https://twitter.com/RussellJClay\">@RussellJClay</a> Didn't find 32 players for it (wasn't notable enough at the time) but I'd still be intrigued in running a league like this one day...",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 13 14:15:00 +0000 2021",
    "id_str": "1370740178629783553",
    "full_text": "On tonight's Twitch stream, I'll be kicking off a new Shiny app for user-rankings from scratch, starting with some wireframing, project planning, and perhaps some code!<br><br>I'll be live starting at 8pm EST: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "19",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Mar 12 13:06:15 +0000 2021",
    "id_str": "1370360491852374026",
    "full_text": "Had fun last night on <a href=\"https://twitter.com/dynasty_discord\">@dynasty_discord</a>'s AMA series! <br><br>Highlights: <br>- navigating pitfalls while building <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> <br>- why R for NFL/FF analytics<br>- balancing data, film, &amp; draft capital<br>- secrets behind dark mode, stickhandling, and selling sophomores<br><a href=\"https://www.twitch.tv/videos/945941391\">https://www.twitch.tv/videos/945941391</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Mar 11 05:21:05 +0000 2021",
    "id_str": "1369881038336499714",
    "full_text": "<a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a> I don’t know what’s “really going on” and I don’t doubt that he’s sharp, is a good person deeper-down, and has been a good mentor before. I just think his persona is hurting him as much as any",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 10 17:49:10 +0000 2021",
    "id_str": "1369706913240383488",
    "full_text": "CFL rules I'd love to see:<br>- players in motion at snap (in any direction)<br>- onside punts!<br>- wider hashmarks and field <a href=\"https://twitter.com/TheUFL/status/1369696147435122689\">https://twitter.com/TheUFL/status/1369696147435122689</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 10 15:42:46 +0000 2021",
    "id_str": "1369675103240417282",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> This does as much as the violin but is cleaner imo <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1369675103240417282-EwIQNmPWgAMwEqE.png\"><img src=\"../../tweets_media/1369675103240417282-EwIQNmPWgAMwEqE.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 10 15:38:20 +0000 2021",
    "id_str": "1369673987953934342",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> May I suggest HULK? (green = good, purple = bad) without the green background? <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1369673987953934342-EwIPOeUWQAAoOlR.mp4\"></video></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 10 15:31:52 +0000 2021",
    "id_str": "1369672359314132992",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> I do like the \"green\" overlay but don't forget about accessibility w/r/t redgreen colorblindness!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 09 15:07:42 +0000 2021",
    "id_str": "1369303889586094091",
    "full_text": "Many thanks to <a href=\"https://twitter.com/enpiar\">@enpiar</a><br> for the awesome {httptest} package <a href=\"https://enpiar.com/r/httptest/\">https://enpiar.com/r/httptest/</a>, and also to <a href=\"https://twitter.com/sckottie\">@sckottie</a><br> and <a href=\"https://twitter.com/ma_salmon\">@ma_salmon</a><br> for their book on HTTP testing! I found both to be very helpful (and wished that the book had been written before I started)! <a href=\"https://books.ropensci.org/http-testing/\">https://books.ropensci.org/http-testing/</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 09 15:07:20 +0000 2021",
    "id_str": "1369303798045437957",
    "full_text": "I wrote about some of my adventures in HTTP testing for #rstats while developing {ffscrapr}, including NOT skipping CRAN (where possible), GHA, and offloading large packages of mocked test data <a href=\"https://tanho.ca/httptesting\">https://tanho.ca/httptesting</a>",
    "favorite_count": "18",
    "retweet_count": "9"
  },
  {
    "created_at": "Mon Mar 08 18:12:04 +0000 2021",
    "id_str": "1368987899228807170",
    "full_text": "Looking forward to answering questions with my favourite Discord community! (They're *unfortunately* too comfortable with me so these questions are quite...interesting. Save meeeee pls) <a href=\"https://twitter.com/dynasty_discord/status/1368986803303251969\">https://twitter.com/dynasty_discord/status/1368986803303251969</a>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 07 16:55:35 +0000 2021",
    "id_str": "1368606262062161933",
    "full_text": "Very excited that ffscrapr 1.3.0 is now on CRAN, extending the package to cover ESPN as a fantasy platform (in addition to MFL, Sleeper, and Fleaflicker). <br><br>You can check it out here: <a href=\"https://ffscrapr.dynastyprocess.com\">https://ffscrapr.dynastyprocess.com</a><br><br>Huge thanks to <a href=\"https://twitter.com/TonyElHabr\">@TonyElHabr</a> for all of his contributions. <br><br>#RStats",
    "favorite_count": "19",
    "retweet_count": "7"
  },
  {
    "created_at": "Sun Mar 07 04:48:48 +0000 2021",
    "id_str": "1368423364143046657",
    "full_text": "Had fun on stream number two, working through R pkg testing and dev! Thanks to all who came to hang out 😎<br><br>Replay here: <a href=\"https://twitch.tv/videos/939952505\">https://twitch.tv/videos/939952505</a><br><br>Next week’s stream is gonna feature the start of a Shiny app from scratch!",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 07 00:59:17 +0000 2021",
    "id_str": "1368365603090804750",
    "full_text": "Going live! <a href=\"./_TanHo/status/1368190905983832065\">https://twitter.com/_TanHo/status/1368190905983832065</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 06 18:57:47 +0000 2021",
    "id_str": "1368274629488484356",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> Hung-over me hates drunk me with a passion cause not just hung-over but hung-over with dishes to do. <br><br>Still better than Sloan tho",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 06 18:51:55 +0000 2021",
    "id_str": "1368273150551728136",
    "full_text": "<a href=\"https://twitter.com/adrian_stats\">@adrian_stats</a> <a href=\"./_TanHo/status/1330979457134456834?s=20\">https://twitter.com/_TanHo/status/1330979457134456834?s=20</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 06 15:56:07 +0000 2021",
    "id_str": "1368228912388599812",
    "full_text": "aaaaaand I forgot the link. Twitch pro right here. <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 06 13:25:06 +0000 2021",
    "id_str": "1368190905983832065",
    "full_text": "Back on Twitch tonight at 8pm EST - I’ll be continuing live code #RStats dev on the FantasyPros package I started on stream last week, adding tests, mocks, and basic CI/CD. Drop by to chat about FF, R, package dev, or anything else!",
    "favorite_count": "27",
    "retweet_count": "5"
  },
  {
    "created_at": "Fri Mar 05 23:31:05 +0000 2021",
    "id_str": "1367981019782123521",
    "full_text": "Just Friday things on <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a>! #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1367981019782123521-EvwLTvKXMAU43G8.png\"><img src=\"../../tweets_media/1367981019782123521-EvwLTvKXMAU43G8.png\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Nov 18 03:25:44 +0000 2022",
    "id_str": "1593445322226819072",
    "full_text": "Places you can find me: <br><br>Mastodon: <a href=\"http://fosstodon.org/<a href=\"https://twitter.com/tanho\">@tanho</a>\">http://fosstodon.org/<a href=\"https://twitter.com/tanho\">@tanho</a></a><br>R4DS Slack: <a href=\"https://r4ds.io/join\">https://r4ds.io/join</a> (#rstats nerdery)<br>#nflverse discord: <a href=\"https://discord.gg/UCKxQyuPw5\">https://discord.gg/UCKxQyuPw5</a> (nfl nerdery)<br><a href=\"https://twitter.com/dynasty_discord\">@dynasty_discord</a> discord: <a href=\"https://discord.gg/pnUCDm2qfW\">https://discord.gg/pnUCDm2qfW</a> (fantasy football stuff)<br><br>…and here.",
    "favorite_count": "0",
    "retweet_count": "3"
  },
  {
    "created_at": "Thu Nov 17 15:39:17 +0000 2022",
    "id_str": "1593267537256382464",
    "full_text": "<a href=\"https://twitter.com/R_by_Ryo\">@R_by_Ryo</a> WEW I THOUGHT THE PENALTY WAS SAVED <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1593267537256382464-FhxsX7BXoAYmhN9.mp4\"></video></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 17 01:50:49 +0000 2022",
    "id_str": "1593059048097996800",
    "full_text": "<a href=\"https://twitter.com/hadleywickham/status/1592928059778551810\">https://twitter.com/hadleywickham/status/1592928059778551810</a> <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1593059048097996800-Fhuuwf1XwAE5-jO.mp4\"></video></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Nov 09 23:15:50 +0000 2022",
    "id_str": "1590483330239442945",
    "full_text": "As someone maintaining one of said affected CRAN packages - immensely grateful - thank you for fixing some of the test infrastructure while you were in there! <br><br>(also appreciate the kick in the pants to work on some longstanding bugs...) <a href=\"https://twitter.com/hadleywickham/status/1590455226569408512\">https://twitter.com/hadleywickham/status/1590455226569408512</a>",
    "favorite_count": "11",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 05 12:48:00 +0000 2021",
    "id_str": "1367819180897165313",
    "full_text": "Doing an annual re-read of <a href=\"https://twitter.com/austinkleon\">@austinkleon</a>'s Steal trilogy and was hooked by a chapter called \"Like-Minded vs Like-Hearted\" - enough to reflect a little on it and the idea of arguing with strangers on the internet: <a href=\"https://tanho.ca/like-hearted\">https://tanho.ca/like-hearted</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1367819180897165313-EvsKo4vXMAUv6bk.jpg\"><img src=\"../../tweets_media/1367819180897165313-EvsKo4vXMAUv6bk.jpg\"></a></li></ul></div>",
    "favorite_count": "8",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Mar 04 17:47:54 +0000 2021",
    "id_str": "1367532265228623872",
    "full_text": "I freaking love this so much. Game theory for the win <a href=\"https://twitter.com/ProFootballTalk/status/1367344144507686914\">https://twitter.com/ProFootballTalk/status/1367344144507686914</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Feb 28 23:38:02 +0000 2021",
    "id_str": "1366170828019220485",
    "full_text": "<a href=\"https://twitter.com/benj_robinson\">@benj_robinson</a> Er, options = list(maxOptions =3) - whoops",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Feb 28 22:40:07 +0000 2021",
    "id_str": "1366156252095672320",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> Also, gimme MVS and Ruggs if you’re still taking requests",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Feb 28 14:24:23 +0000 2021",
    "id_str": "1366031498374246403",
    "full_text": "<a href=\"https://twitter.com/genomixgmailcom\">@genomixgmailcom</a> You can also catch the recording at <a href=\"http://twitch.tv/tanho_\">http://twitch.tv/tanho_</a> (it should be up for a few weeks!)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Feb 28 04:51:17 +0000 2021",
    "id_str": "1365887273997389824",
    "full_text": "Had a fantastic time talking through my thought process here! I’ll be back next Saturday at 8pm, and in the meantime you can check out tonight’s stream at <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> and see the code at <a href=\"https://github.com/dynastyprocess/fpscrapr\">https://github.com/dynastyprocess/fpscrapr</a> <a href=\"./_TanHo/status/1365672898250346497\">https://twitter.com/_TanHo/status/1365672898250346497</a>",
    "favorite_count": "9",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Feb 28 01:01:42 +0000 2021",
    "id_str": "1365829494519529475",
    "full_text": "Now live! <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1365672898250346497\">https://twitter.com/_TanHo/status/1365672898250346497</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Feb 27 14:39:26 +0000 2021",
    "id_str": "1365672898250346497",
    "full_text": "Making my Twitch stream debut tonight at 8pm ET - join me for some fantasy football, data science, and #rstats programming! <br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "41",
    "retweet_count": "16"
  },
  {
    "created_at": "Wed Feb 24 13:17:58 +0000 2021",
    "id_str": "1364565231658295296",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> If you like Hamler profiles, Elijah's your guy, and if you want to arbitrage Elijah you can trade him for Hamler + (the difference between mid-two and mid-three)?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 24 00:09:45 +0000 2021",
    "id_str": "1364366873127751683",
    "full_text": "Stumbled on Gitemon today...how well do you know the Tidyverse team, #rstats? <br><a href=\"https://gitemon.netlify.app/tidyverse\">https://gitemon.netlify.app/tidyverse</a> <br><br>(shoutout to <a href=\"https://twitter.com/eduardoboucas\">@eduardoboucas</a> for building this!) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1364366873127751683-Eu80Px9XMAIgVbh.jpg\"><img src=\"../../tweets_media/1364366873127751683-Eu80Px9XMAIgVbh.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Feb 23 22:34:41 +0000 2021",
    "id_str": "1364342945185476611",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> Waffles is clearly a superior maple syrup delivery vehicle to toast.",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 15 12:31:08 +0000 2021",
    "id_str": "1361291956723318784",
    "full_text": "I love this suggestion for Shiny apps - you can definitely be TOO reactive! <a href=\"https://twitter.com/_ColinFay/status/1361277491231490051\">https://twitter.com/_ColinFay/status/1361277491231490051</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Feb 11 23:34:23 +0000 2021",
    "id_str": "1360009314782609412",
    "full_text": "These are insaneeeee <a href=\"https://twitter.com/twoscooters/status/1359663550130761729\">https://twitter.com/twoscooters/status/1359663550130761729</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Feb 09 19:58:33 +0000 2021",
    "id_str": "1359230224555257861",
    "full_text": "<a href=\"https://twitter.com/dgkeyes\">@dgkeyes</a> It's not a \"bad\" connotation but I'm not sure it's the one you may have been going for",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 08 16:17:38 +0000 2021",
    "id_str": "1358812242733633537",
    "full_text": "<a href=\"https://twitter.com/BrettLuskin\">@BrettLuskin</a> <a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> Although Bill Belichick also theoretically fits this description. I think there are more failures than successes of \"coach nepotism\", but then again there are more failures than successes in general so it's probably not a well-researched subject",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Feb 05 15:54:34 +0000 2021",
    "id_str": "1357719273649618946",
    "full_text": "<a href=\"https://twitter.com/EthanCDouglas\">@EthanCDouglas</a> <a href=\"https://twitter.com/J_Druzzi\">@J_Druzzi</a> and non-wapo-walled <a href=\"https://www.footballstudyhall.com/2015/8/18/9166647/no-punting-and-now-bringing-rugby-to-football-an-interview-with-coach\">https://www.footballstudyhall.com/2015/8/18/9166647/no-punting-and-now-bringing-rugby-to-football-an-interview-with-coach</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 03 16:19:59 +0000 2021",
    "id_str": "1357000895129616395",
    "full_text": "Had a great time talking to Dan here! <a href=\"https://twitter.com/IRISHDC13/status/1356999864488501251\">https://twitter.com/IRISHDC13/status/1356999864488501251</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 03 14:06:17 +0000 2021",
    "id_str": "1356967248397819907",
    "full_text": "Me: *starts thinking about whether CRAN might let me name a package \"hulk\"*<br>Me: *finds Batman package*<br><br>😎😎😎#rstats <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1356967248397819907-EtTqhInXcAQH2Zv.mp4\"></video></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Feb 03 00:00:06 +0000 2021",
    "id_str": "1356754295627079682",
    "full_text": "<a href=\"https://twitter.com/theStevenRuiz\">@theStevenRuiz</a> 2015*",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Feb 02 23:59:05 +0000 2021",
    "id_str": "1356754040386957315",
    "full_text": "<a href=\"https://twitter.com/theStevenRuiz\">@theStevenRuiz</a> Of course, Mahomes to Ben is no comparison but the trio's offensive output is remarkably comparable",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Feb 02 23:57:12 +0000 2021",
    "id_str": "1356753569249193988",
    "full_text": "<a href=\"https://twitter.com/theStevenRuiz\">@theStevenRuiz</a> I was curious enough to scratch something together for this and I think it's pretty darn close between AB/Bell vs Hill/Kelce. Bell only played 6 games in 2020, and obviously Y/T here skewed down by him rushing instead of receiving - but very close AV and TDs all the same! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1356753569249193988-EtQnlgMXEAAx9vV.png\"><img src=\"../../tweets_media/1356753569249193988-EtQnlgMXEAAx9vV.png\"></a></li><li><a href=\"../../tweets_media/1356753569249193988-EtQnrH8XAAARhv8.png\"><img src=\"../../tweets_media/1356753569249193988-EtQnrH8XAAARhv8.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 31 02:25:16 +0000 2021",
    "id_str": "1355703666414653440",
    "full_text": "<a href=\"https://twitter.com/CaioBrighenti\">@CaioBrighenti</a> Huge fan of Derek Sivers in general - he keeps a page on his site with every book he’s read, a rating, a summary of what he thought, and detailed notes from reading<br><br><a href=\"https://sive.rs/book\">https://sive.rs/book</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 28 19:14:02 +0000 2021",
    "id_str": "1354870366443868161",
    "full_text": "<a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> <a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> You can tell I intended to do it yesterday! <a href=\"https://github.com/tanho63/ggHulk\">https://github.com/tanho63/ggHulk</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 28 17:57:00 +0000 2021",
    "id_str": "1354850980110729219",
    "full_text": "<a href=\"https://twitter.com/benj_robinson\">@benj_robinson</a> Compatibility with a good docking station is another thing to look for!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 28 17:53:59 +0000 2021",
    "id_str": "1354850221189115906",
    "full_text": "<a href=\"https://twitter.com/benj_robinson\">@benj_robinson</a> Can probably get away with 16GB RAM and 4 cores if on a budget, but a) machine won't suffice for as long and b) sounds like you're kind of looking for a wishlist so may as well aim a little higher for longevity reasons",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 28 14:08:50 +0000 2021",
    "id_str": "1354793559539511299",
    "full_text": "“If we start being honest about our pain, our anger, and our shortcomings instead of pretending they don’t exist, then maybe we’ll leave the world a better place than we found it” - Russell Wilson<br><br>If you need an ear, I’m here for you. <br><br> #BellLetsTalk",
    "favorite_count": "5",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Jan 26 00:39:16 +0000 2021",
    "id_str": "1353865050721832960",
    "full_text": "random dynastyprocess chat hall of fame moments: MARIAAA COME BACK! I'll change, Maria!!! <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1353865050721832960-EsnktiNXcAAG7I5.png\"><img src=\"../../tweets_media/1353865050721832960-EsnktiNXcAAG7I5.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jan 23 15:10:49 +0000 2021",
    "id_str": "1352997221382426626",
    "full_text": "<a href=\"https://twitter.com/7RoundsInApril\">@7RoundsInApril</a> Better link: <a href=\"https://en.wikipedia.org/wiki/Relative_age_effect\">https://en.wikipedia.org/wiki/Relative_age_effect</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jan 23 15:08:31 +0000 2021",
    "id_str": "1352996642765475840",
    "full_text": "<a href=\"https://twitter.com/7RoundsInApril\">@7RoundsInApril</a> <a href=\"https://www.theglobeandmail.com/amp/report-on-business/economy/economy-lab/making-the-nhl-does-your-birthday-matter/article1462192/\">https://www.theglobeandmail.com/amp/report-on-business/economy/economy-lab/making-the-nhl-does-your-birthday-matter/article1462192/</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jan 18 03:02:56 +0000 2021",
    "id_str": "1351002105071476737",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> *Shakes fist at Brees being olddd* <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1351002105071476737-Er-5OX5W8AYxr6b.jpg\"><img src=\"../../tweets_media/1351002105071476737-Er-5OX5W8AYxr6b.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 13 15:04:23 +0000 2021",
    "id_str": "1349371724060569601",
    "full_text": "Also, #rstats meme from yesterday: a mashup of <a href=\"https://twitter.com/malco_barrett\">@malco_barrett</a>'s \"learning programming\" graph with the cute robot icons in Tidymodels with R book <a href=\"./_TanHo/status/1349369487129260039\">https://twitter.com/_TanHo/status/1349369487129260039</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1349371724060569601-ErnuDE-XMAA3mJo.jpg\"><img src=\"../../tweets_media/1349371724060569601-ErnuDE-XMAA3mJo.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Nov 09 02:12:45 +0000 2022",
    "id_str": "1590165465598689286",
    "full_text": "<a href=\"https://twitter.com/illiniduce\">@illiniduce</a> <a href=\"https://twitter.com/statsowar\">@statsowar</a> I think it also objectively unlikely that Parker should optimize for power per stroke unless competing on-water or in an erg comp, much much more gains to be found with steady state",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Nov 08 23:42:58 +0000 2022",
    "id_str": "1590127769312448514",
    "full_text": "<a href=\"https://twitter.com/statsowar\">@statsowar</a> Would be happy to give feedback on video formcheck too if you want to by DM",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Nov 08 23:35:59 +0000 2022",
    "id_str": "1590126015057375232",
    "full_text": "<a href=\"https://twitter.com/statsowar\">@statsowar</a> Drag factor adjusts for air pressure, dust levels, room temperature etc that damper setting doesn’t - so damper 7 and damper 5 could have same resistance on different machines in different envs",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Nov 08 14:34:59 +0000 2022",
    "id_str": "1589989868473847810",
    "full_text": "_willing it into existence_ 😆 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1589989868473847810-FhDG3CzWIAAD3xM.png\"><img src=\"../../tweets_media/1589989868473847810-FhDG3CzWIAAD3xM.png\"></a></li></ul></div>",
    "favorite_count": "11",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 13 14:55:30 +0000 2021",
    "id_str": "1349369488299454466",
    "full_text": "Details package here: <a href=\"https://yonicd.github.io/details/\">https://yonicd.github.io/details/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 13 14:55:30 +0000 2021",
    "id_str": "1349369487129260039",
    "full_text": ".<a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> bookclub chats are fun, full of #rstats memes, and sometimes solve problems you didn't know you had! Case in point: <br><br>Me: I think HTML details tags would be useful here!<br><a href=\"https://twitter.com/yoniceedee\">@yoniceedee</a>: Have you heard of my details pkg?<br>Me: NO BUT WHERE HAVE YOU BEEN ALL MY LIFE?! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1349369487129260039-ErnsYrXXIAEVCbB.png\"><img src=\"../../tweets_media/1349369487129260039-ErnsYrXXIAEVCbB.png\"></a></li></ul></div>",
    "favorite_count": "11",
    "retweet_count": "4"
  },
  {
    "created_at": "Wed Jan 13 14:20:42 +0000 2021",
    "id_str": "1349360727853854721",
    "full_text": "A fantastic tribute to friendships in fantasy football ♥ hitting home for me today <a href=\"https://twitter.com/AdamHarstad/status/1349241598450741248\">https://twitter.com/AdamHarstad/status/1349241598450741248</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jan 12 13:26:22 +0000 2021",
    "id_str": "1348984669887475714",
    "full_text": "I've definitely felt the temptation to be paralyzed by doing something I really care about (and wanting to make sure I do it right)! <a href=\"https://twitter.com/chrisalbon/status/1348983386774282240\">https://twitter.com/chrisalbon/status/1348983386774282240</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jan 12 13:18:48 +0000 2021",
    "id_str": "1348982764817801216",
    "full_text": "<a href=\"https://twitter.com/chrisderv\">@chrisderv</a> My expected behaviour is more like Ninite, which I used for quite some time as a \"first-time-setup\" tool - until getting more into commandline/programming.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 18:21:13 +0000 2021",
    "id_str": "1348334092161576966",
    "full_text": "And that's it for now! Time for some football :) <br><br>I've uploaded the code and setup notes to this github page (and it'll probably make it into my blog at some point as well) <a href=\"https://github.com/tanho63/pc-setup/blob/main/README.md\">https://github.com/tanho63/pc-setup/blob/main/README.md</a> 19/19",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 18:15:36 +0000 2021",
    "id_str": "1348332681688444938",
    "full_text": "Once all the R packages are installed, a few last tweaks: installing some fonts from Google Fonts (Jetbrains Mono, Fira Sans/Condensed/Mono/Code, IBM Plex Sans/Serif/Condensed/Mono) and customizing RStudio theme/pane layouts (<a href=\"https://twitter.com/grrrck\">@grrrck</a>'s rsthemes is so awesome!) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1348332681688444938-ErY9Z8mXEAE0mxX.jpg\"><img src=\"../../tweets_media/1348332681688444938-ErY9Z8mXEAE0mxX.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 18:09:20 +0000 2021",
    "id_str": "1348331105229877260",
    "full_text": "Time to install RStudio, and then a whack of R packages. I have this package list saved from when I installed R4.0.0 recently, so that comes in handy! 17/n <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1348331105229877260-ErY7yIGXAAc3AmG.png\"><img src=\"../../tweets_media/1348331105229877260-ErY7yIGXAAc3AmG.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 18:05:28 +0000 2021",
    "id_str": "1348330130087800832",
    "full_text": "I also get started on removing Microsoft Clutter (TM) - uninstalling every possible app tile in the start menu, and getting rid of cortana and search bars from my taskbar. If I need to search my PC, I press the windows key and start typing. The end result start menu: 16/n <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1348330130087800832-ErY7FNcXIAAlBIf.png\"><img src=\"../../tweets_media/1348330130087800832-ErY7FNcXIAAlBIf.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:57:51 +0000 2021",
    "id_str": "1348328215518052352",
    "full_text": "I've deliberately excluded RStudio here because I want to grab the preview build - so while chocolatey is busy installing stuff, I get started on downloading <a href=\"https://rstudio.com/products/rstudio/download/preview/\">https://rstudio.com/products/rstudio/download/preview/</a> 15/n",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:55:37 +0000 2021",
    "id_str": "1348327651371606018",
    "full_text": "Copy and paste that oneliner into the PowerShell window, and poof - it goes to work installing everything! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1348327651371606018-ErY40zsWMAMFQD5.png\"><img src=\"../../tweets_media/1348327651371606018-ErY40zsWMAMFQD5.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:53:02 +0000 2021",
    "id_str": "1348326999559958531",
    "full_text": "While this is running, I open up a browser window and start scanning the chocolatey package library for things I want to install - and then start building up a terminal command in notepad to install it. My list ends up looking like this: 13/n <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1348326999559958531-ErY4PwFXAAIoExo.jpg\"><img src=\"../../tweets_media/1348326999559958531-ErY4PwFXAAIoExo.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:49:59 +0000 2021",
    "id_str": "1348326234602823682",
    "full_text": "Per the instructions, open an administrator powershell window and paste the download and install script so that it installs chocolatey. 12/n",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:49:58 +0000 2021",
    "id_str": "1348326230911819776",
    "full_text": "Next, install Chocolatey. Chocolatey is the Windows answer to Linux's apt-get and Mac's homebrew - you can install all kinds of software via command line. <a href=\"https://chocolatey.org/install\">https://chocolatey.org/install</a> 11/n",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:36:19 +0000 2021",
    "id_str": "1348322793201561600",
    "full_text": "As an aside: I'm a huge fan of the Triathlon mouse - here's how I have the gestures and shortcuts set up. I got rid of the side-scrolling feature in favour of mapping ctrl-C and ctrl-v to the left-right scroll action - this lets me select, copy, and paste all with my mouse! 10/n <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1348322793201561600-ErY0HIsXUAA0h-E.png\"><img src=\"../../tweets_media/1348322793201561600-ErY0HIsXUAA0h-E.png\"></a></li><li><a href=\"../../tweets_media/1348322793201561600-ErY0JFLXMAkrtzk.png\"><img src=\"../../tweets_media/1348322793201561600-ErY0JFLXMAkrtzk.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:31:43 +0000 2021",
    "id_str": "1348321638304120832",
    "full_text": "Time to install some hardware specific drivers - my CPU/GPU are worth installing the latest from AMD <a href=\"https://www.amd.com/en/support\">https://www.amd.com/en/support</a>, and I'd like to have the configurable gestures and hotkeys for my Logitech Triathlon mouse, so that's <a href=\"https://www.logitech.com/en-ca/product/options\">https://www.logitech.com/en-ca/product/options</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:24:03 +0000 2021",
    "id_str": "1348319709406625797",
    "full_text": "The second order of business is re-running Windows Update, in case it didn't manage to successfully update everything the first time. 8/n",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:18:04 +0000 2021",
    "id_str": "1348318201722056704",
    "full_text": "The first order of business is running Windows Update and then letting it do its thing. This is a good time to get some coffee! 7/n",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:16:23 +0000 2021",
    "id_str": "1348317779636719618",
    "full_text": "When it finally loads, I set up a local account (not a MS one), skipping through all the dialogues (choosing not to send Microsoft your data, not using Cortana, not using location services etc). 6/n",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:16:23 +0000 2021",
    "id_str": "1348317778642694145",
    "full_text": "I primarily do data science/development (with R/SQL etc) but also enjoy gaming every now and then - I just finished Assassin's Creed Valhalla. 5/n",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:12:57 +0000 2021",
    "id_str": "1348316915282944000",
    "full_text": "I do think Win10 Pro is worth upgrading to, especially for the Remote Desktop feature - that lets me log in to my home machine from my cheap and dirty laptop for the rare case I need anything from it. 4/n",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:11:04 +0000 2021",
    "id_str": "1348316438122156033",
    "full_text": "First things first, make a Win10 USB install stick with <a href=\"https://support.microsoft.com/en-us/windows/create-installation-media-for-windows-99a58364-8c02-206f-aa6f-40c3b507420d\">https://support.microsoft.com/en-us/windows/create-installation-media-for-windows-99a58364-8c02-206f-aa6f-40c3b507420d</a>, then boot from the stick and follow the instructions. 3/n",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:11:03 +0000 2021",
    "id_str": "1348316437140692993",
    "full_text": "Here's my current parts list - <a href=\"https://ca.pcpartpicker.com/list/rcgfmk\">https://ca.pcpartpicker.com/list/rcgfmk</a> - I upgraded CPU, GPU, and RAM - and I'll be clean installing Windows onto a new/empty drive along with all of my daily driver programs. <br><br>2/n",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 10 17:11:03 +0000 2021",
    "id_str": "1348316436247273472",
    "full_text": "I'm clean installing Windows 10 today (after upgrading some parts) and, inspired by <a href=\"https://twitter.com/grrrck\">@grrrck</a>'s recent thread, decided to put together a tweet thread about it. #rstats #PCBuild  <br>1/n",
    "favorite_count": "38",
    "retweet_count": "6"
  },
  {
    "created_at": "Fri Jan 08 00:19:41 +0000 2021",
    "id_str": "1347337141353852931",
    "full_text": "Whoaaaaa <a href=\"https://twitter.com/CoachDubMaddox/status/1347243533867098113\">https://twitter.com/CoachDubMaddox/status/1347243533867098113</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 06 00:39:02 +0000 2021",
    "id_str": "1346617235180285952",
    "full_text": "Tucker doing some fantastic stuff with this play index! <a href=\"https://twitter.com/Tucker_TnL/status/1346613608298508288\">https://twitter.com/Tucker_TnL/status/1346613608298508288</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jan 05 22:45:35 +0000 2021",
    "id_str": "1346588685391851524",
    "full_text": "My most retweeted tweet is me messing up the knit rmd command 🤣🤣🤣 #rstats <a href=\"https://twitter.com/grrrck/status/1346542201170522114\">https://twitter.com/grrrck/status/1346542201170522114</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1346588685391851524-ErALRasXIAIgc9B.jpg\"><img src=\"../../tweets_media/1346588685391851524-ErALRasXIAIgc9B.jpg\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "2"
  },
  {
    "created_at": "Thu Dec 31 14:16:21 +0000 2020",
    "id_str": "1344648593966309376",
    "full_text": "I know <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> worked really hard on a fantasy EP model and app that I’ve used nearly every day! <a href=\"https://apps.dynastyprocess.com/ep\">https://apps.dynastyprocess.com/ep</a> <a href=\"https://twitter.com/reinhardNFL/status/1344645483977789441\">https://twitter.com/reinhardNFL/status/1344645483977789441</a>",
    "favorite_count": "3",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Dec 25 19:52:54 +0000 2020",
    "id_str": "1342558959106985986",
    "full_text": "Finished up #AdventOfCode today, it's been so awesome! I wrote up solutions and reflections in five-day-chunks here: <br><a href=\"https://tanho.ca/adventcode-2020-21-25/\">https://tanho.ca/adventcode-2020-21-25/</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 23 20:08:57 +0000 2020",
    "id_str": "1341838222956113920",
    "full_text": "<a href=\"https://twitter.com/nastynateff\">@nastynateff</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> R's libraries are excellent though, including its DBI and tidyverse packages",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Dec 21 05:09:10 +0000 2020",
    "id_str": "1340887011289391105",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> (i mean, you were going to be the tail end of the distribution no matter what!)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Dec 21 05:08:30 +0000 2020",
    "id_str": "1340886843081015296",
    "full_text": "<a href=\"https://twitter.com/amicsta\">@amicsta</a> interesting to see that your strategy wasn't the dominant one in SFB <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1340886843081015296-EpvJYdnXMAMeWDa.png\"><img src=\"../../tweets_media/1340886843081015296-EpvJYdnXMAMeWDa.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Dec 19 17:18:01 +0000 2020",
    "id_str": "1340345655189975040",
    "full_text": "I didn't realize that stack overflow was an actual kind of error until I caught one in the wild! #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1340345655189975040-EpndRAyWwAE0zAN.png\"><img src=\"../../tweets_media/1340345655189975040-EpndRAyWwAE0zAN.png\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Dec 16 18:33:13 +0000 2020",
    "id_str": "1339277417710559234",
    "full_text": "&gt; \"...if your package doesn't have a hex sticker, it's not a real R package...\"<br><br>- Hadley Wickham<br><br>(he was at least half joking, I think :P ) <br><br>#RStats #hadleyquotes #nocontext <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a>",
    "favorite_count": "0",
    "retweet_count": "2"
  },
  {
    "created_at": "Thu Dec 10 16:30:07 +0000 2020",
    "id_str": "1337072109013639172",
    "full_text": "Thoughts and #rstats solutions to #adventofcode2020 days 6-10 - <a href=\"https://tanho.ca/adventcode-2020-06-10/\">https://tanho.ca/adventcode-2020-06-10/</a> - some of these were terribly frustrating!",
    "favorite_count": "0",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Dec 02 16:53:12 +0000 2020",
    "id_str": "1334178815204003840",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> oops, meant to link the OS config one <a href=\"https://medium.com/<a href=\"https://twitter.com/leerbardon\">@leerbardon</a>/build-a-diy-supercomputer-part-2-8a40a484c0e2\">https://medium.com/<a href=\"https://twitter.com/leerbardon\">@leerbardon</a>/build-a-diy-supercomputer-part-2-8a40a484c0e2</a><br><br>the hardware is \"ideal hardware for maximizing price-performance\" but you're starting from \"old stuff you have for free\"",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 02 16:50:51 +0000 2020",
    "id_str": "1334178224813854721",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> Can't find a brilliant guide in two minutes googling (clearly it's not that popular these days) but this one looks recent and ok-ish <a href=\"https://medium.com/the-innovation/build-a-diy-supercomputer-a6461b2087d3\">https://medium.com/the-innovation/build-a-diy-supercomputer-a6461b2087d3</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 02 16:38:47 +0000 2020",
    "id_str": "1334175188603297793",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> More seriously, the hardware you'd need is just LAN cables to plug into your router. Setting it up is relatively time/effort-consuming though",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 02 15:14:42 +0000 2020",
    "id_str": "1334154028691968006",
    "full_text": "<a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> <a href=\"https://twitter.com/ZachFeldman3\">@ZachFeldman3</a> <a href=\"https://twitter.com/reinhurdler\">@reinhurdler</a> <a href=\"https://twitter.com/gredelsheimer\">@gredelsheimer</a> wait, you import purrr in personalr? never mind haha",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 02 14:43:13 +0000 2020",
    "id_str": "1334146105907564544",
    "full_text": "<a href=\"https://twitter.com/ZachFeldman3\">@ZachFeldman3</a> <a href=\"https://twitter.com/reinhurdler\">@reinhurdler</a> <a href=\"https://twitter.com/gredelsheimer\">@gredelsheimer</a> I'm usually far too lazy to make it for myself and/or load/maintain a package with it, although this is a good function if you make a personal package (possibly via <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a>'s new personalr <a href=\"https://mrcaseb.github.io/personalr/\">https://mrcaseb.github.io/personalr/</a>)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Dec 01 16:13:44 +0000 2020",
    "id_str": "1333806498053545990",
    "full_text": "Trying out #AdventOfCode this year! <a href=\"https://tanho.ca/adventcode-2020-01/\">https://tanho.ca/adventcode-2020-01/</a><br><br>s/o <a href=\"https://twitter.com/MilesMcBain\">@MilesMcBain</a> for datapasta :)<br><br>#rstats",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Nov 30 15:35:53 +0000 2020",
    "id_str": "1333434584554479620",
    "full_text": "The new use case for absolute air yards 😂 <a href=\"https://twitter.com/gdula13/status/1333400696645935106\">https://twitter.com/gdula13/status/1333400696645935106</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Nov 27 13:21:27 +0000 2020",
    "id_str": "1332313590225915905",
    "full_text": "On a bit of a productivity streak: {ffscrapr} 1.2.0 is now on CRAN, and adds support for <a href=\"https://twitter.com/fleaflicker\">@fleaflicker</a> leagues! You can check out the getting started vignette here: <a href=\"https://ffscrapr.dynastyprocess.com/articles/fleaflicker_basics.html\">https://ffscrapr.dynastyprocess.com/articles/fleaflicker_basics.html</a><br><br>#rstats",
    "favorite_count": "15",
    "retweet_count": "8"
  },
  {
    "created_at": "Mon Nov 23 21:08:15 +0000 2020",
    "id_str": "1330981511642935300",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> Only cons for me is when I'm freehanding code into the console, I find myself stretching it wider. That's when I kinda wish I had default pane layout again (console and source having same width)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Nov 04 14:51:44 +0000 2022",
    "id_str": "1588544529711656962",
    "full_text": "Trying to stay flexible as much of the data community moves to Mastodon. Here’s my handle: <a href=\"https://twitter.com/tanho\">@tanho</a><a href=\"https://twitter.com/fosstodon\">@fosstodon</a>.org if you’re there/on your way over there 🙃",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 29 22:35:44 +0000 2022",
    "id_str": "1586486973262286850",
    "full_text": "Ben on the ball and grabbing pictures <a href=\"https://twitter.com/benj_robinson/status/1586486715706798080\">https://twitter.com/benj_robinson/status/1586486715706798080</a>",
    "favorite_count": "5",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Oct 29 22:33:59 +0000 2022",
    "id_str": "1586486534580019200",
    "full_text": "This cricWAR presentation by <a href=\"https://twitter.com/hassanrafique_\">@hassanrafique_</a> is super cool, and the #rstats nerd in me super appreciates the quarto/reactable interactive presentation flex #cmsac22 <br><br>Just casually deep diving into audience chosen players is 🔥",
    "favorite_count": "19",
    "retweet_count": "7"
  },
  {
    "created_at": "Sat Oct 29 21:57:24 +0000 2022",
    "id_str": "1586477326262366209",
    "full_text": "Presentation would have donged in 30/30 conferences <a href=\"https://twitter.com/danmorse_/status/1586476654930501634\">https://twitter.com/danmorse_/status/1586476654930501634</a>",
    "favorite_count": "13",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Nov 16 17:56:58 +0000 2020",
    "id_str": "1328396659882151936",
    "full_text": "That said, I use this package extensively in dynastyprocess apps so it's not just a beginner package :P",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 16 17:34:09 +0000 2020",
    "id_str": "1328390917200490496",
    "full_text": "I actually made this package FOR the \"amateur nerds\" - it helps make relevant FF data accessible to the beginner R user who would otherwise struggle to hit APIs. <br><br>This was me not that long ago - and if you're in fantasy football looking to get started w/ R - this is for you! <a href=\"https://twitter.com/ff_spaceman/status/1328386950395473924\">https://twitter.com/ff_spaceman/status/1328386950395473924</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 16 16:10:30 +0000 2020",
    "id_str": "1328369866609463299",
    "full_text": "I'm excited to share that the latest version of ffscrapr, v1.1.0, is now on CRAN! This version adds a full set of methods for easily accessing <a href=\"https://twitter.com/SleeperHQ\">@SleeperHQ</a> leagues with R. You can check out the Getting Started guides for MFL and Sleeper here: <br><br><a href=\"https://ffscrapr.dynastyprocess.com/articles/sleeper_basics.html\">https://ffscrapr.dynastyprocess.com/articles/sleeper_basics.html</a><br><br>#rstats",
    "favorite_count": "33",
    "retweet_count": "10"
  },
  {
    "created_at": "Thu Nov 12 21:25:53 +0000 2020",
    "id_str": "1326999682959241221",
    "full_text": "Oh and for the really impatient, you can look yourself up in this CSV <a href=\"https://github.com/dynastyprocess/research/blob/master/sfb-sims/results_by_franchise.csv\">https://github.com/dynastyprocess/research/blob/master/sfb-sims/results_by_franchise.csv</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 12 21:17:45 +0000 2020",
    "id_str": "1326997636520570882",
    "full_text": "Gotta finish off the workday, but I'll be updating the SFB Sims app (<a href=\"https://apps.dynastyprocess.com/sfb-sims\">https://apps.dynastyprocess.com/sfb-sims</a>) at some point in the nearish future, or you can check out the source code at <a href=\"https://github.com/dynastyprocess/research\">https://github.com/dynastyprocess/research</a> :)",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 12 21:16:18 +0000 2020",
    "id_str": "1326997270731087872",
    "full_text": "Scratching together a quick data pull on this based on my SFB strategy analysis. <br><br>Looks like the dominant strategies thus far are cluster 6: QB-heavy/early-RB, cluster 3: zeroRB to the moon (i.e. <a href=\"https://twitter.com/amicsta\">@amicsta</a>), cluster 4: WR &gt; RB &gt;TE<br><br>RB-heavy is definitely lagging a little behind! <a href=\"https://twitter.com/YardsPerGretch/status/1326947347721379840\">https://twitter.com/YardsPerGretch/status/1326947347721379840</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1326997270731087872-EmpvRJyXUAA9INy.png\"><img src=\"../../tweets_media/1326997270731087872-EmpvRJyXUAA9INy.png\"></a></li></ul></div>",
    "favorite_count": "11",
    "retweet_count": "4"
  },
  {
    "created_at": "Tue Nov 10 19:41:37 +0000 2020",
    "id_str": "1326248666189991944",
    "full_text": "Treated myself to some new books (and received some pre-orders) - excited to dig into The Practice by <a href=\"https://twitter.com/ThisIsSethsBlog\">@ThisIsSethsBlog</a>, Uncomfortable Conversations by <a href=\"https://twitter.com/EmmanuelAcho\">@EmmanuelAcho</a>, and The Food Lab by <a href=\"https://twitter.com/kenjilopezalt\">@kenjilopezalt</a> ! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1326248666189991944-EmfIIV2W4AEjNK-.jpg\"><img src=\"../../tweets_media/1326248666189991944-EmfIIV2W4AEjNK-.jpg\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Nov 10 14:08:07 +0000 2020",
    "id_str": "1326164741304307718",
    "full_text": "Super stoked about this! I had a slackbot automated to cheer me up every time the word css was typed into a chat because I hated it so much - and then I saw Julia's one comic on selectors and it's literally changed how I feel about CSS. Can't wait for the zine! <a href=\"https://twitter.com/b0rk/status/1326162989335064578\">https://twitter.com/b0rk/status/1326162989335064578</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Nov 07 00:26:16 +0000 2020",
    "id_str": "1324870751372120064",
    "full_text": "<a href=\"https://twitter.com/CaioBrighenti\">@CaioBrighenti</a> I think he prefers baking soda instead of vinegar in the parboil now because the breakdown creates more of a slurry which fries up into a crust",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Nov 06 17:05:55 +0000 2020",
    "id_str": "1324759932336558080",
    "full_text": "Tables are the one true viz <a href=\"https://twitter.com/DataRemixed/status/1324755312826408960\">https://twitter.com/DataRemixed/status/1324755312826408960</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 05 16:57:56 +0000 2020",
    "id_str": "1324395537240625153",
    "full_text": "Robbo and Trent are the bestest <a href=\"https://twitter.com/andrewrobertso5/status/1324365818310832133\">https://twitter.com/andrewrobertso5/status/1324365818310832133</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Nov 03 21:19:13 +0000 2020",
    "id_str": "1323736512488476679",
    "full_text": "<a href=\"https://twitter.com/statsowar\">@statsowar</a> Would be keen to see something statistically sig proving me wrong",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 02 13:33:00 +0000 2020",
    "id_str": "1323256798124584963",
    "full_text": "Goooood morning! I spent some time revisiting/refactoring the <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> ESPN Potential Points app this past weekend - it's useful for those few dynasty leagues that are still running on ESPN! Check it out here: <br><br><a href=\"https://apps.dynastyprocess.com/potentialpoints\">https://apps.dynastyprocess.com/potentialpoints</a>",
    "favorite_count": "4",
    "retweet_count": "3"
  },
  {
    "created_at": "Sat Oct 31 22:27:01 +0000 2020",
    "id_str": "1322666413996363776",
    "full_text": "Wrapping up the 2020 Pumpkin Carves with one last pumpkin - and carved among friends, no less! Happy happy Halloween to all - and I’m already starting to jot down ideas for next October!<br><br>More carves: <a href=\"http://tanho.ca/pumpkins\">http://tanho.ca/pumpkins</a> <br><br>#pumpkincarving #WakandaForever <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1322666413996363776-ElsOFuhXIAA6-UZ.jpg\"><img src=\"../../tweets_media/1322666413996363776-ElsOFuhXIAA6-UZ.jpg\"></a></li><li><a href=\"../../tweets_media/1322666413996363776-ElsOFuJXYAQ562w.jpg\"><img src=\"../../tweets_media/1322666413996363776-ElsOFuJXYAQ562w.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 31 12:08:32 +0000 2020",
    "id_str": "1322510766432571393",
    "full_text": "Second last of the pumpkin carves for the year is dedicated to my home away from home. Happy Halloween, everyone! #pumpkincarving <br><br>More carves: <a href=\"http://tanho.ca/pumpkins\">http://tanho.ca/pumpkins</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1322510766432571393-ElqAh21XEAAL0AY.jpg\"><img src=\"../../tweets_media/1322510766432571393-ElqAh21XEAAL0AY.jpg\"></a></li><li><a href=\"../../tweets_media/1322510766432571393-ElqAh22XgAAvwiP.jpg\"><img src=\"../../tweets_media/1322510766432571393-ElqAh22XgAAvwiP.jpg\"></a></li><li><a href=\"../../tweets_media/1322510766432571393-ElqAh24XYAATn4C.jpg\"><img src=\"../../tweets_media/1322510766432571393-ElqAh24XYAATn4C.jpg\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Oct 26 13:01:01 +0000 2020",
    "id_str": "1320712034904907776",
    "full_text": "Speeding along towards the end of the 2020 series of pumpkin carves - and it’s been ... magical! #pumpkincarving <br><br>More carves: <a href=\"http://tanho.ca/pumpkins\">http://tanho.ca/pumpkins</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1320712034904907776-ElQcl2gX0AEsVEY.jpg\"><img src=\"../../tweets_media/1320712034904907776-ElQcl2gX0AEsVEY.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 22 15:19:31 +0000 2020",
    "id_str": "1319297338855260160",
    "full_text": "<a href=\"https://twitter.com/gredelsheimer\">@gredelsheimer</a> which is same as what <a href=\"https://twitter.com/deschainejc\">@deschainejc</a> got",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 19 12:33:00 +0000 2020",
    "id_str": "1318168268616597508",
    "full_text": "Pumpkins and #rstats? Hex yeah! Here's this week's addition to my 2020 collection of Pumpkin Carves - featuring an ode to the programming language and the fantastic community around it - a huge part of my life over the past few years!<br><br>More carves: <a href=\"http://tanho.ca/pumpkins\">http://tanho.ca/pumpkins</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1318168268616597508-Ekp-I5JW0AExBwk.jpg\"><img src=\"../../tweets_media/1318168268616597508-Ekp-I5JW0AExBwk.jpg\"></a></li><li><a href=\"../../tweets_media/1318168268616597508-Ekp-ThtX0AAqS-C.jpg\"><img src=\"../../tweets_media/1318168268616597508-Ekp-ThtX0AAqS-C.jpg\"></a></li><li><a href=\"../../tweets_media/1318168268616597508-Ekp-VrnW0Aw63Qq.jpg\"><img src=\"../../tweets_media/1318168268616597508-Ekp-VrnW0Aw63Qq.jpg\"></a></li></ul></div>",
    "favorite_count": "169",
    "retweet_count": "23"
  },
  {
    "created_at": "Fri Oct 16 20:35:20 +0000 2020",
    "id_str": "1317202490480332804",
    "full_text": "<a href=\"https://twitter.com/adrian_stats\">@adrian_stats</a> <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1317202490480332804-EkekrleWAAYl1Ga.mp4\"></video></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 12 12:33:11 +0000 2020",
    "id_str": "1315631601758474243",
    "full_text": "<a href=\"https://twitter.com/ChristianLohr9\">@ChristianLohr9</a> I did start on adding sleeper code to ffscrapr's dev version as part of this revamp, actually😎 (Rewrote all of CB to use ffscrapr, which was a big code quality improvement). <br><br>~ 6 more function methods to go to match where I have it for MFL!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 12 12:03:33 +0000 2020",
    "id_str": "1315624144457863170",
    "full_text": "Next up on my 2020 carving series: Darth Vader!  #pumpkincarving <br><br>This and other past carves are at <a href=\"http://tanho.ca/pumpkins\">http://tanho.ca/pumpkins</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1315624144457863170-EkIJLqHWoAABiGi.jpg\"><img src=\"../../tweets_media/1315624144457863170-EkIJLqHWoAABiGi.jpg\"></a></li><li><a href=\"../../tweets_media/1315624144457863170-EkIJLqHXsAI_C8e.jpg\"><img src=\"../../tweets_media/1315624144457863170-EkIJLqHXsAI_C8e.jpg\"></a></li><li><a href=\"../../tweets_media/1315624144457863170-EkIJLqHWoAISmDZ.jpg\"><img src=\"../../tweets_media/1315624144457863170-EkIJLqHWoAISmDZ.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 10 16:57:14 +0000 2020",
    "id_str": "1314973274367983617",
    "full_text": "The worst sadness is the sadness you've taught yourself to hide. To anyone (and especially men) struggling with their mental health:<br><br>It makes you no less of a man (or person)<br>Admitting your struggles is brave<br>You deserve to be here<br>You will persevere<br><br>#WorldMentalHealthDay",
    "favorite_count": "14",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Oct 09 16:23:16 +0000 2020",
    "id_str": "1314602339500789760",
    "full_text": "Obligatory reminder that ONLY looks at all-play records, so don't forget to take into account injury rates and COVID madness!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Oct 09 16:12:36 +0000 2020",
    "id_str": "1314599653850206209",
    "full_text": "Just finished revamping the DynastyProcess Crystal Ball App with more robust code - give it a spin here for MFL and Sleeper leagues! <a href=\"https://apps.dynastyprocess.com/crystalball\">https://apps.dynastyprocess.com/crystalball</a><br><br>CB uses all-play win percentages to predict season-ending win percentages based on the remaining games in the schedule! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1314599653850206209-Ej5lZ0pWAAA_Pyc.jpg\"><img src=\"../../tweets_media/1314599653850206209-Ej5lZ0pWAAA_Pyc.jpg\"></a></li></ul></div>",
    "favorite_count": "26",
    "retweet_count": "13"
  },
  {
    "created_at": "Mon Oct 05 14:13:21 +0000 2020",
    "id_str": "1313120094348873728",
    "full_text": "past carves: <a href=\"https://tanho.ca/pumpkins\">https://tanho.ca/pumpkins</a> <a href=\"./_TanHo/status/1313102768513703940\">https://twitter.com/_TanHo/status/1313102768513703940</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 05 13:04:30 +0000 2020",
    "id_str": "1313102768513703940",
    "full_text": "Taking up one of my favourite creative outlets this month: pumpkin carving! Planning a carve every week from now until Halloween. Here’s a rendition of one of my fav comics, <a href=\"https://twitter.com/nathanwpyle\">@nathanwpyle</a>’s Strange Planet! #pumpkincarving <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1313102768513703940-EjkUAEEWoAAJgta.jpg\"><img src=\"../../tweets_media/1313102768513703940-EjkUAEEWoAAJgta.jpg\"></a></li><li><a href=\"../../tweets_media/1313102768513703940-EjkUAECWkAEBuQS.jpg\"><img src=\"../../tweets_media/1313102768513703940-EjkUAECWkAEBuQS.jpg\"></a></li><li><a href=\"../../tweets_media/1313102768513703940-EjkUAL9XkAAv4DV.jpg\"><img src=\"../../tweets_media/1313102768513703940-EjkUAL9XkAAv4DV.jpg\"></a></li><li><a href=\"../../tweets_media/1313102768513703940-EjkUAMYXcAMJ9yA.jpg\"><img src=\"../../tweets_media/1313102768513703940-EjkUAMYXcAMJ9yA.jpg\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Oct 04 12:23:36 +0000 2020",
    "id_str": "1312730086274224128",
    "full_text": "As I’m setting lineups this morning, I’m considering the EV of the KC/NE player (~Mahomes, Hill, Kelce) *in addition to* the value of a bench MNF player (~Gage, MVS, Tonyan) I may have available to me, against my next best Sunday option. Currently thinking 66% chance KC/NE goes.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 29 17:07:09 +0000 2020",
    "id_str": "1310989505688752128",
    "full_text": "<a href=\"https://twitter.com/daniel_dulaney\">@daniel_dulaney</a> <a href=\"https://twitter.com/LizStats\">@LizStats</a> But yeah absolutely same feature!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 24 21:44:50 +0000 2020",
    "id_str": "1309247447798108160",
    "full_text": "Huge round of thanks to <a href=\"https://twitter.com/Mayacelium\">@Mayacelium</a> <a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> and all of the friends who made it such a wonderful experience!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 24 21:43:23 +0000 2020",
    "id_str": "1309247081354272768",
    "full_text": "This was an incredible experience and a solid anchor in my weekly schedule over quarantine. <br><br>I reflected on R things I learned over the 24 weeks here: <a href=\"https://r4ds.github.io/bookclub-Advanced_R/Presentations/Week25/Cohort1/Tan-TIL.html\">https://r4ds.github.io/bookclub-Advanced_R/Presentations/Week25/Cohort1/Tan-TIL.html</a><br><br>#rstats <a href=\"https://twitter.com/R4DScommunity/status/1309215162935767040\">https://twitter.com/R4DScommunity/status/1309215162935767040</a>",
    "favorite_count": "5",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Sep 22 14:02:08 +0000 2020",
    "id_str": "1308406228545081351",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> (I like the normalized-by-pass-att view too) Russ is f'ing cooking up there, holy crap <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1308406228545081351-EihkfW7WkAESX79.jpg\"><img src=\"../../tweets_media/1308406228545081351-EihkfW7WkAESX79.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 22 13:48:46 +0000 2020",
    "id_str": "1308402863102742528",
    "full_text": "Super proud to be pushing this EP app live! It's been an invaluable tool over course of the last season personally, and it now has a nice app to go with it. EP data (soon) to be up as a scheduled job on our open data repo as well. <a href=\"https://twitter.com/JoeSydlowskiFF/status/1308401961784442889\">https://twitter.com/JoeSydlowskiFF/status/1308401961784442889</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Sep 16 11:32:37 +0000 2020",
    "id_str": "1306194275571560448",
    "full_text": "<a href=\"https://twitter.com/FO_ASchatz\">@FO_ASchatz</a> <a href=\"https://twitter.com/PFF_Moo\">@PFF_Moo</a> <a href=\"https://twitter.com/friscojosh\">@friscojosh</a> e.g. optimise for 50+ yard FG range rather than consistency/accuracy at shorter distances?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 15 14:25:55 +0000 2020",
    "id_str": "1305875499571445760",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> <a href=\"https://gist.github.com/tanho63/f3152f3526fc804b3796a8e7e7dbdc9c\">https://gist.github.com/tanho63/f3152f3526fc804b3796a8e7e7dbdc9c</a><br><br>for future ref",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 15 14:07:19 +0000 2020",
    "id_str": "1305870815876055043",
    "full_text": "#SFBX stats<br>Unluckiest loss: <a href=\"https://twitter.com/AndrewHallFF\">@AndrewHallFF</a> (72 of 1440, 208.22 PF)<br>Luckiest win: <a href=\"https://twitter.com/FF_Hope\">@FF_Hope</a> (1352 of 1440, 114.96)<br>Median score: 159.75 <a href=\"https://twitter.com/ScottFish24/status/1305831193007607808\">https://twitter.com/ScottFish24/status/1305831193007607808</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Sep 14 15:09:32 +0000 2020",
    "id_str": "1305524088618782721",
    "full_text": "<a href=\"https://twitter.com/YardsPerGretch\">@YardsPerGretch</a> (You ungrateful sellout :P )",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 07 02:35:09 +0000 2023",
    "id_str": "1688378212538085376",
    "full_text": "Have you wanted an #nflverse hex sticker but never managed to run into me at a conference? <br><br>Here's an interest check for a print run of stickers: <a href=\"https://forms.gle/TGfcSsnBiHjJWeEP6\">https://forms.gle/TGfcSsnBiHjJWeEP6</a>",
    "favorite_count": "12",
    "retweet_count": "5"
  },
  {
    "created_at": "Thu Aug 03 14:10:14 +0000 2023",
    "id_str": "1687103587372195842",
    "full_text": "Issa me, Tanio! <a href=\"https://twitter.com/chrisalbon/status/1687101091232817152\">https://twitter.com/chrisalbon/status/1687101091232817152</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 29 19:51:02 +0000 2022",
    "id_str": "1586445523287887872",
    "full_text": "Sooo many Shiny apps 🤩🤩🤩 #cmsac22 #rstats",
    "favorite_count": "15",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Oct 29 14:15:56 +0000 2022",
    "id_str": "1586361193576292352",
    "full_text": "See pumpkin <br>Retweet pumpkin<br><br>I especially love the flamingo! <a href=\"https://twitter.com/JohnBoschFF/status/1586177526249844736\">https://twitter.com/JohnBoschFF/status/1586177526249844736</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 29 13:19:47 +0000 2022",
    "id_str": "1586347063448477697",
    "full_text": "Incredibly grateful to be back at #cmsac22 <a href=\"./_TanHo/status/1053269414810996738\">https://twitter.com/_TanHo/status/1053269414810996738</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1586347063448477697-FgPWOAOUUAEGVHb.jpg\"><img src=\"../../tweets_media/1586347063448477697-FgPWOAOUUAEGVHb.jpg\"></a></li><li><a href=\"../../tweets_media/1586347063448477697-FgPWOAPVIAAFRis.jpg\"><img src=\"../../tweets_media/1586347063448477697-FgPWOAPVIAAFRis.jpg\"></a></li></ul></div>",
    "favorite_count": "21",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 27 23:56:55 +0000 2022",
    "id_str": "1585782628258553856",
    "full_text": "<a href=\"https://twitter.com/gabbspalomo\">@gabbspalomo</a> (I blame <a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a>) but basically we have a slack bot that reads every main channel message and tries to makes sure we’ve helped them by checking the emojis. The thread indicator says “this is related to a different question and should not be tracked separately)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 27 23:17:50 +0000 2022",
    "id_str": "1585772792619962368",
    "full_text": "Going to #cmsac22 this weekend and bringing this haul of #nflverse stickers with me - if you want one, come find me and say hello! <br><br>(While supplies last, and I only got 150 😝) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1585772792619962368-FgHL8uQX0AUAZ0G.jpg\"><img src=\"../../tweets_media/1585772792619962368-FgHL8uQX0AUAZ0G.jpg\"></a></li></ul></div>",
    "favorite_count": "44",
    "retweet_count": "3"
  },
  {
    "created_at": "Mon Oct 24 16:41:44 +0000 2022",
    "id_str": "1584585948167557127",
    "full_text": "Normalize open hiring processes 👇<br><br>Also, Nick is a🐐 and this is a great opportunity! <a href=\"https://twitter.com/nickwan/status/1584573422394572801\">https://twitter.com/nickwan/status/1584573422394572801</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 12 13:35:38 +0000 2020",
    "id_str": "1304775679792349191",
    "full_text": "<a href=\"https://twitter.com/JeremyAbramson\">@JeremyAbramson</a> <a href=\"https://twitter.com/kevinobrienFF\">@kevinobrienFF</a> <a href=\"https://twitter.com/Stats_By_Matt\">@Stats_By_Matt</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> <a href=\"https://twitter.com/bldgrn03\">@bldgrn03</a> i.e. the \"NFL GUID\" in <a href=\"https://twitter.com/JeremyAbramson\">@JeremyAbramson</a>'s link doesn't match up with the one used in the pbp source that gets into here: <a href=\"https://github.com/guga31bb/nflfastR-data/raw/master/data/play_by_play_2020.csv.gz\">https://github.com/guga31bb/nflfastR-data/raw/master/data/play_by_play_2020.csv.gz</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 11 14:23:27 +0000 2020",
    "id_str": "1304425325296865287",
    "full_text": "<a href=\"https://twitter.com/Advantalytics\">@Advantalytics</a> <a href=\"https://twitter.com/prospectorbtc\">@prospectorbtc</a> Whoops, wrong team <a href=\"https://twitter.com/TomKislingbury/status/1304355857648562179?s=20\">https://twitter.com/TomKislingbury/status/1304355857648562179?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 11 14:17:14 +0000 2020",
    "id_str": "1304423762364956672",
    "full_text": "<a href=\"https://twitter.com/Advantalytics\">@Advantalytics</a> <a href=\"https://twitter.com/prospectorbtc\">@prospectorbtc</a> but like yknow you can read that the texans are signalling they like cobb enough to put him on the field now, let alone if either cooks/fuller miss time...or you can read that he's now a blocker who doesn't earn targets (lol). Too early to call but a signal to watch",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 11 14:13:35 +0000 2020",
    "id_str": "1304422844173037568",
    "full_text": "<a href=\"https://twitter.com/Advantalytics\">@Advantalytics</a> <a href=\"https://twitter.com/prospectorbtc\">@prospectorbtc</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1304422844173037568-Eho9qTWXgAEkwQv.png\"><img src=\"../../tweets_media/1304422844173037568-Eho9qTWXgAEkwQv.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 09 13:16:20 +0000 2020",
    "id_str": "1303683659090866176",
    "full_text": "<a href=\"https://twitter.com/CowboysStats\">@CowboysStats</a> I do really like the idea of an entirely machine-defined \"win or loss\", and think that defining it in player-tracking terms helps move to a more objective (and therefore accessible, reproducible) evaluation.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 09 13:10:18 +0000 2020",
    "id_str": "1303682142959009793",
    "full_text": "<a href=\"https://twitter.com/CowboysStats\">@CowboysStats</a> Which is to say that would have helped recenter the discussion on the definitions rather than on the player attack. I'm not critiquing them personally",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 09 00:11:12 +0000 2020",
    "id_str": "1303486076473020416",
    "full_text": "Amidst all of the brouhaha of the ESPN/Aaron Donald twitter fuss, this is the actual discussion point that we should be talking about - if we've already set all of Donald's player rating sliders to 99 and we had to set his run defense slider to 75, is this really that bad? <a href=\"https://twitter.com/JB_Long/status/1303378885384396800\">https://twitter.com/JB_Long/status/1303378885384396800</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 08 22:20:58 +0000 2020",
    "id_str": "1303458331638595585",
    "full_text": "Whoa. This went bigger than expected. Next question for the nerdsnipe: where is this documented? I’m drilling through rstudio and ace editor docs and nothing in source code mentions it...<br><br><a href=\"https://github.com/rstudio/rstudio/blob/bf728258a8061322641bfd5f2548723064f5ecc9/src/gwt/src/org/rstudio/studio/client/workbench/commands/Commands.cmd.xml#L600\">https://github.com/rstudio/rstudio/blob/bf728258a8061322641bfd5f2548723064f5ecc9/src/gwt/src/org/rstudio/studio/client/workbench/commands/Commands.cmd.xml#L600</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 08 12:08:32 +0000 2020",
    "id_str": "1303304208695930880",
    "full_text": "I was today years old when I discovered that Ctrl+Alt+K finds and selects all instances of the word under the cursor on the page in the <a href=\"https://twitter.com/rstudio\">@rstudio</a> IDE. (This is undocumented in the shortcuts page, for some reason!) #rstats <a href=\"https://twitter.com/rstudiotips\">@rstudiotips</a> <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1303304208695930880-EhZDrSfWoAk0mnv.jpg\"><img src=\"../../tweets_media/1303304208695930880-EhZDrSfWoAk0mnv.jpg\"></a></li></ul></div>",
    "favorite_count": "308",
    "retweet_count": "43"
  },
  {
    "created_at": "Wed Sep 02 14:40:33 +0000 2020",
    "id_str": "1301168137656823808",
    "full_text": "<a href=\"https://twitter.com/theFFengineer\">@theFFengineer</a> <a href=\"https://twitter.com/dan_rausch\">@dan_rausch</a> <a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> Still a little problematic for new players since they won't receive an old_gsis id (to my knowledge) so will need name-merged anyway",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 30 10:30:31 +0000 2020",
    "id_str": "1300018053695111169",
    "full_text": "Feeling seen this morning! <a href=\"https://twitter.com/gitlost/status/1300010385442050050\">https://twitter.com/gitlost/status/1300010385442050050</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Aug 28 01:54:37 +0000 2020",
    "id_str": "1299163447071039491",
    "full_text": "<a href=\"https://twitter.com/LeeSharpeNFL\">@LeeSharpeNFL</a> Where’s <a href=\"https://twitter.com/SeanfromSeabeck\">@SeanfromSeabeck</a>’s puntalytics when you need him tho",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 26 16:29:53 +0000 2020",
    "id_str": "1298658938125156352",
    "full_text": "Happy #InternationalDogDay, Jasper! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1298658938125156352-EgXDauJWsAEDn0H.jpg\"><img src=\"../../tweets_media/1298658938125156352-EgXDauJWsAEDn0H.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 24 21:34:19 +0000 2020",
    "id_str": "1298010776448401410",
    "full_text": "<a href=\"https://twitter.com/trainofk\">@trainofk</a> It’s a trade off for me: I like date stamped tweets for my own process. I lose competitive adv by posting. Oh well.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 20 21:52:08 +0000 2020",
    "id_str": "1296565706599944192",
    "full_text": "<a href=\"https://twitter.com/electronicks_ff\">@electronicks_ff</a> It’s a redistribution of the same players so the crossover is inevitable, the selection of inputs (scaling) does have an effect but the theory is the same regardless",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 20 21:03:01 +0000 2020",
    "id_str": "1296553349509152769",
    "full_text": "What a rookie pick is actually traded for could be anywhere between these two lines (or even higher or lower than the boundaries) - but it's an interesting thought process - are you confident in your ability and how much more confident are you?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 20 21:03:01 +0000 2020",
    "id_str": "1296553348062216193",
    "full_text": "Chris and Charles (for different reasons) think they can consistently beat ADP (ie value picks closer to the green line), while Jacob and Peter think that the hit rates are too hard to beat consistently (and value picks closer to the purple line).",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 20 21:03:01 +0000 2020",
    "id_str": "1296553347252723714",
    "full_text": "I've worked through this data/chart in the past: plot \"an average of Y1/Y2 dynasty ADP\" against \"rookie year ADP\" (in purple) and figure out the expected ADP for each rookie selection. I've also determined what \"perfect knowledge\" ADP would look like (in green).",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 20 21:03:01 +0000 2020",
    "id_str": "1296553345562415104",
    "full_text": "I'm intrigued by the ideas that have been brought up in this thread, by <a href=\"https://twitter.com/ChrisMoxley19\">@ChrisMoxley19</a>, <a href=\"https://twitter.com/ClutchFantasy\">@ClutchFantasy</a>, <a href=\"https://twitter.com/CharlesChillFFB\">@CharlesChillFFB</a>, <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> and others ... and have some thoughts to share: <a href=\"https://twitter.com/ChrisMoxley19/status/1296477266982195201\">https://twitter.com/ChrisMoxley19/status/1296477266982195201</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1296553345562415104-Ef5G4-cWkAE9wVJ.jpg\"><img src=\"../../tweets_media/1296553345562415104-Ef5G4-cWkAE9wVJ.jpg\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 19 13:27:19 +0000 2020",
    "id_str": "1296076281004658690",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> I've been curating my feed and it's about 50/50 now, to be honest",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 18 20:06:33 +0000 2020",
    "id_str": "1295814362582720512",
    "full_text": "<a href=\"https://twitter.com/_Dinkin_Flicka\">@_Dinkin_Flicka</a> <a href=\"https://twitter.com/Nathan_Pilmer\">@Nathan_Pilmer</a> <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> In the meantime, DynastyProcess already allows you to adjust for \"studs vs depth\", \"rookie optimism\", and \"future-pick-factor\" (ie how much future picks are worth relative to current-year-picks)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 18 20:05:44 +0000 2020",
    "id_str": "1295814156143210499",
    "full_text": "<a href=\"https://twitter.com/_Dinkin_Flicka\">@_Dinkin_Flicka</a> <a href=\"https://twitter.com/Nathan_Pilmer\">@Nathan_Pilmer</a> <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> (i.e. what you could receive in return) - so it's a little harder to get that rebuild-to-contend spectrum slider. I do have some ideas about a scoring/roster system adjuster for positional-based values, but have been working on a few other projects lately!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 18 13:18:32 +0000 2020",
    "id_str": "1295711682489090049",
    "full_text": "<a href=\"https://twitter.com/RekedFantasy\">@RekedFantasy</a> In other words, there’s an arg that Dallas regards them equally. I’m happy to buy the cheapest entrypoint to that offense",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 17 21:51:12 +0000 2020",
    "id_str": "1295478309434859521",
    "full_text": "<a href=\"https://twitter.com/theDudeZee\">@theDudeZee</a> And obviously anything I can do, let me know! I still feel that imposter syndrome all the time.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 17 19:04:35 +0000 2020",
    "id_str": "1295436379132960769",
    "full_text": "STILL IN SHOCK THAT THIS IS HAPPENINGGGGG #rstats #nflfastr WOOOOOOOOOOOOOOO <a href=\"https://twitter.com/CRANberriesFeed/status/1295405551447420929\">https://twitter.com/CRANberriesFeed/status/1295405551447420929</a>",
    "favorite_count": "30",
    "retweet_count": "3"
  },
  {
    "created_at": "Mon Aug 17 15:46:04 +0000 2020",
    "id_str": "1295386420778074114",
    "full_text": "Definitely something that isn't talked about enough! <a href=\"https://t.co/K4gZCpk3b9\">https://t.co/K4gZCpk3b9</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 15 03:04:38 +0000 2020",
    "id_str": "1294470023763894272",
    "full_text": "<a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> Turns out it's changed a little since I wrote that! Digging now.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 31 14:54:06 +0000 2020",
    "id_str": "1289212751181643780",
    "full_text": "Last day to enter. I challenge you to take my money! <a href=\"https://twitter.com/WeightlossFF/status/1287532402525560834\">https://twitter.com/WeightlossFF/status/1287532402525560834</a>",
    "favorite_count": "0",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Jul 29 17:39:08 +0000 2020",
    "id_str": "1288529504705687556",
    "full_text": "<a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a> <a href=\"https://twitter.com/CapnHuggyFace\">@CapnHuggyFace</a> (but probably should add DOBs at some point)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 28 15:13:16 +0000 2020",
    "id_str": "1288130408215969793",
    "full_text": "Let’s get after it! <a href=\"https://twitter.com/WeightlossFF/status/1287532402525560834\">https://twitter.com/WeightlossFF/status/1287532402525560834</a>",
    "favorite_count": "1",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Jul 27 19:48:48 +0000 2020",
    "id_str": "1287837363331366912",
    "full_text": "This series is still the first thing that comes to mind when I’m asked for a book recommendation <a href=\"https://twitter.com/WorkmanPub/status/1287821319871107074\">https://twitter.com/WorkmanPub/status/1287821319871107074</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jul 26 23:32:42 +0000 2020",
    "id_str": "1287531318818017281",
    "full_text": "Looking for someone in an <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> league with priority-based waivers (i.e. not blind-bid-waivers) - I'd like to add some handling for these in my new ffscrapr R package :)",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Oct 23 22:17:16 +0000 2022",
    "id_str": "1584307997349928960",
    "full_text": "Pumpkins episode three: \"Powerlift\" <br><br>Was a little out of it last weekend, but I've got a few more pumpkins to carve before Halloween! <a href=\"./_TanHo/status/1579449668236443648\">https://twitter.com/_TanHo/status/1579449668236443648</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1584307997349928960-FfyXc6iWIAA2coh.jpg\"><img src=\"../../tweets_media/1584307997349928960-FfyXc6iWIAA2coh.jpg\"></a></li></ul></div>",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 22 22:11:57 +0000 2022",
    "id_str": "1583944270901567492",
    "full_text": "You copied and pasted it from <a href=\"https://datatables.net/examples/api/counter_columns.html\">https://datatables.net/examples/api/counter_columns.html</a> <br>and the gist lives here: <a href=\"https://gist.github.com/tanho63/583e41486dcd341083f1602c5ff22fc6\">https://gist.github.com/tanho63/583e41486dcd341083f1602c5ff22fc6</a><br><br>You're welcome! <br>- Past Tan.",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 22 22:11:56 +0000 2022",
    "id_str": "1583944268288126976",
    "full_text": "Dear Future Tan: here's a snippet for an index column using #rstats DT pkg that renumbers when you sort or filter the table. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1583944268288126976-FftLw2HWIAAXnWZ.png\"><img src=\"../../tweets_media/1583944268288126976-FftLw2HWIAAXnWZ.png\"></a></li><li><a href=\"../../tweets_media/1583944268288126976-FftMJlPWIAAOzvK.jpg\"><img src=\"../../tweets_media/1583944268288126976-FftMJlPWIAAOzvK.jpg\"></a></li></ul></div>",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Oct 15 02:15:29 +0000 2022",
    "id_str": "1581106456908075009",
    "full_text": "<a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> GitHub ftw <a href=\"https://github.com/jeffreyrstevens/flashr\">https://github.com/jeffreyrstevens/flashr</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 25 18:14:34 +0000 2020",
    "id_str": "1287088869234610179",
    "full_text": "<a href=\"https://twitter.com/FBInjuryDoc\">@FBInjuryDoc</a> You’re welcome to play the game how you want, but soliciting feedback is how I understood your first tweet",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 25 15:31:23 +0000 2020",
    "id_str": "1287047804410617857",
    "full_text": "<a href=\"https://twitter.com/SeanfromSeabeck\">@SeanfromSeabeck</a> <a href=\"https://twitter.com/EdWithSports\">@EdWithSports</a> <a href=\"https://twitter.com/ZachFeldman3\">@ZachFeldman3</a> Also for more R nerdiness the <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a> slack is great!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 25 12:41:32 +0000 2020",
    "id_str": "1287005059956473856",
    "full_text": "I’m always stanning Canadian NFLers but I couldn’t be a bigger fan of this one. Fantastic player and an even better human. <a href=\"https://twitter.com/LaurentDTardif/status/1286839610727976965\">https://twitter.com/LaurentDTardif/status/1286839610727976965</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 24 22:09:59 +0000 2020",
    "id_str": "1286785728312225793",
    "full_text": "<a href=\"https://twitter.com/SeanfromSeabeck\">@SeanfromSeabeck</a> <a href=\"https://twitter.com/matthew_barlowe\">@matthew_barlowe</a> <a href=\"https://twitter.com/octonion\">@octonion</a> An always-on server can be very lightweight, and you can even (through AWS APIs) spin up a heavyweight machine via CLI and then kill it by CLI",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 24 20:27:29 +0000 2020",
    "id_str": "1286759931367108608",
    "full_text": "<a href=\"https://twitter.com/daattali\">@daattali</a> <a href=\"https://twitter.com/jimhester_\">@jimhester_</a> this seems like a relevant slide - supports docker + windows builds, more concurrent builds, longer jobs <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1286759931367108608-Edt9PwkWoAIGhQ8.png\"><img src=\"../../tweets_media/1286759931367108608-Edt9PwkWoAIGhQ8.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 21 12:16:08 +0000 2020",
    "id_str": "1285549117314404356",
    "full_text": "I also tweaked it a bit and have an app up for SFBX Satellites now: <a href=\"http://apps.dynastyprocess.com/sfb-satellite-sims/\">http://apps.dynastyprocess.com/sfb-satellite-sims/</a>",
    "favorite_count": "12",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Jul 21 12:16:08 +0000 2020",
    "id_str": "1285549116236476416",
    "full_text": "Good morning! ICYMI, I pushed out the first version of my #SFBX Sim Scores app - which finds comparisons for your team in both player and strategy selections<br><br><a href=\"./_TanHo/status/1285375757573861376?s=20\">https://twitter.com/_TanHo/status/1285375757573861376?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 21 00:48:41 +0000 2020",
    "id_str": "1285376113942855680",
    "full_text": "edit: and <a href=\"https://twitter.com/Josh_ADHD\">@Josh_ADHD</a> ! and more I've possibly forgotten",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 21 00:47:16 +0000 2020",
    "id_str": "1285375759197048833",
    "full_text": "This app and work wouldn't be possible without the fantastic work and ideas inspired by: <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a>, <a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a>, <a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a>, <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a>, and <a href=\"https://twitter.com/juliasilge\">@juliasilge</a> :)",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 21 00:47:16 +0000 2020",
    "id_str": "1285375757573861376",
    "full_text": "Pushing the beta version of my #SFBX similarity score app live! (Now working on explaining what's going on, in plain english!)<br><br>I'll work on adding more descriptive/helper text in the nearish future, but thought I'd celebrate deploying it with a tweet!<br><br><a href=\"https://apps.dynastyprocess.com/sfb-sims\">https://apps.dynastyprocess.com/sfb-sims</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1285375757573861376-EdaSbtfWoAMcvFM.png\"><img src=\"../../tweets_media/1285375757573861376-EdaSbtfWoAMcvFM.png\"></a></li></ul></div>",
    "favorite_count": "32",
    "retweet_count": "12"
  },
  {
    "created_at": "Fri Jul 17 01:50:11 +0000 2020",
    "id_str": "1283942039860719619",
    "full_text": "<a href=\"https://twitter.com/SWallace_FF\">@SWallace_FF</a> <a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> <a href=\"https://twitter.com/FFzinger\">@FFzinger</a> <a href=\"https://twitter.com/hjchami\">@hjchami</a> <a href=\"https://twitter.com/Rotobahn\">@Rotobahn</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> In the meantime, exploring how the hell hilal is not the most unique roster: these three have less \"good players in common with any other sfb franchise\" <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1283942039860719619-EdF6L7cWAAAvkgN.png\"><img src=\"../../tweets_media/1283942039860719619-EdF6L7cWAAAvkgN.png\"></a></li><li><a href=\"../../tweets_media/1283942039860719619-EdF6TGBXoAc234p.png\"><img src=\"../../tweets_media/1283942039860719619-EdF6TGBXoAc234p.png\"></a></li><li><a href=\"../../tweets_media/1283942039860719619-EdF6adMWAAE0zge.png\"><img src=\"../../tweets_media/1283942039860719619-EdF6adMWAAE0zge.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 17 01:45:15 +0000 2020",
    "id_str": "1283940798300598274",
    "full_text": "<a href=\"https://twitter.com/SWallace_FF\">@SWallace_FF</a> <a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> <a href=\"https://twitter.com/FFzinger\">@FFzinger</a> <a href=\"https://twitter.com/hjchami\">@hjchami</a> <a href=\"https://twitter.com/Rotobahn\">@Rotobahn</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> I'm in the middle of modelling, making an app, and doing some writeup on it. waiting for rest of sfb picks to wrap up and then will start publishing snippets!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 17 01:38:14 +0000 2020",
    "id_str": "1283939031831711744",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> <a href=\"https://twitter.com/FFzinger\">@FFzinger</a> <a href=\"https://twitter.com/hjchami\">@hjchami</a> <a href=\"https://twitter.com/Rotobahn\">@Rotobahn</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> You and <a href=\"https://twitter.com/SWallace_FF\">@SWallace_FF</a> are frens. but not that close frens - you're doing pretty good uniquewise! (scale goes from 0 - ~10ish) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1283939031831711744-EdF3i1YX0AAC1F6.png\"><img src=\"../../tweets_media/1283939031831711744-EdF3i1YX0AAC1F6.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 17 01:31:27 +0000 2020",
    "id_str": "1283937325794365440",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> <a href=\"https://twitter.com/hjchami\">@hjchami</a> And ... <a href=\"https://twitter.com/Rotobahn\">@Rotobahn</a> and <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> on the other end of the spectrum? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1283937325794365440-EdF2MTUWAAA3ne3.png\"><img src=\"../../tweets_media/1283937325794365440-EdF2MTUWAAA3ne3.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 17 01:30:27 +0000 2020",
    "id_str": "1283937073892925443",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> I'm blown away that <a href=\"https://twitter.com/hjchami\">@hjchami</a> is NOT at the top of the \"most ridiculously unique\" <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1283937073892925443-EdF19FZWoAEL0oH.png\"><img src=\"../../tweets_media/1283937073892925443-EdF19FZWoAEL0oH.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 17 01:21:22 +0000 2020",
    "id_str": "1283934786093031424",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> [...quantifying...] <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1283934786093031424-EdFz4VWXsAEV85g.png\"><img src=\"../../tweets_media/1283934786093031424-EdFz4VWXsAEV85g.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 15 19:09:32 +0000 2020",
    "id_str": "1283478824475336709",
    "full_text": "<a href=\"https://twitter.com/KevinColePFF/status/1283477399016034306?s=20\">https://twitter.com/KevinColePFF/status/1283477399016034306?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 15 19:09:09 +0000 2020",
    "id_str": "1283478730497810432",
    "full_text": "Me: wonders if PFF is under attack with <a href=\"https://twitter.com/PFF_Moo\">@PFF_Moo</a> and <a href=\"https://twitter.com/KevinColePFF\">@KevinColePFF</a> as hostages...",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 15 17:16:22 +0000 2020",
    "id_str": "1283450345432272896",
    "full_text": "<a href=\"https://twitter.com/TheRealAdam_H\">@TheRealAdam_H</a> <a href=\"https://twitter.com/Advantalytics\">@Advantalytics</a> <a href=\"https://twitter.com/KrisPWales\">@KrisPWales</a> <a href=\"https://twitter.com/TheUndroppables\">@TheUndroppables</a> <a href=\"https://twitter.com/TheFFchamps\">@TheFFchamps</a> YAC+YAC/tgt being sticky suggests that you can make some conclusions about whether that player is a good receiver *when they DO get targets*. <br><br>I would not use it in a projection of fantasy points but that doesn't mean it's not interesting and useful",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 15 14:04:10 +0000 2020",
    "id_str": "1283401976475275264",
    "full_text": "<a href=\"https://twitter.com/Advantalytics\">@Advantalytics</a> <a href=\"https://twitter.com/TheRealAdam_H\">@TheRealAdam_H</a> <a href=\"https://twitter.com/KrisPWales\">@KrisPWales</a> <a href=\"https://twitter.com/TheUndroppables\">@TheUndroppables</a> <a href=\"https://twitter.com/TheFFchamps\">@TheFFchamps</a> Actually, rereading the axis - it's definitely not per target :P so confounding volume with efficiency here imo. <br><br>I wonder if YAC/tgt could be used to explain some of the residuals from a linear reg on targets to PPG",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 13 18:50:22 +0000 2020",
    "id_str": "1282749224430505987",
    "full_text": "Excited to give these a spin soon! <a href=\"https://twitter.com/posit_pbc/status/1282746023060832257\">https://twitter.com/posit_pbc/status/1282746023060832257</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 13 15:58:21 +0000 2020",
    "id_str": "1282705935723618306",
    "full_text": "A sneak peek at some #sfbx research I've been working on: we've seen \"sim scores based on player similarity\" - what about \"structural/strategic similarity\"? (A more detailed thread in the next few days as more drafts finish up!) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1282705935723618306-Ec0VvqTWkAAI_DO.png\"><img src=\"../../tweets_media/1282705935723618306-Ec0VvqTWkAAI_DO.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Jul 11 22:19:06 +0000 2020",
    "id_str": "1282076979437735937",
    "full_text": "<a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> (Will probably thread this into a bigger thread once I refine it some more)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 11 22:18:17 +0000 2020",
    "id_str": "1282076776034959360",
    "full_text": "<a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> Working on a PCA model on it now - preliminary results say that punting your receivers for RBs is the number one way to divide #SFBX strategies into two clusters <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1282076776034959360-EcraCDKWsAA9-HG.jpg\"><img src=\"../../tweets_media/1282076776034959360-EcraCDKWsAA9-HG.jpg\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 08 14:14:11 +0000 2020",
    "id_str": "1280867783992057856",
    "full_text": "Also went through \"practical applications of S3\" by looking at my new ffscrapr package! <a href=\"https://github.com/dynastyprocess/ffscrapr\">https://github.com/dynastyprocess/ffscrapr</a> <a href=\"https://twitter.com/R4DScommunity/status/1280865535371198464\">https://twitter.com/R4DScommunity/status/1280865535371198464</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 08 03:16:09 +0000 2020",
    "id_str": "1280702182363410434",
    "full_text": "<a href=\"https://twitter.com/TJHernandez\">@TJHernandez</a> <a href=\"https://twitter.com/Josh_ADHD\">@Josh_ADHD</a> Found him! <a href=\"https://twitter.com/themick23\">@themick23</a> you were so close to doing dat TEx5 start!!! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1280702182363410434-EcX3wx7WoAAeQBl.png\"><img src=\"../../tweets_media/1280702182363410434-EcX3wx7WoAAeQBl.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 06 17:49:09 +0000 2020",
    "id_str": "1280197107157262337",
    "full_text": "Pretty impressed with the work in my province that went into identifying this as an issue and solving it with policy. Forcing \"life-changing course decisions\" at grade nine is definitely a potential source of biases!<br><br><a href=\"https://twitter.com/TorontoStar/status/1280096768651296768?s=20\">https://twitter.com/TorontoStar/status/1280096768651296768?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jul 01 22:25:27 +0000 2020",
    "id_str": "1278454697251221505",
    "full_text": "We should be madder about this than whether R or Python is better for data sci. <a href=\"https://twitter.com/daveyalba/status/1278424152785981441\">https://twitter.com/daveyalba/status/1278424152785981441</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 01 20:49:35 +0000 2020",
    "id_str": "1278430572151558144",
    "full_text": "Happy to help if you get stuck :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 29 14:31:12 +0000 2020",
    "id_str": "1277610572662571012",
    "full_text": "<a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> I've used the BFG to fix this before :) <a href=\"https://rtyley.github.io/bfg-repo-cleaner/\">https://rtyley.github.io/bfg-repo-cleaner/</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 29 02:26:30 +0000 2020",
    "id_str": "1277428196154257411",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> Also 🦂",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jun 28 22:11:11 +0000 2020",
    "id_str": "1277363946656235528",
    "full_text": "Possibly of interest to fans of <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> <a href=\"https://twitter.com/nflscrapR\">@nflscrapR</a> <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> ?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jun 28 22:08:18 +0000 2020",
    "id_str": "1277363220853002245",
    "full_text": "Here's a snippet of what I've been working on lately: an #rstats package for connecting to fantasy football APIs! <br><br><a href=\"https://github.com/DynastyProcess/ffscrapr\">https://github.com/DynastyProcess/ffscrapr</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1277363220853002245-Eboa_tMXgAApr1f.jpg\"><img src=\"../../tweets_media/1277363220853002245-Eboa_tMXgAApr1f.jpg\"></a></li></ul></div>",
    "favorite_count": "80",
    "retweet_count": "15"
  },
  {
    "created_at": "Sat Jun 27 02:06:33 +0000 2020",
    "id_str": "1276698400680009730",
    "full_text": "<a href=\"https://twitter.com/ZachFeldman3\">@ZachFeldman3</a> <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> In Joe's defense, this is career rushing YPC to date since ~2000, so it did end up being quite interesting :P Mike Vick and Jamaal Charles stand out",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 17 11:51:47 +0000 2020",
    "id_str": "1273221803498967043",
    "full_text": "A fascinating thread on the evolution of internet folklore! <a href=\"https://twitter.com/byrnesong/status/1273040654831058944\">https://twitter.com/byrnesong/status/1273040654831058944</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 10 14:41:35 +0000 2020",
    "id_str": "1270727820172460033",
    "full_text": "Last year's exercise: <a href=\"./_TanHo/status/1122145217048719363?s=20\">https://twitter.com/_TanHo/status/1122145217048719363?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 10 14:39:45 +0000 2020",
    "id_str": "1270727358237024257",
    "full_text": "A lot has happened since I posted this, but I wanted to follow up (mostly for my own future benefit) with my post-draft thoughts. Obvi, some of this has changed since April 30: I re-run this exercise before tackling rookie drafts based on league/team contexts and with fresh eyes <a href=\"./_TanHo/status/1252961853317267456\">https://twitter.com/_TanHo/status/1252961853317267456</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1270727358237024257-EaKHcOvVAAAzNwq.png\"><img src=\"../../tweets_media/1270727358237024257-EaKHcOvVAAAzNwq.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 08 04:54:32 +0000 2020",
    "id_str": "1269855308362526720",
    "full_text": "Community-based policing can’t be considered far fetched if it’s already happened successfully: <a href=\"https://twitter.com/grace_panetta/status/1269746982345682944?s=21\">https://twitter.com/grace_panetta/status/1269746982345682944?s=21</a> <a href=\"https://twitter.com/grace_panetta/status/1269746982345682944\">https://twitter.com/grace_panetta/status/1269746982345682944</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Oct 14 20:06:42 +0000 2022",
    "id_str": "1581013649782886402",
    "full_text": "Ooh, this looks interesting! <a href=\"https://twitter.com/psolymos/status/1580950871092830208\">https://twitter.com/psolymos/status/1580950871092830208</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Oct 14 18:30:20 +0000 2022",
    "id_str": "1580989396379402240",
    "full_text": "<a href=\"https://twitter.com/wessonmo\">@wessonmo</a> <a href=\"https://twitter.com/benj_robinson\">@benj_robinson</a> <a href=\"https://twitter.com/friscojosh\">@friscojosh</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> <a href=\"https://twitter.com/SethWalder\">@SethWalder</a> <a href=\"https://twitter.com/schwartzsteins\">@schwartzsteins</a> I’m not sure if you’ve any input but this looks like a really small change",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Oct 14 17:03:22 +0000 2022",
    "id_str": "1580967511205416960",
    "full_text": "This is 100% the way we need to communicate data science and analytics, both for NFL and in broader applications elsewhere. <br><br>Shouting that \"the math says do X\" is not enough and invites \"blaming\" the math. If we want to actually improve processes, share and communicate whys <a href=\"https://twitter.com/WhatsWrightShow/status/1580703924545363972\">https://twitter.com/WhatsWrightShow/status/1580703924545363972</a>",
    "favorite_count": "52",
    "retweet_count": "4"
  },
  {
    "created_at": "Sat Jun 06 13:48:14 +0000 2020",
    "id_str": "1269264839324639233",
    "full_text": "Incredibly moving to see: risking your career to do what’s right, and using every ounce of influence you can gather. <br><br><a href=\"https://twitter.com/jourdanrodrigue/status/1269122235928907777?s=21\">https://twitter.com/jourdanrodrigue/status/1269122235928907777?s=21</a> <a href=\"https://twitter.com/JourdanRodrigue/status/1269122235928907777\">https://twitter.com/JourdanRodrigue/status/1269122235928907777</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jun 05 12:07:59 +0000 2020",
    "id_str": "1268877223483920390",
    "full_text": "Hadn’t heard of Axios before now but this is a really clearly written summary of policies <a href=\"https://twitter.com/stefwkight/status/1268865748178546692?s=21\">https://twitter.com/stefwkight/status/1268865748178546692?s=21</a> <a href=\"https://twitter.com/StefWKight/status/1268865748178546692\">https://twitter.com/StefWKight/status/1268865748178546692</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 04 14:36:05 +0000 2020",
    "id_str": "1268552106367234056",
    "full_text": "<a href=\"https://twitter.com/CharlesChillFFB\">@CharlesChillFFB</a> Dissly as more than a preferred lotto ticket is a little crazy though",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 01 16:08:53 +0000 2020",
    "id_str": "1267488297703653378",
    "full_text": "Obama, (of course), also has incredibly wise words: <a href=\"https://twitter.com/BarackObama/status/1267459874788646912?s=20\">https://twitter.com/BarackObama/status/1267459874788646912?s=20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 01 16:07:33 +0000 2020",
    "id_str": "1267487959621799936",
    "full_text": "Trying to keep track of good threads on this:<br><br><a href=\"https://twitter.com/trussleadership/status/1267333391604527104?s=20\">https://twitter.com/trussleadership/status/1267333391604527104?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 01 16:06:52 +0000 2020",
    "id_str": "1267487791308390402",
    "full_text": "Been doing a lot of listening, reflecting, and thinking w/r/t protests and riots against racism and police brutality, and supporting friends who are out there.<br><br>Also thinking about how we change things for the better next week, month, and year - is a marathon not a sprint.",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 31 16:19:21 +0000 2020",
    "id_str": "1267128543072395264",
    "full_text": "<a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> <a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a> I'm working on building out an R package for the API, but that's probably not helpful yet",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 31 16:16:37 +0000 2020",
    "id_str": "1267127856544481280",
    "full_text": "<a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> IIRC you're a python guy - <a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a> just did this for his rookie adp and auction data scripts",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 29 20:06:52 +0000 2020",
    "id_str": "1266461022984065024",
    "full_text": "Ack, it's me doing live code! <a href=\"https://twitter.com/R4DScommunity/status/1266459186042474504\">https://twitter.com/R4DScommunity/status/1266459186042474504</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 27 18:10:10 +0000 2020",
    "id_str": "1265706879679946754",
    "full_text": "Celebrating a milestone today at 2^10 followers 😎 <br><br>Thank you all for the ideas, conversations, and inspiration - and keep being awesome!",
    "favorite_count": "13",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 27 15:15:52 +0000 2020",
    "id_str": "1265663013903884288",
    "full_text": "<a href=\"https://twitter.com/nflfastR\">@nflfastR</a> Also, should consider arrow’s parquet files instead of gzipped csvs - it’s smaller than RDS, faster to read/write, and compatible for both R and Python!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 22 11:34:11 +0000 2020",
    "id_str": "1263795286004162560",
    "full_text": "<a href=\"https://twitter.com/KLykins25\">@KLykins25</a> <a href=\"https://dynastyprocess.com/values\">https://dynastyprocess.com/values</a><br><br><a href=\"https://dynastyprocess.com/values/2019pickvalues/\">https://dynastyprocess.com/values/2019pickvalues/</a><br><br><a href=\"https://medium.com/dynastyfftools/major-changes-the-good-the-bad-and-the-awesome-or-the-ugly-5c3f19459f8e\">https://medium.com/dynastyfftools/major-changes-the-good-the-bad-and-the-awesome-or-the-ugly-5c3f19459f8e</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu May 21 19:19:11 +0000 2020",
    "id_str": "1263549920658829314",
    "full_text": "<a href=\"https://twitter.com/FFLegionDan\">@FFLegionDan</a> Currently my dev hobby energies are on developing a unified R API client for all of the FF platforms (tentatively nicknamed fantasyscrapR) <a href=\"https://github.com/DynastyProcess/fantasyscrapr\">https://github.com/DynastyProcess/fantasyscrapr</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu May 21 19:18:03 +0000 2020",
    "id_str": "1263549635743879169",
    "full_text": "<a href=\"https://twitter.com/FFLegionDan\">@FFLegionDan</a> <a href=\"https://github.com/DynastyProcess/data/tree/master/files\">https://github.com/DynastyProcess/data/tree/master/files</a><br>as seen here",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 08 03:15:56 +0000 2020",
    "id_str": "1258596468136566785",
    "full_text": "<a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> I can't say that I agree with the extra step - I already pipe in data, but I would do ggplot(aes(x=x,y=y)) for concision. If I needed to \"explore\" a different global aes I'd just comment out that line and add a new ggplot(aes(x,y)) below it",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 06 16:13:30 +0000 2020",
    "id_str": "1258067376064602112",
    "full_text": "<a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a> <a href=\"https://twitter.com/dan_rausch\">@dan_rausch</a> <a href=\"https://twitter.com/nflscrapR\">@nflscrapR</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> <a href=\"https://twitter.com/dan_rausch\">@dan_rausch</a> did you check my new db_playerids.csv again? It should actually have IDP!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 06 16:09:49 +0000 2020",
    "id_str": "1258066448934735876",
    "full_text": "<a href=\"https://twitter.com/CaioBrighenti\">@CaioBrighenti</a> Hmm, on second glance, arbitrary shape is probably not the right word. could probably drop it",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 06 11:28:53 +0000 2020",
    "id_str": "1257995746760183808",
    "full_text": "Watch me wander onto an IDP pod for the first time and...take offensive players?! (I did take two defensive ones!) <a href=\"https://twitter.com/TomKislingbury/status/1257927332129628162\">https://twitter.com/TomKislingbury/status/1257927332129628162</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed May 06 03:21:38 +0000 2020",
    "id_str": "1257873128711229440",
    "full_text": "<a href=\"https://twitter.com/ZachFeldman3\">@ZachFeldman3</a> Actually pretty legit tho!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 04 14:56:47 +0000 2020",
    "id_str": "1257323292169363456",
    "full_text": "<a href=\"https://twitter.com/JaredWackerlyFF\">@JaredWackerlyFF</a> <a href=\"https://twitter.com/McNamaraDynasty\">@McNamaraDynasty</a> I've found it much easier of late to write a script in R and then use an R package like googlesheets4 to write a fresh copy of data into a specified Google Sheet",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Apr 28 12:44:48 +0000 2020",
    "id_str": "1255115751926661122",
    "full_text": "A revamped desktop UI based on this back-end is also in the plans and should be available in the near future. Thank you all for being a continued inspiration and support - I wouldn't be where I am today without you all. <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1255115751926661122-EWsRHKOXsAE-UC6.mp4\"></video></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Apr 28 12:44:44 +0000 2020",
    "id_str": "1255115734503559170",
    "full_text": "Some new features we're stoked about: <br>- re-trained superflex and rookie valuation models<br>- a rebuilt and (hopefully) more robust back-end updating system<br>- progressive web app abilities (save the app to your home screen!)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Apr 28 12:44:44 +0000 2020",
    "id_str": "1255115733387935745",
    "full_text": "A couple of immense servings of gratitude:<br>- <a href=\"https://twitter.com/divadnojnarg\">@divadnojnarg</a> and <a href=\"https://twitter.com/jdatap\">@jdatap</a> for the shinyMobile and mobileCharts packages, which were crucial for the UI!<br>- <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> for his long-suffering support of my ridiculous questions<br>- FantasyPros for continuing to be a fantastic resource",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Apr 28 12:44:43 +0000 2020",
    "id_str": "1255115730548330496",
    "full_text": "A brand new <a href=\"https://twitter.com/DynastyProcess\">@DynastyProcess</a> Trade Calculator has appeared! We've been hard at work on a mobile-first trade calculator app, and it's finally ready for showtime (complete with post-draft rookies and ranks!) <br><a href=\"https://apps.dynastyprocess.com/calculator\">https://apps.dynastyprocess.com/calculator</a> <div class=\"gallery\"><ul><li><video controls src=\"../../tweets_media/1255115730548330496-befJZ693t-HWeSZm.mp4?tag=10\"></video></li></ul></div>",
    "favorite_count": "14",
    "retweet_count": "7"
  },
  {
    "created_at": "Mon Apr 27 19:11:25 +0000 2020",
    "id_str": "1254850657682690050",
    "full_text": "Congrats to Connor S for winning my 2020 NFL Draft Contest! He narrowly edged out <a href=\"https://twitter.com/ShanePHallam\">@ShanePHallam</a> (avoiding the Zack Moss landmine) and wins a year's sub to <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> 🌟 In total, we raised $168.55 towards the CanadaHelps COVID Community Care Fund 😎 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1254850657682690050-EWogBU4WAAE69oR.png\"><img src=\"../../tweets_media/1254850657682690050-EWogBU4WAAE69oR.png\"></a></li><li><a href=\"../../tweets_media/1254850657682690050-EWogBU5XkAEvAaN.png\"><img src=\"../../tweets_media/1254850657682690050-EWogBU5XkAEvAaN.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Apr 25 18:58:58 +0000 2020",
    "id_str": "1254122748013694979",
    "full_text": "<a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a> it's freaking draft season",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Apr 22 14:05:59 +0000 2020",
    "id_str": "1252961853317267456",
    "full_text": "An annual exercise I like to do is quantify my pre-draft rookie thoughts. It's been an odd offseason thus far with everything going on, so these are \"medium takes held weakly\". <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1252961853317267456-EWNqKeOXkAAiXSh.png\"><img src=\"../../tweets_media/1252961853317267456-EWNqKeOXkAAiXSh.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Apr 22 13:09:59 +0000 2020",
    "id_str": "1252947761445638144",
    "full_text": "Just a reminder that you want to enter this! $5 to charity + a year of DLF as the prize :) <a href=\"./_TanHo/status/1251141455088844801\">https://twitter.com/_TanHo/status/1251141455088844801</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 17 13:32:22 +0000 2020",
    "id_str": "1251141455088844801",
    "full_text": "Hi all! I'm running an NFL Draft contest - it's a $5 donation-entry-fee and the prize is a year of <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> Premium! Can you pick the QBs, RBs, WRs, and TEs in the top 64 of the NFL Draft? <a href=\"https://data.dynastyleaguefootball.com/draft-contest-2020\">https://data.dynastyleaguefootball.com/draft-contest-2020</a>",
    "favorite_count": "11",
    "retweet_count": "13"
  },
  {
    "created_at": "Tue Apr 07 20:39:55 +0000 2020",
    "id_str": "1247625170371698689",
    "full_text": "<a href=\"https://twitter.com/hrbrmstr\">@hrbrmstr</a> Seems ambitious to me...",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Apr 07 12:06:42 +0000 2020",
    "id_str": "1247496015772606464",
    "full_text": "<a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> I'm watching this closely but don't speak any Korean so I can't tell you what's going on here :P Looks like you get sample data, submit R code to analyze that data and the researchers return the outputs of that code to you (for data sanitization purposes)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 03 16:55:37 +0000 2020",
    "id_str": "1246119173870288899",
    "full_text": "<a href=\"https://twitter.com/dgkeyes\">@dgkeyes</a> [secured apps, specifically]",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 29 20:52:59 +0000 2020",
    "id_str": "1244366969547218944",
    "full_text": "<a href=\"https://twitter.com/JesseReevesFF\">@JesseReevesFF</a> 3700x is definitely close to top of the line but I’d trade some of the money spent on that with getting a better GPU if video editing is what you’re after",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 23 21:53:49 +0000 2020",
    "id_str": "1242207951517081609",
    "full_text": "(May be of interest to football historians like <a href=\"https://twitter.com/bradoremland\">@bradoremland</a>, <a href=\"https://twitter.com/fbgchase\">@fbgchase</a>, <a href=\"https://twitter.com/LaverneusDingle\">@LaverneusDingle</a> )",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 23 21:52:56 +0000 2020",
    "id_str": "1242207728338165765",
    "full_text": "Historical NFL trivia of the day (courtesy of <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> ): <br><br>Which former 6th round draft pick has an Olympic medal; held out his rookie year; got cut, claimed, and traded the next day; is a five time Pro-Bowler, and made an NFL all-decade team?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Mar 19 20:01:46 +0000 2020",
    "id_str": "1240730203388817409",
    "full_text": "Imagine the furor if the Rams had traded Gurley for Hopkins",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 13 02:14:27 +0000 2022",
    "id_str": "1580381422606393344",
    "full_text": "Unbelievably stoked to see this take shape! <a href=\"https://twitter.com/gwstagg/status/1580214763673776131\">https://twitter.com/gwstagg/status/1580214763673776131</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 11 03:17:52 +0000 2022",
    "id_str": "1579672603199156224",
    "full_text": "<a href=\"https://twitter.com/schwartzsteins\">@schwartzsteins</a> i can't see math model giving enough advantage by getting it that you increase aggressive playcalling gametheorywise from the other team",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 11 01:56:11 +0000 2022",
    "id_str": "1579652047313719296",
    "full_text": "<a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> tagged you in discord code snippet",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 10 12:32:00 +0000 2022",
    "id_str": "1579449668236443648",
    "full_text": "Pumpkins episode two: skiing! <a href=\"./_TanHo/status/1577263216773992455\">https://twitter.com/_TanHo/status/1577263216773992455</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1579449668236443648-FerL1i8WYAEBsHr.jpg\"><img src=\"../../tweets_media/1579449668236443648-FerL1i8WYAEBsHr.jpg\"></a></li></ul></div>",
    "favorite_count": "15",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Mar 16 22:13:31 +0000 2020",
    "id_str": "1239676195706490880",
    "full_text": "I first stumbled on this piece on depression and ADHD a few years ago and it really hit home. Still does. If you want to chat, I’m here for you too ❤️ <a href=\"https://twitter.com/AdamHarstad/status/1239655778312687618\">https://twitter.com/AdamHarstad/status/1239655778312687618</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Mar 12 14:05:00 +0000 2020",
    "id_str": "1238103702524829697",
    "full_text": "Struggled for A G E S with uploading to Sharepoint/OneDrive/Graph API from R and *finally* managed it with the AzureGraph + httr packages - gist here: <a href=\"https://gist.github.com/tanho63/a9965e5c9c8ef99cb2d8cd4d58fc0040\">https://gist.github.com/tanho63/a9965e5c9c8ef99cb2d8cd4d58fc0040</a><br><br>(reading <a href=\"https://twitter.com/JennyBryan\">@JennyBryan</a>'s googledrive upload helped!) <br>#rstats",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Mar 12 03:32:16 +0000 2020",
    "id_str": "1237944469707767808",
    "full_text": "<a href=\"https://twitter.com/andyestridge\">@andyestridge</a> Which is to say, just push it out!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 09 13:06:23 +0000 2020",
    "id_str": "1237001788605284354",
    "full_text": "Always good for a Monday morning laugh. Most of my swearing is on private repos so it'll probably never it make it onhere...thankfully. <a href=\"https://twitter.com/gitlost/status/1236998683415150595\">https://twitter.com/gitlost/status/1236998683415150595</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 02 23:51:06 +0000 2020",
    "id_str": "1234627323992956935",
    "full_text": "<a href=\"https://twitter.com/Statholesports\">@Statholesports</a> <a href=\"https://twitter.com/ChiefsAnalytics\">@ChiefsAnalytics</a> <a href=\"https://twitter.com/bburkeESPN\">@bburkeESPN</a> <a href=\"https://twitter.com/friscojosh\">@friscojosh</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> <a href=\"https://twitter.com/WMoneyball\">@WMoneyball</a> <a href=\"https://twitter.com/SethWalder\">@SethWalder</a> <a href=\"https://twitter.com/AdamHarstad\">@AdamHarstad</a> (Clarify: you’re saying the narrative is false).",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Feb 28 17:12:06 +0000 2020",
    "id_str": "1233439745537122308",
    "full_text": "<a href=\"https://twitter.com/benj_robinson\">@benj_robinson</a> I’d be happy to help you with that if you like :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Feb 18 19:36:11 +0000 2020",
    "id_str": "1229852127327137793",
    "full_text": "This is fascinating! <a href=\"https://twitter.com/TechCrunch/status/1229820643455225858\">https://twitter.com/TechCrunch/status/1229820643455225858</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Feb 11 02:09:14 +0000 2020",
    "id_str": "1227051940334440451",
    "full_text": "Yay birthdates! <a href=\"https://twitter.com/nflscrapR/status/1227042014782509056\">https://twitter.com/nflscrapR/status/1227042014782509056</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Feb 04 21:23:29 +0000 2020",
    "id_str": "1224805702658600965",
    "full_text": "Fell out of my chair laughing when I found this gem by <a href=\"https://twitter.com/jcheng\">@jcheng</a>. I'm not tons further ahead on my query (does observeEvent throw away loaded data that isn't saved to a reactiveVal?) but I did make myself the center of attention at the office! #rstats #rshiny <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1224805702658600965-EP9iS2TWkAICJ_J.png\"><img src=\"../../tweets_media/1224805702658600965-EP9iS2TWkAICJ_J.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Jan 27 15:07:36 +0000 2020",
    "id_str": "1221812004702359552",
    "full_text": "Made my first ever R package this past weekend! I forked <a href=\"https://twitter.com/jhollist\">@jhollist</a>'s dadjoke package and added <a href=\"https://twitter.com/MatChilling\">@MatChilling</a>'s Chuck Norris API 🤠<a href=\"http://github.com/tanho63/jokeR\">http://github.com/tanho63/jokeR</a> #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1221812004702359552-EPS_iqYW4AAzsqh.png\"><img src=\"../../tweets_media/1221812004702359552-EPS_iqYW4AAzsqh.png\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Jan 24 01:24:50 +0000 2020",
    "id_str": "1220517784037314561",
    "full_text": "<a href=\"https://twitter.com/nirobi03\">@nirobi03</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> Also the clear winner? Mister Big Chest himself.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jan 24 01:24:08 +0000 2020",
    "id_str": "1220517609306828800",
    "full_text": "<a href=\"https://twitter.com/nirobi03\">@nirobi03</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> (Continued) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1220517609306828800-EPAmS5SXsAEP-jY.jpg\"><img src=\"../../tweets_media/1220517609306828800-EPAmS5SXsAEP-jY.jpg\"></a></li><li><a href=\"../../tweets_media/1220517609306828800-EPAmS5RWAAMeRdv.jpg\"><img src=\"../../tweets_media/1220517609306828800-EPAmS5RWAAMeRdv.jpg\"></a></li><li><a href=\"../../tweets_media/1220517609306828800-EPAmS50WkAAxuCT.jpg\"><img src=\"../../tweets_media/1220517609306828800-EPAmS50WkAAxuCT.jpg\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jan 11 14:54:51 +0000 2020",
    "id_str": "1216010588893208582",
    "full_text": "<a href=\"https://twitter.com/Roto_Wan\">@Roto_Wan</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> <a href=\"https://twitter.com/MatHouchens\">@MatHouchens</a> <a href=\"https://github.com/tanho63/dynastyprocess-apps/blob/dev/scripts/rselenium-pgatour.R\">https://github.com/tanho63/dynastyprocess-apps/blob/dev/scripts/rselenium-pgatour.R</a><br><br>Decided to save it to GitHub for my own reference, so I'll flip y'all the link anyway :)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Dec 23 21:49:58 +0000 2019",
    "id_str": "1209229685747539968",
    "full_text": "<a href=\"https://twitter.com/ETurnerFF_PT\">@ETurnerFF_PT</a> <a href=\"https://twitter.com/FF_RyanB\">@FF_RyanB</a> <a href=\"https://twitter.com/FFzinger\">@FFzinger</a> <a href=\"https://twitter.com/RekedFantasy\">@RekedFantasy</a> I think that’s a very valuable takeaway! Probably a better take home note than “always avoid injured players except for x y z caveats”",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 18 21:57:44 +0000 2019",
    "id_str": "1207419700491280384",
    "full_text": "<a href=\"https://twitter.com/RekedFantasy\">@RekedFantasy</a> <a href=\"https://twitter.com/dibari22\">@dibari22</a> <a href=\"https://twitter.com/LopsidedTrades\">@LopsidedTrades</a> #slaytonsquad",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Nov 06 17:05:48 +0000 2019",
    "id_str": "1192125945106354176",
    "full_text": "<a href=\"https://twitter.com/nflscrapR\">@nflscrapR</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> Server might be too weak to run an NFLScrapR scrape each and every time someone wants to see a box score. Will look at rebuilding from cached nflscrapR data tonight :)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Nov 06 17:01:47 +0000 2019",
    "id_str": "1192124935478624257",
    "full_text": "<a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> Hugged to death. Will poke again at lunch!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Nov 06 16:44:41 +0000 2019",
    "id_str": "1192120629350293504",
    "full_text": "Very initial version now up at <a href=\"http://apps.dynastyprocess.com/baldwinplot\">http://apps.dynastyprocess.com/baldwinplot</a>, <br>h/t <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> - I also updated the NFLScrapR package but didn't poke at the plot code to make sure it was compatible. <a href=\"./_TanHo/status/1192115412525301761\">https://twitter.com/_TanHo/status/1192115412525301761</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Nov 02 01:50:07 +0000 2019",
    "id_str": "1190445954362740736",
    "full_text": "Stumbled on a player shares page and decided to look at my own - some notables across nine leagues (dyno+redraft):<br>- 5/9: Marvin Jones, Waller<br>- 4/9: Brissett, Emmanuel Sanders, Slayton, Jonnu, Akins<br>- 3/9: Kyler, CMC, DJM, Kittle, (and quite a few more!)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 14 11:25:33 +0000 2019",
    "id_str": "1183705395514228736",
    "full_text": "I’m incredibly grateful to the dynasty, FF, and analytics communities– an endless source of challenges to solve and brilliant minds to follow. I’m looking forward to contributing more as my skills and experience continue to grow!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 14 11:25:32 +0000 2019",
    "id_str": "1183705394625089536",
    "full_text": "Wanted to especially thank <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> for all of his support, friendship, and pushing me into learning R. Our DynastyProcess project has quite literally changed my life - I wouldn't have discovered how much I love data and dev without having these projects to play with.",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 14 11:25:32 +0000 2019",
    "id_str": "1183705393677119488",
    "full_text": "Counting my blessings this (Canadian) Thanksgiving with a bit of personal news: I'm starting a new career as a data analyst/dev with Caivan Communities tomorrow! Excited (and nervous) to be making the full-time leap into data [a tiny bit of imposter syndrome] but I'm doing it!",
    "favorite_count": "20",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 01 11:46:29 +0000 2019",
    "id_str": "1178999624922742784",
    "full_text": "Continuing on a little bit of a productivity streak: I made an ESPN Potential Points Calculator app! This helps you calculate potential points for draft-order purposes. Give it a whirl here: <a href=\"https://apps.dynastyprocess.com/potentialpoints\">https://apps.dynastyprocess.com/potentialpoints</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1178999624922742784-EFyl6LpXoAA1QBa.png\"><img src=\"../../tweets_media/1178999624922742784-EFyl6LpXoAA1QBa.png\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Sep 24 16:07:39 +0000 2019",
    "id_str": "1176528630933086208",
    "full_text": "<a href=\"https://twitter.com/Adamtz\">@Adamtz</a> <a href=\"https://twitter.com/TomDegenerate\">@TomDegenerate</a> <a href=\"https://twitter.com/IDPwithBEE\">@IDPwithBEE</a> <a href=\"https://twitter.com/IDPSharks\">@IDPSharks</a> <a href=\"https://twitter.com/BreezeIDP\">@BreezeIDP</a> <a href=\"https://twitter.com/BigBoardIDP\">@BigBoardIDP</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 24 16:06:58 +0000 2019",
    "id_str": "1176528460241612806",
    "full_text": "Hey #FFIDP crowd- looking for someone running an ESPN IDP league - DM me!",
    "favorite_count": "1",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Sep 24 11:37:00 +0000 2019",
    "id_str": "1176460520062218241",
    "full_text": "The DynastyProcess Crystal Ball can see the future in more leagues now! Just added <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> authentication and ESPN support! The Crystal Ball is also 50% smarter than last week now that week 3 is in the books! 😎 <a href=\"https://apps.dynastyprocess.com/crystalball\">https://apps.dynastyprocess.com/crystalball</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1176460520062218241-EFM-8owWwAEvRc_.png\"><img src=\"../../tweets_media/1176460520062218241-EFM-8owWwAEvRc_.png\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Sep 20 13:28:37 +0000 2019",
    "id_str": "1175039057044418560",
    "full_text": "Corey Davis is polarizing. Seeing buy recs right now, which makes me think there’s a sell opp - people are anchored on their prospect eval of CD and still might pay ~ a 1st in value! I’d sell for ~2+? right now. He’s Titans WR1 but others more productive over next 2y for price",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 08 22:24:50 +0000 2022",
    "id_str": "1578874082896277505",
    "full_text": "will retweet pumpkin content 🎃 <a href=\"https://twitter.com/BrettLuskin/status/1578814095247437824\">https://twitter.com/BrettLuskin/status/1578814095247437824</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Oct 05 11:34:05 +0000 2022",
    "id_str": "1577623154029199366",
    "full_text": "Hey Siri: how can I send threatening emails to 4745 people so they bully one guy into doing that thing I asked him for last week?",
    "favorite_count": "19",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 04 13:44:01 +0000 2022",
    "id_str": "1577293463728668675",
    "full_text": "my feed: a hot mess of R stuff, nfl stuff, and for one month of the year...pumpkins! 😎 <a href=\"https://twitter.com/JonTheGeek/status/1577287772028616704\">https://twitter.com/JonTheGeek/status/1577287772028616704</a>",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 04 13:15:07 +0000 2022",
    "id_str": "1577286193883979776",
    "full_text": "<a href=\"https://twitter.com/antoine_fabri\">@antoine_fabri</a> (format your stop message to taste, obvi)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 19 11:36:00 +0000 2019",
    "id_str": "1174648329067798536",
    "full_text": "Was overwhelmed with the positive response that this got yesterday! I was inspired to finish off the code so that this could support <a href=\"https://twitter.com/SleeperHQ\">@SleeperHQ</a> leagues! <br><br>Let the rebuilds begin :)<br><br><a href=\"https://apps.dynastyprocess.com/crystalball\">https://apps.dynastyprocess.com/crystalball</a> <a href=\"./_TanHo/status/1174291967477501953\">https://twitter.com/_TanHo/status/1174291967477501953</a>",
    "favorite_count": "27",
    "retweet_count": "7"
  },
  {
    "created_at": "Wed Sep 18 11:59:56 +0000 2019",
    "id_str": "1174291967477501953",
    "full_text": "Is it time to blow up your dynasty team? Here's a fun little MFL app that predicts how your remaining games on the schedule will go! <br><br>#overreactionSZN<br><br><a href=\"https://apps.dynastyprocess.com/crystalball\">https://apps.dynastyprocess.com/crystalball</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1174291967477501953-EEvsP-6WkAA0jQU.png\"><img src=\"../../tweets_media/1174291967477501953-EEvsP-6WkAA0jQU.png\"></a></li><li><a href=\"../../tweets_media/1174291967477501953-EEvsRUFXoAIkmTr.png\"><img src=\"../../tweets_media/1174291967477501953-EEvsRUFXoAIkmTr.png\"></a></li></ul></div>",
    "favorite_count": "54",
    "retweet_count": "15"
  },
  {
    "created_at": "Tue Sep 17 14:23:27 +0000 2019",
    "id_str": "1173965696625192961",
    "full_text": "Interesting bits from the #SFB9 leaderboard after two weeks:<br>- <a href=\"https://twitter.com/ExplosiveOutput\">@ExplosiveOutput</a> has won two games despite only putting up an average of 153 points<br>- <a href=\"https://twitter.com/Fantasy_Mansion\">@Fantasy_Mansion</a> has lost two games despite putting up an average of 228 points",
    "favorite_count": "9",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Sep 15 21:36:42 +0000 2019",
    "id_str": "1173349951444852741",
    "full_text": "The #FFIDP tilt of owning Cam Jordan and watching this shit is new. I'm not sure I like it. ARGHHH",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 07 21:03:11 +0000 2019",
    "id_str": "1170442411342028800",
    "full_text": "Pat McAfee is prophetic. <a href=\"https://twitter.com/PatMcAfeeShow/status/1170363659215953921\">https://twitter.com/PatMcAfeeShow/status/1170363659215953921</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 07 13:29:10 +0000 2019",
    "id_str": "1170328155225243649",
    "full_text": "Hm, I need to figure out what people will pay me in order to take on this AB drama...",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 07 01:37:41 +0000 2019",
    "id_str": "1170149103231283200",
    "full_text": "Your chart of expected ruyards crosses 4 expected yards at about the 5 ytg line where mine seem to reach it at about the 15 yard line. Just curious if there's any assumptions I might be making or missing! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1170149103231283200-ED00aBiWwAANOIW.png\"><img src=\"../../tweets_media/1170149103231283200-ED00aBiWwAANOIW.png\"></a></li><li><a href=\"../../tweets_media/1170149103231283200-ED00aBjWwAADq3O.png\"><img src=\"../../tweets_media/1170149103231283200-ED00aBjWwAADq3O.png\"></a></li><li><a href=\"../../tweets_media/1170149103231283200-ED00aBkXkAEWQJh.png\"><img src=\"../../tweets_media/1170149103231283200-ED00aBkXkAEWQJh.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 07 01:37:39 +0000 2019",
    "id_str": "1170149096566472705",
    "full_text": "Hey <a href=\"https://twitter.com/KevinColePFF\">@KevinColePFF</a> :) looking to replicate your work on rushing expected points (<a href=\"https://predictivefootball.com/week-2-expected-fantasy-points-rushing-and-receiving/\">https://predictivefootball.com/week-2-expected-fantasy-points-rushing-and-receiving/</a>) and I'm coming up with some pretty different results...wanted to see where I might be diverging from your process:",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 06 18:03:04 +0000 2019",
    "id_str": "1170034698464239616",
    "full_text": "Am one of said OCs :) (thanks Joe <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a>) <a href=\"https://twitter.com/OklahomieDoug/status/1170006215667126272\">https://twitter.com/OklahomieDoug/status/1170006215667126272</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 06 01:55:30 +0000 2019",
    "id_str": "1169791199500279808",
    "full_text": "An oddly satisfying feeling to sit up and cheer when hearing Akiem Hicks' name. First ever #FFIDP points!",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 06 00:26:18 +0000 2019",
    "id_str": "1169768750985502720",
    "full_text": "NFL season kicks off with #EstablishTheRun. Nothing’s changed in a hundred years ¯\\_(ツ)_/¯",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 04 20:27:52 +0000 2019",
    "id_str": "1169346362854584320",
    "full_text": "#SFB9 waivers just ran at 1pm - some #JacobyBrissettFacts:<br><br>75 of 100 leagues bid exactly $100 for him...and yet somehow <a href=\"https://twitter.com/GeorgeKurtz\">@GeorgeKurtz</a> managed to snag him for $22! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1169346362854584320-EDpaUYSWwAIrLMf.png\"><img src=\"../../tweets_media/1169346362854584320-EDpaUYSWwAIrLMf.png\"></a></li><li><a href=\"../../tweets_media/1169346362854584320-EDpaUYSWkAAa0Xi.png\"><img src=\"../../tweets_media/1169346362854584320-EDpaUYSWkAAa0Xi.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Sep 04 01:50:39 +0000 2019",
    "id_str": "1169065202035249152",
    "full_text": "A reason to explore sell options for Harry: there are people who are (somewhat) anchored on his talent/prospect profile. <br><br>If the balance of probabilities says he has a decent chance of missing the year entirely, it changes his probability of career success. Sell opp! <a href=\"https://twitter.com/pahowdy/status/1168949203143467010\">https://twitter.com/pahowdy/status/1168949203143467010</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 27 16:04:45 +0000 2019",
    "id_str": "1166381043907276801",
    "full_text": "Love this analysis by NextGenStats!!! <a href=\"https://twitter.com/NextGenStats/status/1166114903695867904\">https://twitter.com/NextGenStats/status/1166114903695867904</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 27 02:57:33 +0000 2019",
    "id_str": "1166182936321957890",
    "full_text": "It’ll be interesting to see how coaches (on smart teams) use challenges now - a DPI often has a really large yardage gain! <a href=\"https://twitter.com/footballzebras/status/1166057756320837632\">https://twitter.com/footballzebras/status/1166057756320837632</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 21 18:07:02 +0000 2019",
    "id_str": "1164237490200428546",
    "full_text": "Added ~500 relevant undrafted players to this PFR-IDs.csv -&gt; \"relevant\" = min total of 5AV between 2010-19. Sadly, couldn't find a nice page to scrape, so no college-IDs or positions for those players, but...you could build a loop with the IDs to get that? <a href=\"https://github.com/tanho63/dynastyprocess/blob/master/files/workbooks/PFR%20IDs.csv\">https://github.com/tanho63/dynastyprocess/blob/master/files/workbooks/PFR%20IDs.csv</a> <a href=\"https://twitter.com/friscojosh/status/1164229501154258944\">https://twitter.com/friscojosh/status/1164229501154258944</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 21 00:44:17 +0000 2019",
    "id_str": "1163975071624507393",
    "full_text": "<a href=\"https://twitter.com/TomDegenerate\">@TomDegenerate</a> followup question - what are the average snaps per player for first and second years? how many players make up each sample? is it that a few rookies are playing a ton and a lot of second years playing a little?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 18 15:02:51 +0000 2019",
    "id_str": "1163103973047451648",
    "full_text": "<a href=\"https://twitter.com/TylerGheeNFL\">@TylerGheeNFL</a> <a href=\"https://twitter.com/RekedFantasy\">@RekedFantasy</a> <a href=\"https://twitter.com/FFzinger\">@FFzinger</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/amazehayes_\">@amazehayes_</a> One day there’ll be open data from NextGenStat, right <a href=\"https://twitter.com/StatsbyLopez\">@StatsbyLopez</a> ?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 17 17:14:02 +0000 2019",
    "id_str": "1162774597718224896",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/kawhilawnerd\">@kawhilawnerd</a> <a href=\"https://twitter.com/JakeAndersonFF\">@JakeAndersonFF</a> <a href=\"https://twitter.com/rotoworld\">@rotoworld</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> Ah, forgot to go back to January. This looks more like what I expected. Still a massive leap! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1162774597718224896-ECMBVVQX4AAqamX.png\"><img src=\"../../tweets_media/1162774597718224896-ECMBVVQX4AAqamX.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 17 17:09:46 +0000 2019",
    "id_str": "1162773527096901632",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/kawhilawnerd\">@kawhilawnerd</a> <a href=\"https://twitter.com/JakeAndersonFF\">@JakeAndersonFF</a> <a href=\"https://twitter.com/rotoworld\">@rotoworld</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> You can also compare redraft to dynasty values and trends by using the ECR app at <a href=\"https://apps.dynastyprocess.com/ecr\">https://apps.dynastyprocess.com/ecr</a><br><br>... surprisingly, Godwin is valued similar/higher in redraft than dynasty?! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1162773527096901632-ECMAXAbWsAo0V1P.jpg\"><img src=\"../../tweets_media/1162773527096901632-ECMAXAbWsAo0V1P.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 12 15:39:17 +0000 2019",
    "id_str": "1160938816909316096",
    "full_text": "<a href=\"https://twitter.com/mattbarrows\">@mattbarrows</a> <a href=\"https://twitter.com/Alex_Kozora\">@Alex_Kozora</a> Titans - <a href=\"https://twitter.com/FF_TravisM\">@FF_TravisM</a> (who I did not realize moonlighted as a beat writer/camp analyst when not writing for Rotoviz!) breaks down things as of Aug 12 (also some quality snap-count stats!!) <a href=\"https://twitter.com/FF_TravisM/status/1160930714667421696?s=20\">https://twitter.com/FF_TravisM/status/1160930714667421696?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 11 18:45:46 +0000 2019",
    "id_str": "1160623358314262535",
    "full_text": "Disorienting seeing 92 bend the corner like that again for the Steelers...here's hoping Adeniyi keeps getting better (and finishes the play like Deebo would!) <a href=\"https://twitter.com/AllThingsTBbucs/status/1159973508203634688\">https://twitter.com/AllThingsTBbucs/status/1159973508203634688</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 08 15:39:22 +0000 2019",
    "id_str": "1159489285000765440",
    "full_text": "You can aim to cover the uncertainty by selling Duke for an RB/WR with a more clearly defined role in the same valuation space as White/Cohen, or you can buy and gamble. White/Cohen currently floating in the 2019 midlate-1st range, might be able to get it done for 2020 2 + ?",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 08 15:39:22 +0000 2019",
    "id_str": "1159489283754999808",
    "full_text": "Every major transaction is an opportunity to both sell and buy! Best-case scenario for Duke is a James White ceiling (confident receiving role, can step into three-down role with injury), worst-case is Duke 2018 (streaky flex play behind a three-down back).",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Aug 07 19:42:32 +0000 2019",
    "id_str": "1159188090835148802",
    "full_text": "Career mode improvements? What's next, Madden Franchise Mode?! <a href=\"https://twitter.com/CoreySA/status/1159102349815832576\">https://twitter.com/CoreySA/status/1159102349815832576</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1159188090835148802-EBZDapUX4AAr7cd.jpg\"><img src=\"../../tweets_media/1159188090835148802-EBZDapUX4AAr7cd.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:58:59 +0000 2019",
    "id_str": "1159131835177361408",
    "full_text": "<a href=\"https://twitter.com/mattbarrows\">@mattbarrows</a> Steelers - <a href=\"https://twitter.com/Alex_Kozora\">@Alex_Kozora</a> with training camp stats! <a href=\"https://steelersdepot.com/2019/08/2019-steelers-training-camp-stats-first-nine-practices/\">https://steelersdepot.com/2019/08/2019-steelers-training-camp-stats-first-nine-practices/</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:08 +0000 2019",
    "id_str": "1159131368598724609",
    "full_text": "49ers - <a href=\"https://twitter.com/mattbarrows\">@mattbarrows</a> as of Aug 7 - <a href=\"https://theathletic.com/1121967/2019/08/07/whos-in-the-lead-a-position-by-position-breakdown-of-the-49ers-first-official-preseason-depth-chart/\">https://theathletic.com/1121967/2019/08/07/whos-in-the-lead-a-position-by-position-breakdown-of-the-49ers-first-official-preseason-depth-chart/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:08 +0000 2019",
    "id_str": "1159131367290089472",
    "full_text": "Saints - <a href=\"https://twitter.com/JeffDuncan_\">@JeffDuncan_</a> as of Aug 2 - <a href=\"https://theathletic.com/1113147/2019/08/02/analyzing-the-saints-depth-chart-a-week-into-training-camp/\">https://theathletic.com/1113147/2019/08/02/analyzing-the-saints-depth-chart-a-week-into-training-camp/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:07 +0000 2019",
    "id_str": "1159131365926981632",
    "full_text": "Redskins - <a href=\"https://twitter.com/BenStandig\">@BenStandig</a> as of Aug 6 - <a href=\"https://theathletic.com/1119876/2019/08/06/jay-gruden-unplugged-redskins-coach-exclusively-talks-trent-williams-depth-chart-camp-standouts/\">https://theathletic.com/1119876/2019/08/06/jay-gruden-unplugged-redskins-coach-exclusively-talks-trent-williams-depth-chart-camp-standouts/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:07 +0000 2019",
    "id_str": "1159131364677115904",
    "full_text": "Cowboys - <a href=\"https://twitter.com/jonmachota\">@jonmachota</a> as of Aug 7 - <a href=\"https://theathletic.com/1122552/2019/08/07/53-man-projection-cowboys-roster-starting-to-take-shape-ahead-of-first-preseason-game/\">https://theathletic.com/1122552/2019/08/07/53-man-projection-cowboys-roster-starting-to-take-shape-ahead-of-first-preseason-game/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:07 +0000 2019",
    "id_str": "1159131363389444096",
    "full_text": "Titans - <a href=\"https://twitter.com/johnglennon\">@johnglennon</a> as of Aug 5 - <a href=\"https://theathletic.com/1119045/2019/08/05/titans-depth-chart-analysis-three-receiver-set-battle-at-right-guard-and-where-are-the-rookies/\">https://theathletic.com/1119045/2019/08/05/titans-depth-chart-analysis-three-receiver-set-battle-at-right-guard-and-where-are-the-rookies/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:06 +0000 2019",
    "id_str": "1159131361980162049",
    "full_text": "Steelers - <a href=\"https://twitter.com/MarkKaboly\">@MarkKaboly</a> as of Aug 5 - <a href=\"https://theathletic.com/1114599/2019/08/05/hey-kaboly-how-does-insert-player-look-up-at-steelers-training-camp-so-far/\">https://theathletic.com/1114599/2019/08/05/hey-kaboly-how-does-insert-player-look-up-at-steelers-training-camp-so-far/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:06 +0000 2019",
    "id_str": "1159131360658956296",
    "full_text": "Browns - <a href=\"https://twitter.com/AkronJackson\">@AkronJackson</a> as of Aug 6 - <a href=\"https://theathletic.com/1121279/2019/08/06/depth-chart-detective-work-which-browns-players-are-worth-watching-thursday/\">https://theathletic.com/1121279/2019/08/06/depth-chart-detective-work-which-browns-players-are-worth-watching-thursday/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:06 +0000 2019",
    "id_str": "1159131359388078081",
    "full_text": "Bills - <a href=\"https://twitter.com/JoeBuscaglia\">@JoeBuscaglia</a> as of July 29 - <a href=\"https://theathletic.com/1104285/2019/07/29/through-four-days-of-bills-camp-thoughts-and-analysis-on-all-91-players/\">https://theathletic.com/1104285/2019/07/29/through-four-days-of-bills-camp-thoughts-and-analysis-on-all-91-players/</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:06 +0000 2019",
    "id_str": "1159131358045900801",
    "full_text": "Lots of these are coming from <a href=\"https://twitter.com/TheAthletic\">@TheAthletic</a> ($) mostly because they've done quite a job of recruiting the best beat writers. They aren't definitive by any stretch, but I like leveraging the eyes of people watching the team every day.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Aug 07 15:57:05 +0000 2019",
    "id_str": "1159131356770832385",
    "full_text": "A thread archiving full-roster reviews from training camp. I find these useful for my bottom-of-roster churning (especially IDP), less useful for top-end guys. Goal is to be quick in picking up potential hits and slow to let go of higher-invested players.",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Aug 02 13:15:06 +0000 2019",
    "id_str": "1157278652540903424",
    "full_text": "<a href=\"https://twitter.com/Advantalytics\">@Advantalytics</a> <a href=\"https://twitter.com/Josh_ADHD\">@Josh_ADHD</a> that's filtering for first-three-round RBs",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 31 16:21:01 +0000 2019",
    "id_str": "1156600661947105281",
    "full_text": "Especially love this note which encapsulates my entire #SFB9 strategy! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1156600661947105281-EA0SKyMW4AAvuvl.png\"><img src=\"../../tweets_media/1156600661947105281-EA0SKyMW4AAvuvl.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jul 31 16:20:52 +0000 2019",
    "id_str": "1156600626878603265",
    "full_text": "This is fantastic stuff on redraft 2019 RBs from <a href=\"https://twitter.com/YardsPerGretch\">@YardsPerGretch</a> <a href=\"https://twitter.com/YardsPerGretch/status/1156596145545592833\">https://twitter.com/YardsPerGretch/status/1156596145545592833</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 26 16:25:59 +0000 2019",
    "id_str": "1154789973847138305",
    "full_text": "<a href=\"https://twitter.com/brit_devine\">@brit_devine</a> because this isn't common, it's very difficult to judge what that price should be - and mistakes will ruin a league's competition. so safer for the long-term health of a league not to do this",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 26 16:25:10 +0000 2019",
    "id_str": "1154789767067910145",
    "full_text": "<a href=\"https://twitter.com/brit_devine\">@brit_devine</a> e.g. if Julio can be loaned for a 3rd round pick, that may unbalance the win-now environment of the league. if he's loaned for a 1+2, long term the team gaining the picks will have an advantage over the league.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 26 16:22:30 +0000 2019",
    "id_str": "1154789097115967488",
    "full_text": "<a href=\"https://twitter.com/brit_devine\">@brit_devine</a> The tricky part of this is that because no one else is doing this in the dynasty community, owners are not very good at pricing what the loan move is worth - and as a result the league can get out of balance very quickly if the deal is over/underpriced",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 26 00:43:56 +0000 2019",
    "id_str": "1154552899290058752",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> I like this idea for sure though, I'd be interested in seeing a \"tgts per route run\" for each adot range and then calculating the expected tgts based on the number of snaps played and adot of each player",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 26 00:42:21 +0000 2019",
    "id_str": "1154552499522719744",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> I suspect it's because there are more players to dilute the sample in the short-mid depth range, while there are fewer deep specialists",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 26 00:41:10 +0000 2019",
    "id_str": "1154552203991846912",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> Averaging more targets the deeper the adot feels wrong given what we've seen of the typical distribution of targets based on depth (cc <a href=\"http://airyards.com\">http://airyards.com</a>) - there should be far more targets going around at short-mid depths than deep <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1154552203991846912-EAXLHCaXoAEdDAC.png\"><img src=\"../../tweets_media/1154552203991846912-EAXLHCaXoAEdDAC.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 24 20:30:44 +0000 2019",
    "id_str": "1154126792975945728",
    "full_text": "<a href=\"https://twitter.com/2345Jonte\">@2345Jonte</a> <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> <a href=\"https://twitter.com/FantasyADHD\">@FantasyADHD</a> Update: it’s because your iPhone will automatically suspend the page the moment you stop looking at it in order to save battery - nothing I can do on dev side <a href=\"https://community.rstudio.com/t/shiny-disconnects-from-server-when-moving-away-from-browser-app-on-mobile-devices/20720/2\">https://community.rstudio.com/t/shiny-disconnects-from-server-when-moving-away-from-browser-app-on-mobile-devices/20720/2</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 24 01:51:00 +0000 2019",
    "id_str": "1153845000410550272",
    "full_text": "This has been one of Joe's pet projects since the beginning of our app adventures together and I'm so proud of the work we've put in to get here! Check out weekly player trends in both dynasty and redraft, and find your win-now and rebuild targets :) <a href=\"https://apps.dynastyprocess.com/ecr\">https://apps.dynastyprocess.com/ecr</a> <a href=\"https://twitter.com/JoeSydlowskiFF/status/1153840046325272576\">https://twitter.com/JoeSydlowskiFF/status/1153840046325272576</a>",
    "favorite_count": "4",
    "retweet_count": "3"
  },
  {
    "created_at": "Wed Jul 17 19:54:41 +0000 2019",
    "id_str": "1151581006614474753",
    "full_text": "Really interesting to see the diversity of strategies!",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 17 19:54:41 +0000 2019",
    "id_str": "1151581003485458432",
    "full_text": "Zero-TE: <a href=\"https://twitter.com/hrr5010\">@hrr5010</a> nearly forgot to grab a TE, snagging Uzomah in round 22. He also went zero-RB, having gone with 7 top-36 WRs (including 3 top-12) to go with two QBs. He's got slightly better options at RB and should be able to piece early startable weeks from Rojo &amp; the SF duo <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1151581003485458432-D_s80RXX4AA936B.png\"><img src=\"../../tweets_media/1151581003485458432-D_s80RXX4AA936B.png\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 17 19:54:39 +0000 2019",
    "id_str": "1151580995017150464",
    "full_text": "Zero-WR: <a href=\"https://twitter.com/KarlSafchick\">@KarlSafchick</a> grabs two RB1s, two QB1s, and two TE1s, along with five other RBs before starting on WRs. Stills/Sanders are decent bets for leading their teams in targets, but starting three WRs every week will be a tiny bit difficult right now... <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1151580995017150464-D_s8zy-XYAAf-9m.png\"><img src=\"../../tweets_media/1151580995017150464-D_s8zy-XYAAf-9m.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 17 19:54:37 +0000 2019",
    "id_str": "1151580987354165249",
    "full_text": "Zero-RB: <a href=\"https://twitter.com/CDCarter13\">@CDCarter13</a>'s 4xWR start lands him with (nearly) four WR1s along with a top six TE and three startable QBs. RBs will need a bit of injury luck to get truly startable weeks, although McCoy/AP/Lewis could be serviceable early? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1151580987354165249-D_s8zVKWwAE3M-v.png\"><img src=\"../../tweets_media/1151580987354165249-D_s8zVKWwAE3M-v.png\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 17 19:54:35 +0000 2019",
    "id_str": "1151580980253274112",
    "full_text": "Zero-QB: <a href=\"https://twitter.com/realbobbyadcock\">@realbobbyadcock</a> unseated <a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a> as the winner of QB chicken, waiting til round 14(!) to roll Haskins/Flacco/Eli/Keenum and landing eight of the top36 RB/WRs. I'm just amazed Haskins/Flacco were still there - I'd have taken an extra QB just to deny any starters <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1151580980253274112-D_s8y_AX4AEEgSO.png\"><img src=\"../../tweets_media/1151580980253274112-D_s8y_AX4AEEgSO.png\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Jul 17 19:54:33 +0000 2019",
    "id_str": "1151580973127143426",
    "full_text": "Thread: a quick peek at the most-extreme #SFB9 teams so far... (shoutout to <a href=\"https://twitter.com/FantasyADHD\">@FantasyADHD</a> for the app!)",
    "favorite_count": "15",
    "retweet_count": "7"
  },
  {
    "created_at": "Tue Jul 16 12:04:56 +0000 2019",
    "id_str": "1151100398293389312",
    "full_text": "Sal is an A+++ person 🤓 <a href=\"https://twitter.com/SalPal2/status/1150859528772059136\">https://twitter.com/SalPal2/status/1150859528772059136</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 13 02:29:39 +0000 2019",
    "id_str": "1149868462942183424",
    "full_text": "<a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a> <a href=\"https://github.com/tanho63/dynastyprocess/blob/master/files/workbooks/sfb-pickdata.xlsx\">https://github.com/tanho63/dynastyprocess/blob/master/files/workbooks/sfb-pickdata.xlsx</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 11 14:06:28 +0000 2019",
    "id_str": "1149319046766190592",
    "full_text": "Ngl watching <a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a> play QB chicken is entertaining AF - am only imagining his rage when discovering that <a href=\"https://twitter.com/StillRyanFive\">@StillRyanFive</a> has set the bar at exactly 11.02 - meaning in order to win, Chris needs to wait til 12.11 🤯😂",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 06 20:58:13 +0000 2019",
    "id_str": "1147610726204432385",
    "full_text": "This is fascinating! <a href=\"https://twitter.com/btrossler/status/1147179293056872448\">https://twitter.com/btrossler/status/1147179293056872448</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 02 03:35:42 +0000 2019",
    "id_str": "1145898815456722944",
    "full_text": "Love how Drew's sharing his process here! <a href=\"https://twitter.com/DFBeanCounter/status/1145897643010400256\">https://twitter.com/DFBeanCounter/status/1145897643010400256</a>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Jul 02 02:01:59 +0000 2019",
    "id_str": "1145875233150291968",
    "full_text": "<a href=\"https://twitter.com/DynastyCorbin\">@DynastyCorbin</a> <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> Definitely something to work towards and consider adjusting - I’m always a little wary of prescribing any valuation method and prefer allowing you to make those adjustments via sliders. A positional slider set us one we’ve been playing with for a little while!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jul 02 02:00:37 +0000 2019",
    "id_str": "1145874889058000896",
    "full_text": "<a href=\"https://twitter.com/DynastyCorbin\">@DynastyCorbin</a> <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> The team numbers are used primarily to rename the draft picks - I’d go ahead and use superflex values if my league was 20 starting QBs deep",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 01 19:42:53 +0000 2019",
    "id_str": "1145779831164026880",
    "full_text": "<a href=\"https://twitter.com/guhreedoe\">@guhreedoe</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> Will get there eventually!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 04 13:14:26 +0000 2022",
    "id_str": "1577286019186970624",
    "full_text": "<a href=\"https://twitter.com/antoine_fabri\">@antoine_fabri</a> this feels reasonable <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1577286019186970624-FeOlL0GWAAAPoCL.png\"><img src=\"../../tweets_media/1577286019186970624-FeOlL0GWAAAPoCL.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 04 11:44:19 +0000 2022",
    "id_str": "1577263340552093696",
    "full_text": "more pumpkin content: <a href=\"http://tanho.ca/pumpkins\">http://tanho.ca/pumpkins</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 04 11:43:49 +0000 2022",
    "id_str": "1577263216773992455",
    "full_text": "Happy October! All set to take off on another month of pumpkin carving 🎃 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1577263216773992455-FeOQiNlWIAQLJis.jpg\"><img src=\"../../tweets_media/1577263216773992455-FeOQiNlWIAQLJis.jpg\"></a></li></ul></div>",
    "favorite_count": "29",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 29 12:02:52 +0000 2022",
    "id_str": "1575456071761682433",
    "full_text": "<a href=\"https://twitter.com/JennyBryan\">@JennyBryan</a> <a href=\"https://twitter.com/hadleywickham\">@hadleywickham</a> Ah, found a better explainer: <a href=\"https://coolbutuseless.github.io/2018/12/10/r-packages-internal-and-external-data/\">https://coolbutuseless.github.io/2018/12/10/r-packages-internal-and-external-data/</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Sep 26 16:24:26 +0000 2022",
    "id_str": "1574434734473875456",
    "full_text": "Anthony is the greatest of all time for NFL/FF viz and he's got an absolute banger here on RB snap distributions <a href=\"https://twitter.com/reinhardNFL/status/1574426336575242247\">https://twitter.com/reinhardNFL/status/1574426336575242247</a>",
    "favorite_count": "14",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jun 28 22:39:11 +0000 2019",
    "id_str": "1144737034977914887",
    "full_text": "<a href=\"https://twitter.com/amazehayes_\">@amazehayes_</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> Tbf idk when he started and/or if I have access to the OG stuff",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jun 28 19:17:04 +0000 2019",
    "id_str": "1144686168048570368",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> edit: 120th overall RB/WR/TE combined",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jun 28 15:46:28 +0000 2019",
    "id_str": "1144633168567427072",
    "full_text": ".<a href=\"https://twitter.com/spidr2ybanana\">@spidr2ybanana</a> Heya Charlie! I can't find your old article on suspensions on Rotoworld anymore, think it was lost in the site upgrade. You got a copy floating around anywhere else?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jun 28 02:57:31 +0000 2019",
    "id_str": "1144439655393374209",
    "full_text": "It's on, Ezio division! #SFB9 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1144439655393374209-D-Hds0DWsAAxin5.jpg\"><img src=\"../../tweets_media/1144439655393374209-D-Hds0DWsAAxin5.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 26 16:14:09 +0000 2019",
    "id_str": "1143915358392344576",
    "full_text": "<a href=\"https://twitter.com/JetPackGalileo\">@JetPackGalileo</a> <a href=\"https://twitter.com/HotTakesBrooks\">@HotTakesBrooks</a> <a href=\"https://twitter.com/FF_Rish\">@FF_Rish</a> <a href=\"https://twitter.com/JMoyerFB\">@JMoyerFB</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/ChristipherBean\">@ChristipherBean</a> <a href=\"https://twitter.com/dwainmcfarland\">@dwainmcfarland</a> <a href=\"https://twitter.com/RyanMillerNFL\">@RyanMillerNFL</a> <a href=\"https://twitter.com/DynastyFF_KyleM\">@DynastyFF_KyleM</a> then we can separate after that by efficiency/talent, because talented players will do better with their opps. So 60-80% opps indicators (heavy on draft cap) and 20-40% everything else",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 05 19:09:50 +0000 2019",
    "id_str": "1136349427348779013",
    "full_text": "This is fantastic! <a href=\"https://twitter.com/Nike/status/1134821857905991680\">https://twitter.com/Nike/status/1134821857905991680</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jun 01 02:57:31 +0000 2019",
    "id_str": "1134655182409818118",
    "full_text": "Pretty proud of the new <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a> web page design! It's a customized version of <a href=\"https://twitter.com/mmistakes\">@mmistakes</a>'s Minimal Mistakes Jekyll theme, found here: <a href=\"https://mmistakes.github.io/minimal-mistakes/\">https://mmistakes.github.io/minimal-mistakes/</a> <a href=\"https://twitter.com/andyestridge/status/1134651440322846720\">https://twitter.com/andyestridge/status/1134651440322846720</a>",
    "favorite_count": "1",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri May 31 20:12:31 +0000 2019",
    "id_str": "1134553261367865345",
    "full_text": "#SFB9 !!! Sooo stoked! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1134553261367865345-D76-E6yXUAM_8EM.png\"><img src=\"../../tweets_media/1134553261367865345-D76-E6yXUAM_8EM.png\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri May 31 15:26:03 +0000 2019",
    "id_str": "1134481170975137792",
    "full_text": "<a href=\"https://twitter.com/cryptowizardfo1\">@cryptowizardfo1</a> We’re not trying to quantify fatigue. We’re trying to prove a hypothesis that success rates change in the fourth quarter due to run ratio",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 31 12:25:58 +0000 2019",
    "id_str": "1134435852367663106",
    "full_text": "Compiled May rookie ADP at <a href=\"https://apps.dynastyprocess.com/rookie-adp\">https://apps.dynastyprocess.com/rookie-adp</a> - this pulls from community-submitted drafts on <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> and <a href=\"https://twitter.com/SleeperHQ\">@SleeperHQ</a> and breaks down ADP for 1QB/2QB and Offense/IDP!",
    "favorite_count": "5",
    "retweet_count": "5"
  },
  {
    "created_at": "Fri May 17 06:29:52 +0000 2019",
    "id_str": "1129272807924232193",
    "full_text": "This is fascinating. Twitter’s free-tier API only pulls tweets from the last ~7 days or so, so these are pretty fresh thoughts! <a href=\"https://twitter.com/Advantalytics/status/1129018089075630081\">https://twitter.com/Advantalytics/status/1129018089075630081</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 11 05:34:47 +0000 2019",
    "id_str": "1127084616509034497",
    "full_text": "<a href=\"https://twitter.com/FF_TomB\">@FF_TomB</a> edit - this was meant as a reply to your comments re/ GB &amp; CIN",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu May 09 21:06:14 +0000 2019",
    "id_str": "1126594248399380485",
    "full_text": "Tired: \"They traded up for him -&gt; they must be planning to use him!\"<br>Wired: \"They took him early -&gt; they must be planning to use him!\"<br>[galaxybrain]<br><br>I did a quick study of <a href=\"https://twitter.com/fbgchase\">@fbgchase</a> pick trade values against Y1 snap counts on DLF! <a href=\"https://twitter.com/DLF_Kenm/status/1126590413748543491\">https://twitter.com/DLF_Kenm/status/1126590413748543491</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun May 05 00:54:04 +0000 2019",
    "id_str": "1124839643931869191",
    "full_text": "I think this is an improvement on the traditional \"hit-rate\" modeling of draft pick values! Looking forward to reading more from <a href=\"https://twitter.com/WolfStuff\">@WolfStuff</a>😀 <a href=\"https://twitter.com/TheFFGhost/status/1123680282773790722\">https://twitter.com/TheFFGhost/status/1123680282773790722</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 28 01:39:28 +0000 2019",
    "id_str": "1122314353120772098",
    "full_text": "Dropoff above this line, so you're looking at prospects you like with red flags (Butler, Boykin, Harris, Henderson), or situations you like with prospects you don't (Campbell, Hardman, Singletary). I'll take my predraft 1.01 in an air-raid ARI offense despite 4th rd draft cap. <a href=\"https://twitter.com/feldmanjacob/status/1122313599651864581\">https://twitter.com/feldmanjacob/status/1122313599651864581</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Apr 28 00:25:33 +0000 2019",
    "id_str": "1122295755295875072",
    "full_text": "From a \"STOUT\" perspective (cc Astroball) - Harry is a marriage of analytics (early breakout, MS dominance), athleticism (6-3/225 lbs, 4.55 40, elite str, 8.35 RAS), and film (wins w/str + quickness, plays big slot and outside). Filling Gronk void as big NE weapon is perfect fit. <a href=\"https://twitter.com/feldmanjacob/status/1122217501004267520\">https://twitter.com/feldmanjacob/status/1122217501004267520</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Apr 27 14:27:22 +0000 2019",
    "id_str": "1122145217048719363",
    "full_text": "Trying to measure my immediate gut-feeling reactions on these guys is tricky. Here's a first stab at how things have shifted from my predraft thoughts. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1122145217048719363-D5KpCGuWsAEHM5V.png\"><img src=\"../../tweets_media/1122145217048719363-D5KpCGuWsAEHM5V.png\"></a></li><li><a href=\"../../tweets_media/1122145217048719363-D5KpG30WkAA31W-.png\"><img src=\"../../tweets_media/1122145217048719363-D5KpG30WkAA31W-.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 25 15:33:30 +0000 2019",
    "id_str": "1121437082247938048",
    "full_text": "Whatever your rookie approach is, it’s extremely valuable to lock in a snapshot of your thoughts before a major event like the draft. Everything is volatile - but measuring how your opinion changes is much easier when you have something to refer to. Here’s mine! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1121437082247938048-D5AlFI9WwAAOV86.jpg\"><img src=\"../../tweets_media/1121437082247938048-D5AlFI9WwAAOV86.jpg\"></a></li></ul></div>",
    "favorite_count": "37",
    "retweet_count": "7"
  },
  {
    "created_at": "Tue Apr 23 13:01:28 +0000 2019",
    "id_str": "1120674047480815617",
    "full_text": "As a lover of game theory and competition, this is some really cool insight: <a href=\"https://www.si.com/nfl/2019/04/23/nfl-draft-information-trade-media-adam-schefter-ian-rapoport-rick-gosselin\">https://www.si.com/nfl/2019/04/23/nfl-draft-information-trade-media-adam-schefter-ian-rapoport-rick-gosselin</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Apr 22 13:05:06 +0000 2019",
    "id_str": "1120312575093297154",
    "full_text": "Continuing to improve on the <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a> calculator: added a startup pick mode! Try it out: <a href=\"http://apps.dynastyprocess.com/calculator\">http://apps.dynastyprocess.com/calculator</a>",
    "favorite_count": "3",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Apr 15 20:34:42 +0000 2019",
    "id_str": "1117889002084810753",
    "full_text": "Free data! (Nom nom nom) 😋 <a href=\"https://twitter.com/DynastySkyler/status/1117840156202024961\">https://twitter.com/DynastySkyler/status/1117840156202024961</a>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Apr 08 10:48:55 +0000 2019",
    "id_str": "1115204870758371330",
    "full_text": "Updated the <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a> calculator with a conservative rookie pick value algorithm and new slider! Give it a try :) <a href=\"http://apps.dynastyprocess.com/calculator\">http://apps.dynastyprocess.com/calculator</a>",
    "favorite_count": "14",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Apr 02 01:36:27 +0000 2019",
    "id_str": "1112891510830325767",
    "full_text": "Joe does fantastic work! <a href=\"https://twitter.com/JoeSydlowskiFF/status/1112887797734572038\">https://twitter.com/JoeSydlowskiFF/status/1112887797734572038</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Apr 01 14:12:00 +0000 2019",
    "id_str": "1112719265709412352",
    "full_text": "Let’s go!! Details: <a href=\"http://fitff.tanho.ca\">http://fitff.tanho.ca</a> <a href=\"https://t.co/zWKqjWbJEJ\">https://t.co/zWKqjWbJEJ</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 31 16:23:34 +0000 2019",
    "id_str": "1112389985402015746",
    "full_text": "<a href=\"https://twitter.com/CharlesChillFFB\">@CharlesChillFFB</a> Hard to make a judgement call on just the average number if he’s tailoring to the offensive personnel, and/or if he’s got a wide variance year over year",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 30 23:39:13 +0000 2019",
    "id_str": "1112137231836332032",
    "full_text": "Just got my copy of Keep Going by <a href=\"https://twitter.com/austinkleon\">@austinkleon</a> ! Excited 🤩 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1112137231836332032-D28a6eYWoAAB8Nx.jpg\"><img src=\"../../tweets_media/1112137231836332032-D28a6eYWoAAB8Nx.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 29 23:12:37 +0000 2019",
    "id_str": "1111768152269049856",
    "full_text": "Waiting for the day this stuff comes available for the NFL <a href=\"https://twitter.com/darenw/status/1111767911327297537\">https://twitter.com/darenw/status/1111767911327297537</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 29 12:48:29 +0000 2019",
    "id_str": "1111611082454564864",
    "full_text": "There could be people who think this in your league and are more desperate than Jared. Explore buying opps for ~3rds - cheap price for a guy with an opportunity for volume! <a href=\"https://twitter.com/JaredWackerly/status/1111594007078060033\">https://twitter.com/JaredWackerly/status/1111594007078060033</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 25 12:27:18 +0000 2019",
    "id_str": "1110156200841105408",
    "full_text": "I should have the latest updated into the DynastyProcess database sometime this week :)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 25 12:21:59 +0000 2019",
    "id_str": "1110154860551299072",
    "full_text": "Kent does amazing things and is incredibly generous with his data! <a href=\"https://twitter.com/MathBomb/status/1110154077114191873\">https://twitter.com/MathBomb/status/1110154077114191873</a>",
    "favorite_count": "8",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Mar 25 10:26:43 +0000 2019",
    "id_str": "1110125854934396928",
    "full_text": "Excitedly launching a new Trade Calculator web-app on <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a>! Something unique: the ability to adjust value equation for depth preferences. Check it out: <a href=\"http://apps.dynastyprocess.com/calculator\">http://apps.dynastyprocess.com/calculator</a> <br><br>(shoutout to <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> for his hard work!)<br><br><a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> <a href=\"https://twitter.com/DynastyTrades\">@DynastyTrades</a>",
    "favorite_count": "9",
    "retweet_count": "5"
  },
  {
    "created_at": "Mon Mar 25 01:28:59 +0000 2019",
    "id_str": "1109990529134219264",
    "full_text": "<a href=\"https://twitter.com/LopsidedTrades\">@LopsidedTrades</a> <a href=\"https://twitter.com/DFF_Tom\">@DFF_Tom</a> <a href=\"https://twitter.com/RekedFantasy\">@RekedFantasy</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/pfref\">@pfref</a> Marino is amazeballs, Russ is best amongst active guys, and Dak is very solidly in 16th.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Mar 21 17:39:17 +0000 2019",
    "id_str": "1108785162899374082",
    "full_text": "Awesome update! Now if only we could get an API download of the “custom player names” entered by commish - makes supporting devy and startup picks much easier!!! <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> <a href=\"https://twitter.com/JohnBoschFF/status/1108764756826120192\">https://twitter.com/JohnBoschFF/status/1108764756826120192</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Mar 10 22:44:58 +0000 2019",
    "id_str": "1104875821238550529",
    "full_text": "Jasper looking spiffy as he celebrates his 7th birthday 😎It’s been a fantastic year little buddy, here’s to many more🐕 <a href=\"https://www.instagram.com/p/Bu2FNnxnNiIbAVi60Ry1EkbieAmUDteLXlxX2Y0/?utm_source=ig_twitter_share&igshid=1thh1szmellzl\">https://www.instagram.com/p/Bu2FNnxnNiIbAVi60Ry1EkbieAmUDteLXlxX2Y0/?utm_source=ig_twitter_share&igshid=1thh1szmellzl</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 09 14:22:12 +0000 2019",
    "id_str": "1104386907872681984",
    "full_text": "Reading weekend: excited to dig into <a href=\"https://twitter.com/BenReiter\">@BenReiter</a>’s Astroball and <a href=\"https://twitter.com/ZackMooreNFL\">@ZackMooreNFL</a>’s Caponomics! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1104386907872681984-D1OSB07WsAAu0J4.jpg\"><img src=\"../../tweets_media/1104386907872681984-D1OSB07WsAAu0J4.jpg\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 08 17:53:10 +0000 2019",
    "id_str": "1104077611549016066",
    "full_text": "Happy to throw this data set up for a more rigorous stat/regression if someone's keen to do that :) <br><br>Tagging some interested parties from yesterday: <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> <a href=\"https://twitter.com/DynoEconomist\">@DynoEconomist</a> <a href=\"https://twitter.com/DeWitt_Dynasty\">@DeWitt_Dynasty</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 08 17:53:09 +0000 2019",
    "id_str": "1104077610366177280",
    "full_text": "Nominally, higher R^2 is better, so you *could* argue rounded &gt; decimals &gt; truncated - but I'm not sure the diff is stat-significant. <br><br>However, I think there's evidence to \"reject\" the idea that adding decimals reduces the predictiveness of BOA - if anything it's improved!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 08 17:53:09 +0000 2019",
    "id_str": "1104077608432689152",
    "full_text": "Results are...interesting! Filtered for 2003-2016 WRs only, the R^2 are: <br><br>Decimals: 0.0799<br>Truncated: 0.0783<br>Rounded: 0.0813<br><br>What does this mean? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1104077608432689152-D1J4utNWoAAEC93.png\"><img src=\"../../tweets_media/1104077608432689152-D1J4utNWoAAEC93.png\"></a></li><li><a href=\"../../tweets_media/1104077608432689152-D1J4utOWkAIL_Lf.png\"><img src=\"../../tweets_media/1104077608432689152-D1J4utOWkAIL_Lf.png\"></a></li><li><a href=\"../../tweets_media/1104077608432689152-D1J4utPX0AEK96N.png\"><img src=\"../../tweets_media/1104077608432689152-D1J4utPX0AEK96N.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 08 17:53:07 +0000 2019",
    "id_str": "1104077599557513218",
    "full_text": "I used <a href=\"https://twitter.com/pahowdy\">@pahowdy</a>'s database and dates of birth to reconstruct what I thought was a better breakout age calculation: decimals + the original Oct 15 calculation date. As comparison, I kept Peter's original BOA [truncated BOA as of Sep 1] and also tested \"rounded to nearest whole\".",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 08 17:53:06 +0000 2019",
    "id_str": "1104077597565165570",
    "full_text": "Always fun taking on a challenge like this :) <br><br>\"How well does [Decimal Breakout Age, Truncated Breakout Age, Rounded Breakout Age] predict PPG Y1-Y3?\" <br><br>I've always preferred the granularity of decimals in BOA, but haven't really tested to see whether it's stat significant! <a href=\"https://twitter.com/pahowdy/status/1103718693132029952\">https://twitter.com/pahowdy/status/1103718693132029952</a>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Sep 24 16:52:30 +0000 2022",
    "id_str": "1573717018519506945",
    "full_text": "I still can't understand why donttest even exists, but that's a story for another time...",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 24 16:31:23 +0000 2022",
    "id_str": "1573711707263975425",
    "full_text": "tan: ok donttest these examples<br>cran: _runs donttest_<br>tan's package: 💀 <br><br>tan uses: try()<br>it was 100% effective!",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 16 22:52:40 +0000 2022",
    "id_str": "1570908557285163008",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> thanks for the kind words, and for being an awesome friend!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 04 23:59:44 +0000 2019",
    "id_str": "1102720310674104321",
    "full_text": "This is super cool - but I’m more excited to see the “least consistent”: diversity of opinion =&gt; trading opportunities! <a href=\"https://twitter.com/FFzinger/status/1102559919209963520\">https://twitter.com/FFzinger/status/1102559919209963520</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Feb 28 17:27:39 +0000 2019",
    "id_str": "1101172087077560320",
    "full_text": "<a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> <a href=\"https://twitter.com/beerswater\">@beerswater</a> <a href=\"https://twitter.com/Stat_Ron\">@Stat_Ron</a> Google suggests it might be SportsHub-related (CDM Sports, NFFC, shgn)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 25 14:21:06 +0000 2019",
    "id_str": "1100037979438043136",
    "full_text": "You can adjust based on any variable in the database - if you want age as comp variable, just add it in.<br><br>We've set up a few default sets of variables, but feel free to experiment! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1100037979438043136-D0QetePXQAAItaI.jpg\"><img src=\"../../tweets_media/1100037979438043136-D0QetePXQAAItaI.jpg\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 25 14:21:05 +0000 2019",
    "id_str": "1100037974446825476",
    "full_text": "In the above example, we're looking at Courtland Sutton comparisons based on some typical receiver-opportunity metrics - can quickly see that if you like that type, you might also be interested in Doctson or Gallup as potential pivots!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 25 14:21:04 +0000 2019",
    "id_str": "1100037972320272384",
    "full_text": "New app by <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> at <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a> &gt; Arbitrage App. <br><br><a href=\"http://apps.dynastyprocess.com/arbitrage/\">http://apps.dynastyprocess.com/arbitrage/</a><br><br>This app finds the most similar players to a certain player based on a selected set of variables to help you compare their relative pricing. Example -&gt; <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1100037972320272384-D0QetA-W0AA0VkH.jpg\"><img src=\"../../tweets_media/1100037972320272384-D0QetA-W0AA0VkH.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Feb 22 19:52:56 +0000 2019",
    "id_str": "1099034322579935232",
    "full_text": "<a href=\"https://twitter.com/JukeGarrett\">@JukeGarrett</a> Key is also having head to head matchups instead of just points. You still get Monday night sweats because any shmuck can explode to be the game winner, you still get trash talk, and you’re incentivized to build deep+high ceiling rosters",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Feb 19 14:45:19 +0000 2019",
    "id_str": "1097869744726781953",
    "full_text": "<a href=\"https://twitter.com/JustinFreeman18\">@JustinFreeman18</a> If outputting data to Word you'll probably need to use mail-merge to pull data into fields",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 18 14:50:32 +0000 2019",
    "id_str": "1097508669342842880",
    "full_text": "New post at <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a>: this time, it's about how I placed 9th in a projections contest [ahead of <a href=\"https://twitter.com/MikeClayNFL\">@MikeClayNFL</a>, <a href=\"https://twitter.com/amicsta\">@amicsta</a>, and <a href=\"https://twitter.com/pahowdy\">@pahowdy</a>] despite doing zero research on teams and players! <br><br>[<a href=\"https://twitter.com/FantasyPros\">@FantasyPros</a> is the 🐐]<br><br><a href=\"https://dynastyprocess.com/projections/fiveminuteprojections/\">https://dynastyprocess.com/projections/fiveminuteprojections/</a>",
    "favorite_count": "9",
    "retweet_count": "6"
  },
  {
    "created_at": "Sat Feb 16 05:20:12 +0000 2019",
    "id_str": "1096640367712063488",
    "full_text": "Some really interesting reasons for Kaepernick to settle! McCann's interpretation makes sense: there is SOME evidence of collusion [or the NFL wouldn't have settled, which is further than any other player has gotten in a dispute] but is very difficult [so K takes money]. <a href=\"https://twitter.com/McCannSportsLaw/status/1096557187747495937\">https://twitter.com/McCannSportsLaw/status/1096557187747495937</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Feb 14 22:16:50 +0000 2019",
    "id_str": "1096171434865438720",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> i did post the sample size in the original thread - 6 and -7 both have higher average-rec-yards than -5, beyond that the sample gets very tiny",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 13 12:18:00 +0000 2019",
    "id_str": "1095658344574930945",
    "full_text": "This is a fantastic thread! <a href=\"https://twitter.com/MathBomb/status/1095491905109008385\">https://twitter.com/MathBomb/status/1095491905109008385</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Feb 02 21:16:44 +0000 2019",
    "id_str": "1091807656594075648",
    "full_text": "Just posted my first blog post at <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a> :) <br><br>Inspired by <a href=\"https://twitter.com/pahowdy\">@pahowdy</a>'s #FreeDataCanDoALotForYou threads, it's a tutorial on getting week-by-week RB stats from <a href=\"https://twitter.com/nflscrapR\">@nflscrapR</a> play-by-play data using PowerQuery. Check it out! <br><br><a href=\"https://dynastyprocess.com/data/lookingfordata/\">https://dynastyprocess.com/data/lookingfordata/</a>",
    "favorite_count": "22",
    "retweet_count": "9"
  },
  {
    "created_at": "Thu Jan 31 18:28:20 +0000 2019",
    "id_str": "1091040500881199106",
    "full_text": "Launching a new project at <a href=\"http://DynastyProcess.com\">http://DynastyProcess.com</a>: the Dynasty Process Database! It aggregates a ton of data on fantasy NFL players from <a href=\"https://twitter.com/FantasyPros\">@FantasyPros</a>, <a href=\"https://twitter.com/AirYards\">@AirYards</a>, <a href=\"https://twitter.com/spotrac\">@spotrac</a>, <a href=\"https://twitter.com/pfref\">@pfref</a>, <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a>, <a href=\"https://twitter.com/MathBomb\">@MathBomb</a>, <a href=\"https://twitter.com/SleeperHQ\">@SleeperHQ</a>, <a href=\"https://twitter.com/NFLScrapR\">@NFLScrapR</a> and more. Available in CSV and Excel formats :) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1091040500881199106-DyQnjQNUwAAfUzg.jpg\"><img src=\"../../tweets_media/1091040500881199106-DyQnjQNUwAAfUzg.jpg\"></a></li></ul></div>",
    "favorite_count": "10",
    "retweet_count": "6"
  },
  {
    "created_at": "Wed Jan 30 14:32:00 +0000 2019",
    "id_str": "1090618637038297090",
    "full_text": "I’ve struggled with mental health and lately it’s feeling worse than ever. I’m so grateful for every one of my supports. If you’re down and need someone, I want to be there for you - let me know! #BellLetsTaIk <a href=\"https://twitter.com/Bell_LetsTalk/status/1090452040118165504\">https://twitter.com/Bell_LetsTalk/status/1090452040118165504</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 24 19:36:02 +0000 2019",
    "id_str": "1088520824456470529",
    "full_text": "Also...👀 Atlanta touch distribution! This says something about Tevin, but I don't know what that is...",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 24 19:36:02 +0000 2019",
    "id_str": "1088520823227514884",
    "full_text": "Tom is right in saying that SF distributed touches to many backs, but that doesn't necessarily mean anything in light of how comparable the talent-levels were (Breida, Mostert, Wilson). McKinnon may or may not be a step above those guys and could earn a larger share of touches.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 24 19:36:02 +0000 2019",
    "id_str": "1088520821109338114",
    "full_text": "This (grabbed from <a href=\"https://twitter.com/nflscrapR\">@nflscrapR</a>'s csv data) looks at weekly average RB touch (target + carries) distribution for each team in 2018. Not necessarily all coach driven, of course, but I think this is more accurate than a year-end-total view. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1088520821109338114-Dxsz6p8U0AAtypY.jpg\"><img src=\"../../tweets_media/1088520821109338114-Dxsz6p8U0AAtypY.jpg\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Jan 24 19:36:00 +0000 2019",
    "id_str": "1088520816164249601",
    "full_text": "I liked the idea <a href=\"https://twitter.com/TomDegenerate\">@TomDegenerate</a>'s putting out here but disagreed with the methodology - looking at season totals doesn't account for injuries or weekly variations...so I decided to look at it myself! <a href=\"https://twitter.com/TomKislingbury/status/1088497211636400130\">https://twitter.com/TomKislingbury/status/1088497211636400130</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 09 19:28:26 +0000 2019",
    "id_str": "1083083093576220672",
    "full_text": "I set 200 pounds as a goal for 2018 with my inner cynic complaining that it was wishful thinking for a ~270 pound guy. Proud to have beaten those inner demons by weighing in at 200.8 on Dec 30 🙃Thanks for running the contest, Adam - every source of motivation was helpful! <a href=\"https://t.co/gXJN9psrX0\">https://t.co/gXJN9psrX0</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Dec 29 13:19:42 +0000 2018",
    "id_str": "1079004029487902720",
    "full_text": "My projections finished in the top ten overall against some very sharp people! 🤩🤩🤩 <a href=\"https://twitter.com/JustinFreeman18/status/1079003024914305024\">https://twitter.com/JustinFreeman18/status/1079003024914305024</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Dec 20 21:45:35 +0000 2018",
    "id_str": "1075869850373943297",
    "full_text": "<a href=\"https://twitter.com/RogerGoodgroves\">@RogerGoodgroves</a> <a href=\"https://twitter.com/kissmysponge\">@kissmysponge</a> <a href=\"https://twitter.com/NFLFootballOps\">@NFLFootballOps</a> <a href=\"https://twitter.com/AroundTheNFL\">@AroundTheNFL</a> <a href=\"https://twitter.com/NFL\">@NFL</a> If it was offered as a purely academic exercise without reward I could see it being more open to international competitors",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Dec 14 15:09:41 +0000 2018",
    "id_str": "1073595888994533376",
    "full_text": "Looking for replacement owner to take over an orphan in the SmashBros Dynasty League. Details in pic, application and bylaws here: <a href=\"https://goo.gl/forms/WRSXyzJLocoHMiDd2\">https://goo.gl/forms/WRSXyzJLocoHMiDd2</a><br><br>RTs appreciated :) <a href=\"https://twitter.com/MyFantasyLeague\">@MyFantasyLeague</a> <a href=\"https://twitter.com/DLFootball\">@DLFootball</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> <a href=\"https://twitter.com/JohnBoschFF\">@JohnBoschFF</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1073595888994533376-DuYs1XwUYAMajBH.jpg\"><img src=\"../../tweets_media/1073595888994533376-DuYs1XwUYAMajBH.jpg\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "4"
  },
  {
    "created_at": "Fri Dec 07 13:31:08 +0000 2018",
    "id_str": "1071034375855325184",
    "full_text": "<a href=\"https://twitter.com/DLFootball\">@DLFootball</a> <a href=\"https://twitter.com/DynastyTrades\">@DynastyTrades</a> <a href=\"https://twitter.com/DynastyHHPod\">@DynastyHHPod</a> <a href=\"https://twitter.com/DynastyFFTools\">@DynastyFFTools</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Dec 07 13:29:46 +0000 2018",
    "id_str": "1071034031893045248",
    "full_text": "Hey dynasty commissioners! Are you calculating ESPN/Yahoo Potential Points manually? I built an Excel sheet that'll generate potential points, all-play record, and owner efficiency stats by scraping boxscore pages. Give it a try: <a href=\"http://dynastydashboard.com/downloads\">http://dynastydashboard.com/downloads</a>",
    "favorite_count": "4",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Dec 02 02:06:43 +0000 2018",
    "id_str": "1069050198343716864",
    "full_text": "<a href=\"https://twitter.com/NPowellFF\">@NPowellFF</a> I mistimed the owner-recruitment phase of this last year but will try to do better this year :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Nov 11 15:17:27 +0000 2018",
    "id_str": "1061639045200179201",
    "full_text": "<a href=\"https://twitter.com/evansilva\">@evansilva</a> <a href=\"https://twitter.com/AlZeidenfeld\">@AlZeidenfeld</a> Clarifying: best ball (automatic optimal lineups) is not the same as draftmaster (draft only, no inseason mgmt). Mfl10s are both. I’m talking about only automatic lineup setting.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 05 12:43:38 +0000 2018",
    "id_str": "1059426008464527361",
    "full_text": "Wrapping up an amazing season of #rowing. Loved every minute of it: great friends, early sunrises, power pieces, distance days, and the feeling of flying through the water. @ Ottawa… <a href=\"https://www.instagram.com/p/BpzJBbngdzo/?utm_source=ig_twitter_share&igshid=1xpnu6gszbdgl\">https://www.instagram.com/p/BpzJBbngdzo/?utm_source=ig_twitter_share&igshid=1xpnu6gszbdgl</a>",
    "favorite_count": "0",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Nov 01 19:03:16 +0000 2018",
    "id_str": "1058071995835969538",
    "full_text": "That's all I've got for now! Thoughts? Critiques?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 01 19:03:16 +0000 2018",
    "id_str": "1058071994875498496",
    "full_text": "<a href=\"https://imgur.com/czfC4dc\">https://imgur.com/czfC4dc</a> We can also remove a lot of the noise that comes with RACR for RBs, and now more easily compare how efficient they've been on their receiving opportunities.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 01 19:03:16 +0000 2018",
    "id_str": "1058071994003001350",
    "full_text": "<a href=\"https://imgur.com/Filf4de\">https://imgur.com/Filf4de</a> Saquon's share of opportunity jumps up to be a lot closer to Sterling Shepard than Cody Latimer, which to me better reflects what his share of his team's receiving yards is like.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 01 19:03:15 +0000 2018",
    "id_str": "1058071992316952577",
    "full_text": "That quick analysis suggests that counting negative as positive is a worthwhile endeavour. So I went back to calculate absolute airyards for the 2018 season, and from that derived absolute racr and absolute wopr. Data here: <a href=\"https://drive.google.com/file/d/1g_xFD7Gxi7L7HKwI2UMXS4GG5zXH_1mH/view?usp=sharing\">https://drive.google.com/file/d/1g_xFD7Gxi7L7HKwI2UMXS4GG5zXH_1mH/view?usp=sharing</a>",
    "favorite_count": "1",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Nov 01 19:03:14 +0000 2018",
    "id_str": "1058071989515100160",
    "full_text": "Expected receiving yards of a target at -5 to + 5 airyards is positive and pretty similar. Factoring in the increased completion rate, negative airyard targets are worth more in expected fantasy points! <a href=\"https://imgur.com/Lh9iRXv\">https://imgur.com/Lh9iRXv</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 01 19:03:14 +0000 2018",
    "id_str": "1058071987489259520",
    "full_text": "Is a negative three airyard target worth less than a positive three airyard target? Let's check out what the expected receiving yards are at each target depth, using 2018 pbp data (thanks <a href=\"https://twitter.com/Stat_Ron\">@Stat_Ron</a>!) <a href=\"https://imgur.com/a/i1pfg3w\">https://imgur.com/a/i1pfg3w</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Nov 01 19:03:14 +0000 2018",
    "id_str": "1058071985484378113",
    "full_text": "(An)absolute WOPR: a thread on negative air yards (s/o to <a href=\"https://twitter.com/friscojosh\">@friscojosh</a>)<br><br><a href=\"https://twitter.com/JoeSydlowski\">@JoeSydlowski</a> : \"Saquon has -3 air yards on 70 targets for a 162 RACR 🤣\"<br>Me: \"...what if negative airyards were counted as positive air yards?\"",
    "favorite_count": "6",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Oct 30 12:49:47 +0000 2018",
    "id_str": "1057253231741624320",
    "full_text": "<a href=\"https://twitter.com/CausalKathy\">@CausalKathy</a> Or maybe the crystal ball instead of finger pointing 🔮",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 30 01:10:45 +0000 2018",
    "id_str": "1057077312490037253",
    "full_text": "Meeting the Bus! #JeromeBettis <a href=\"https://www.instagram.com/p/Bpic9oqADQt/?utm_source=ig_twitter_share&igshid=u46ltx85qh35\">https://www.instagram.com/p/Bpic9oqADQt/?utm_source=ig_twitter_share&igshid=u46ltx85qh35</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Oct 19 12:59:31 +0000 2018",
    "id_str": "1053269414810996738",
    "full_text": "Excited to be on my way to Pittsburgh for #CMSAC18 !",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 27 17:41:54 +0000 2018",
    "id_str": "1045367942433648640",
    "full_text": "What they really should do is borrow language from rugby and ban the \"spear tackle\" - which is defined as picking up the opponent off of the ground and then driving them into the ground while landing on head, back, or neck. <a href=\"https://en.wikipedia.org/wiki/Spear_tackle\">https://en.wikipedia.org/wiki/Spear_tackle</a> <a href=\"https://twitter.com/NFLFootballOps/status/1045361569813733377\">https://twitter.com/NFLFootballOps/status/1045361569813733377</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 16 15:44:38 +0000 2022",
    "id_str": "1570800837164945408",
    "full_text": "You can also build predictions from the trained models  via the ffopportunity #rstats package: <a href=\"https://github.com/ffverse/ffopportunity\">https://github.com/ffverse/ffopportunity</a>",
    "favorite_count": "2",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Sep 16 15:44:37 +0000 2022",
    "id_str": "1570800835168448512",
    "full_text": "You can download the output of the model from the GitHub releases <a href=\"https://github.com/ffverse/ffopportunity/releases\">https://github.com/ffverse/ffopportunity/releases</a>, or by using nflreadr: <a href=\"https://nflreadr.nflverse.com/reference/load_ff_opportunity.html\">https://nflreadr.nflverse.com/reference/load_ff_opportunity.html</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Sep 16 15:44:37 +0000 2022",
    "id_str": "1570800833205514240",
    "full_text": "We're hoping to get it onto CRAN in the next month or so after a bit more modelling doc polish, and also soon will have a website/Shiny wrapper so that you can explore the models in more detail!",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 16 15:44:36 +0000 2022",
    "id_str": "1570800831347437569",
    "full_text": "We trained play-level models for each of the possible outcomes from a player opportunity (rush, target, pass attempt), using the output of previous models to help train successive models (e.g. expected rush yards helps explain expected rush TDs).",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 16 15:44:36 +0000 2022",
    "id_str": "1570800829413855236",
    "full_text": "It's the culmination of a lot of incredible work from <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> (and to a lesser extent, me) and builds on ideas previously introduced by <a href=\"https://twitter.com/KevinColePFF\">@KevinColePFF</a>, <a href=\"https://twitter.com/RotoViz\">@RotoViz</a>, and <a href=\"https://twitter.com/YardsPerGretch\">@YardsPerGretch</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 16 15:44:35 +0000 2022",
    "id_str": "1570800826863734784",
    "full_text": "ICYMI: Josh had really nice things to say about using ffopportunity for studying backfield usage!<br><br>I'd personally describe it as (to my knowledge) the first fully public expected fantasy points model trained on public #nflverse data - and it obviously can be used for much more! <a href=\"https://twitter.com/friscojosh/status/1570424273638141955\">https://twitter.com/friscojosh/status/1570424273638141955</a>",
    "favorite_count": "23",
    "retweet_count": "7"
  },
  {
    "created_at": "Fri Sep 16 02:06:28 +0000 2022",
    "id_str": "1570594937766563841",
    "full_text": "Holy f Justin Watson FINALLY is a thing? It’s like my ff prayers are being answered on a three year delay",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 15 15:30:23 +0000 2022",
    "id_str": "1570434862821113860",
    "full_text": "<a href=\"https://twitter.com/friscojosh\">@friscojosh</a> <a href=\"https://twitter.com/StatsbyLopez\">@StatsbyLopez</a> <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> <a href=\"https://twitter.com/YardsPerGretch\">@YardsPerGretch</a> As far as summarising it to a game level goes, this is something Joe and I have argued at looooong length about! <br><br>I think my last position on this was that (for fantasy football purposes), each carry is an opportunity to score fantasy points and so 3 carries = 3x 1 carry...",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue May 29 09:37:48 +0000 2018",
    "id_str": "1001397186289168384",
    "full_text": "<a href=\"https://twitter.com/DHH_Pastor\">@DHH_Pastor</a> <a href=\"https://twitter.com/ScottFish24\">@ScottFish24</a> <a href=\"https://twitter.com/EmpireFFL\">@EmpireFFL</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/DwayneB13\">@DwayneB13</a> <a href=\"https://twitter.com/the_FF_engineer\">@the_FF_engineer</a> <a href=\"https://twitter.com/D101_HQ\">@D101_HQ</a> <a href=\"https://twitter.com/RyanMc23\">@RyanMc23</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue May 29 09:35:04 +0000 2018",
    "id_str": "1001396496502280192",
    "full_text": "Inspired by the World Cup, can you lead your dynasty team to INTERNATIONAL GLORY? Join the new WORLD CUP DYNASTY startup and put your management and planning skills to the test! <a href=\"http://bit.ly/wcdynasty\">http://bit.ly/wcdynasty</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1001396496502280192-DeWss0pVQAA57UT.jpg\"><img src=\"../../tweets_media/1001396496502280192-DeWss0pVQAA57UT.jpg\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "4"
  },
  {
    "created_at": "Wed May 23 12:16:33 +0000 2018",
    "id_str": "999262807072886789",
    "full_text": "<a href=\"https://twitter.com/The1181991\">@The1181991</a> <a href=\"https://twitter.com/LateRoundQB\">@LateRoundQB</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> Kneeling is more like making the sign of the cross after a successful play or before stepping on the field.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 23 12:15:36 +0000 2018",
    "id_str": "999262569717223426",
    "full_text": "<a href=\"https://twitter.com/The1181991\">@The1181991</a> <a href=\"https://twitter.com/LateRoundQB\">@LateRoundQB</a> <a href=\"https://twitter.com/amicsta\">@amicsta</a> If you're arguing that kneeling affects the \"branding and product\" of watching NFL football - I don't see how it does. The stigma around concussions and brain damage should have much more of an impact on the branding than a small token gesture.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat May 05 16:16:03 +0000 2018",
    "id_str": "992800098877878277",
    "full_text": "<a href=\"https://twitter.com/shawnyeds\">@shawnyeds</a> Updated values table :) if you have any of my Google Sheets they'll already be updated",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 20 15:22:13 +0000 2018",
    "id_str": "987350733925203968",
    "full_text": "<a href=\"https://twitter.com/FullOnTLT\">@FullOnTLT</a> franchise QBs at risk of retirement: Brady, Brees, Roethlisberger<br>franchise QBs: Watson, Luck, Mariota, Rivers, Prescott, Wentz, Smith, Stafford, Rodgers, Cousins, Ryan, Newton, Winston, Goff, Garoppolo, Wilson<br>high-draft-capital QBs: Trubisky, Mahomes",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Feb 27 19:37:18 +0000 2018",
    "id_str": "968570759131140096",
    "full_text": "I just published “Inside the Calculator (Series Introduction)” <a href=\"https://medium.com/p/inside-the-calculator-series-introduction-aab9a4df5d2c\">https://medium.com/p/inside-the-calculator-series-introduction-aab9a4df5d2c</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 20 21:21:29 +0000 2017",
    "id_str": "888146869552955392",
    "full_text": "<a href=\"https://m.youtube.com/watch?v=zsCD5XCu6CM\">https://m.youtube.com/watch?v=zsCD5XCu6CM</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 15 13:35:09 +0000 2022",
    "id_str": "1570405864997064705",
    "full_text": "<a href=\"https://twitter.com/tanya_shapiro\">@tanya_shapiro</a> If I'm feeling really spiffy I pair it with Bai Jamjuree for headings :) both free google fonts.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 13 18:25:14 +0000 2022",
    "id_str": "1569754092591009792",
    "full_text": "i like how fast datatable is and have been trying to use it more, but my goodness is it hard to grok 😱<br><br>case in point: data.table::nafill = tidyr::fill, but instead of direction = \"up\" and \"down\" it's <br>...wait for it... <br>\"nocb\" and \"locf\" 🙃",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 09 13:42:42 +0000 2022",
    "id_str": "1568233438326431746",
    "full_text": "follow <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> and/or <a href=\"https://twitter.com/nflversetweets\">@nflversetweets</a> for more info, we'll be working off and on today on some data quality problems",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Sep 09 13:03:38 +0000 2022",
    "id_str": "1568223607347707906",
    "full_text": "day one patching of #nflverse is in progress - load_pbp and load_player_stats are up and running now in all data repos, participation not there yet but ongoing. <a href=\"https://twitter.com/benbbaldwin/status/1568218766949097474\">https://twitter.com/benbbaldwin/status/1568218766949097474</a>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Sep 06 23:18:05 +0000 2022",
    "id_str": "1567291074934177792",
    "full_text": "<a href=\"https://twitter.com/danmorse_\">@danmorse_</a> if not SF, move the QBs to after all five RB/WRs",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 06 19:56:51 +0000 2022",
    "id_str": "1567240431490023424",
    "full_text": "Incredible work from Seb making these image functions for nflplotR and I'm super glad to see him spin it out into a standalone #rstats package! <a href=\"https://twitter.com/mrcaseb/status/1567212728908931072\">https://twitter.com/mrcaseb/status/1567212728908931072</a>",
    "favorite_count": "18",
    "retweet_count": "5"
  },
  {
    "created_at": "Sat Aug 27 15:21:56 +0000 2022",
    "id_str": "1563547369743929346",
    "full_text": "Finally made it to London. <br><br>_sighs_<br>_crawls into bed_<br><br>But hey at least Liverpool is doing better this week 😅 <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1563547369743929346-FbLWCkgUIAIgjVn.mp4\"></video></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 27 02:03:23 +0000 2022",
    "id_str": "1563346407464902657",
    "full_text": "PSA: avoid flying into Toronto at all costs now.<br><br>Signed, a guy whose flight was delayed from 11:45 pm to 3:40 am. <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1563346407464902657-FbIfRDaVsAAJ-Cv.mp4\"></video></li></ul></div>",
    "favorite_count": "12",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 22 21:01:53 +0000 2022",
    "id_str": "1561820979101327361",
    "full_text": "would dong in 32/32 NHL arenas <a href=\"https://twitter.com/danmorse_/status/1561816078350630912\">https://twitter.com/danmorse_/status/1561816078350630912</a>",
    "favorite_count": "6",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Aug 20 22:03:50 +0000 2022",
    "id_str": "1561111793136795648",
    "full_text": "The #nflverse appreciates our snek frens too! 👇 <a href=\"https://twitter.com/CoopsFB/status/1561106478047567873\">https://twitter.com/CoopsFB/status/1561106478047567873</a>",
    "favorite_count": "6",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Aug 19 22:50:45 +0000 2022",
    "id_str": "1560761214778707970",
    "full_text": "June's talk was incredibly eye-opening for understanding what actually happens when ggplot builds your plot. Already rewatched and learned something new! <br><br>#rstats <a href=\"https://twitter.com/yjunechoe/status/1560714208047554560\">https://twitter.com/yjunechoe/status/1560714208047554560</a>",
    "favorite_count": "24",
    "retweet_count": "3"
  },
  {
    "created_at": "Thu Aug 18 13:56:40 +0000 2022",
    "id_str": "1560264419372060673",
    "full_text": "My #rstudioconf2022 talk recording is now available online! <a href=\"https://www.rstudio.com/conference/2022/talks/project-immortality-github/\">https://www.rstudio.com/conference/2022/talks/project-immortality-github/</a> <br><br>(but I will work my butt off to never ever watch it) <a href=\"./_TanHo/status/1550532244380721153\">https://twitter.com/_TanHo/status/1550532244380721153</a>",
    "favorite_count": "16",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Aug 15 14:07:50 +0000 2022",
    "id_str": "1559180066025885698",
    "full_text": "This may be user error, or a dock problem, but it seems like it’s registering both dock displays as one single display. Will try a different dock soon, I guess 🤔",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 15 13:02:10 +0000 2022",
    "id_str": "1559163541483098114",
    "full_text": "first impressions with MBP M1: you can't use two external monitors? in 2022? what in the flying hell?",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Aug 13 12:57:00 +0000 2022",
    "id_str": "1558437463336464385",
    "full_text": "huge announcement in #rstats land: <br><br>the tidyverse is becoming <br>...<br>...<br>...<br>verse<br><br>#UniteTheVerse #FiveCharactersToRuleThemAll <a href=\"https://twitter.com/hadleywickham/status/1558206614343139328\">https://twitter.com/hadleywickham/status/1558206614343139328</a>",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Aug 12 21:55:15 +0000 2022",
    "id_str": "1558210530380320772",
    "full_text": "<a href=\"https://twitter.com/danmorse_\">@danmorse_</a> <a href=\"https://twitter.com/CowboysStats\">@CowboysStats</a> <a href=\"https://twitter.com/nflversetweets\">@nflversetweets</a> you two are in league with some guy trying to be rotoworld on facebook. i hope you're proud of yourselves,,, <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1558210530380320772-FZ_gKojWYAMgb1Z.png\"><img src=\"../../tweets_media/1558210530380320772-FZ_gKojWYAMgb1Z.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Aug 12 21:46:58 +0000 2022",
    "id_str": "1558208446322933762",
    "full_text": "<a href=\"https://twitter.com/CowboysStats/status/1556677252087222272?s=20&t=IqMY60fQBJFOTwRxVVfJ3A\">https://twitter.com/CowboysStats/status/1556677252087222272?s=20&t=IqMY60fQBJFOTwRxVVfJ3A</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Aug 12 21:45:33 +0000 2022",
    "id_str": "1558208090713083909",
    "full_text": "So here, #nflverse, a thread of said content<br><a href=\"https://twitter.com/CowboysStats/status/1557812986223497217?s=20&t=IqMY60fQBJFOTwRxVVfJ3A\">https://twitter.com/CowboysStats/status/1557812986223497217?s=20&t=IqMY60fQBJFOTwRxVVfJ3A</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Aug 12 21:41:34 +0000 2022",
    "id_str": "1558207089834688514",
    "full_text": "oh no, i'd hate to deprive the #nflverse of all the ...on/off splits... <a href=\"https://twitter.com/CowboysStats\">@CowboysStats</a> has been putting out,,,, <a href=\"https://twitter.com/CowboysStats/status/1558201787592712192\">https://twitter.com/CowboysStats/status/1558201787592712192</a>",
    "favorite_count": "5",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Aug 12 16:55:07 +0000 2022",
    "id_str": "1558135000431820800",
    "full_text": "<a href=\"https://twitter.com/nsgrantham\">@nsgrantham</a> Would still stand behind the low-level request wrapped by main functions + memoise caching/ ratelimiting ideas (zzz.R)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 11 16:26:30 +0000 2022",
    "id_str": "1557765410686210048",
    "full_text": "Gonna need to try this out next time I hit a non interactive bug! <a href=\"https://twitter.com/philosohacker/status/1557763842796560387\">https://twitter.com/philosohacker/status/1557763842796560387</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 11 13:09:05 +0000 2022",
    "id_str": "1557715728194740228",
    "full_text": "<div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1557715728194740228-FZ4eACOX0AEp7pR.png\"><img src=\"../../tweets_media/1557715728194740228-FZ4eACOX0AEp7pR.png\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 09 18:40:30 +0000 2022",
    "id_str": "1557074358522232833",
    "full_text": "<a href=\"https://twitter.com/creeeeeeeeeeg\">@creeeeeeeeeeg</a> <a href=\"https://twitter.com/EthanCDouglas\">@EthanCDouglas</a> <a href=\"https://twitter.com/kierisi\">@kierisi</a> Painful here meaning “can’t walk legs jelly” for two days lol",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 09 15:12:36 +0000 2022",
    "id_str": "1557022037251706882",
    "full_text": "I'm archiving all of the old and legacy nflverse repo data into nflverse-data-archives releases here:<br><a href=\"https://github.com/nflverse/nflverse-data-archives/\">https://github.com/nflverse/nflverse-data-archives/</a> <br><br>but you should be using the latest at nflverse/nflverse-data regardless :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 09 15:12:35 +0000 2022",
    "id_str": "1557022035506872323",
    "full_text": "BFG was awesome for keeping the git history of the code and deleting the bloat data files!<br><br><a href=\"https://rtyley.github.io/bfg-repo-cleaner/\">https://rtyley.github.io/bfg-repo-cleaner/</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 09 15:12:35 +0000 2022",
    "id_str": "1557022033128595456",
    "full_text": "Today I am grateful for <a href=\"https://twitter.com/rtyley\">@rtyley</a>'s BFG repo cleaner, which shrunk the nflfastR-roster repository from 6GB+ of bloat to 2.5MB 🌟<br><br>In other news, you will no longer find #nflverse roster data at the nflfastR-rosters repo - please use the new releases on nflverse-data. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1557022033128595456-FZumnn5X0AM2W-6.png\"><img src=\"../../tweets_media/1557022033128595456-FZumnn5X0AM2W-6.png\"></a></li><li><a href=\"../../tweets_media/1557022033128595456-FZumAyZXkAAm2Nd.png\"><img src=\"../../tweets_media/1557022033128595456-FZumAyZXkAAm2Nd.png\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Aug 08 20:13:51 +0000 2022",
    "id_str": "1556735463444168704",
    "full_text": "Loving all of the fun things that people are already doing with the latest #nflverse data! <a href=\"https://twitter.com/greerreNFL/status/1556734288120360961\">https://twitter.com/greerreNFL/status/1556734288120360961</a>",
    "favorite_count": "7",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Aug 08 16:10:22 +0000 2022",
    "id_str": "1556674187456139265",
    "full_text": "On/off splits are bad. But also 😝😝😝😝 <a href=\"https://twitter.com/benbbaldwin/status/1556670941719154693\">https://twitter.com/benbbaldwin/status/1556670941719154693</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 08 14:46:08 +0000 2022",
    "id_str": "1556652991016484864",
    "full_text": "Massive thanks to <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a>, <a href=\"https://twitter.com/John_B_Edwards\">@John_B_Edwards</a>, <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a>, and <a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> for their contributions and feedback on this release and the underlying data work behind it - this truly is an incredible community and I'm so grateful to be a part of it!",
    "favorite_count": "26",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Aug 08 14:46:08 +0000 2022",
    "id_str": "1556652989351432192",
    "full_text": "You can find the full release notes on the nflreadr website here: <a href=\"https://nflreadr.nflverse.com/news/index.html\">https://nflreadr.nflverse.com/news/index.html</a>",
    "favorite_count": "25",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Aug 08 14:46:07 +0000 2022",
    "id_str": "1556652987044470784",
    "full_text": "The #nflverse team is super stoked to share that nflreadr 1.3.0 is now available on CRAN 🎉 <br><br>This release caps a lot of the hard work we've been doing this offseason - it's packed with new data (participation! contracts! officials!) and some awesome new utilities🔨 <br><br>#rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1556652987044470784-FZpWzEAXwAUJlzj.png\"><img src=\"../../tweets_media/1556652987044470784-FZpWzEAXwAUJlzj.png\"></a></li><li><a href=\"../../tweets_media/1556652987044470784-FZpXmCbWIAI0WU8.png\"><img src=\"../../tweets_media/1556652987044470784-FZpXmCbWIAI0WU8.png\"></a></li><li><a href=\"../../tweets_media/1556652987044470784-FZpXT6iWAAIjzMY.jpg\"><img src=\"../../tweets_media/1556652987044470784-FZpXT6iWAAIjzMY.jpg\"></a></li></ul></div>",
    "favorite_count": "265",
    "retweet_count": "47"
  },
  {
    "created_at": "Sun Aug 07 21:31:38 +0000 2022",
    "id_str": "1556392646863736833",
    "full_text": "#nflverse approved. ® <a href=\"https://twitter.com/thomas_mock/status/1556385613565366272\">https://twitter.com/thomas_mock/status/1556385613565366272</a>",
    "favorite_count": "8",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Aug 07 17:00:55 +0000 2022",
    "id_str": "1556324522126675970",
    "full_text": "“Anything is possible in Shiny … with the appropriate amount of head bashing” strikes again - this is awesome! <a href=\"https://twitter.com/ashbaldry_/status/1555951874519568393\">https://twitter.com/ashbaldry_/status/1555951874519568393</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Aug 07 01:55:16 +0000 2022",
    "id_str": "1556096604695920642",
    "full_text": "This is awesome…even to someone who doesn’t like baseball much! <a href=\"https://twitter.com/jon_bois/status/1556015712220561408\">https://twitter.com/jon_bois/status/1556015712220561408</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Aug 04 19:48:16 +0000 2022",
    "id_str": "1555279470713610241",
    "full_text": "Whoa this usage is bonkers 🤯 I’m gonna need a while to digest these <a href=\"https://twitter.com/yjunechoe/status/1555277070896451585\">https://twitter.com/yjunechoe/status/1555277070896451585</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 02 01:37:43 +0000 2022",
    "id_str": "1554280248958656512",
    "full_text": "More photos here: <a href=\"https://photos.app.goo.gl/qrK73mg1sH3RJ1zd8\">https://photos.app.goo.gl/qrK73mg1sH3RJ1zd8</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 02 01:37:42 +0000 2022",
    "id_str": "1554280245959790592",
    "full_text": "<div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1554280245959790592-FZHolgCX0Ac8Mlm.jpg\"><img src=\"../../tweets_media/1554280245959790592-FZHolgCX0Ac8Mlm.jpg\"></a></li><li><a href=\"../../tweets_media/1554280245959790592-FZHkY6dWYAA9yRk.jpg\"><img src=\"../../tweets_media/1554280245959790592-FZHkY6dWYAA9yRk.jpg\"></a></li><li><a href=\"../../tweets_media/1554280245959790592-FZHkbT2XkAAdr4w.jpg\"><img src=\"../../tweets_media/1554280245959790592-FZHkbT2XkAAdr4w.jpg\"></a></li><li><a href=\"../../tweets_media/1554280245959790592-FZHkgz5X0AEX0WF.jpg\"><img src=\"../../tweets_media/1554280245959790592-FZHkgz5X0AEX0WF.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 02 01:37:40 +0000 2022",
    "id_str": "1554280235939545094",
    "full_text": "<div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1554280235939545094-FZHoWhOWAAcXs-d.jpg\"><img src=\"../../tweets_media/1554280235939545094-FZHoWhOWAAcXs-d.jpg\"></a></li><li><a href=\"../../tweets_media/1554280235939545094-FZHdkPKXEAA47hz.png\"><img src=\"../../tweets_media/1554280235939545094-FZHdkPKXEAA47hz.png\"></a></li><li><a href=\"../../tweets_media/1554280235939545094-FZHdmNkWIAE1-Xi.png\"><img src=\"../../tweets_media/1554280235939545094-FZHdmNkWIAE1-Xi.png\"></a></li><li><a href=\"../../tweets_media/1554280235939545094-FZHdn3ZXwAEMzyO.png\"><img src=\"../../tweets_media/1554280235939545094-FZHdn3ZXwAEMzyO.png\"></a></li></ul></div>",
    "favorite_count": "12",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Aug 02 01:37:38 +0000 2022",
    "id_str": "1554280229262295045",
    "full_text": "<div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1554280229262295045-FZHoDZfXoAYm2fQ.jpg\"><img src=\"../../tweets_media/1554280229262295045-FZHoDZfXoAYm2fQ.jpg\"></a></li><li><a href=\"../../tweets_media/1554280229262295045-FZHd69PWAAAPyg0.jpg\"><img src=\"../../tweets_media/1554280229262295045-FZHd69PWAAAPyg0.jpg\"></a></li><li><a href=\"../../tweets_media/1554280229262295045-FZHeCbMWQAEIa6q.png\"><img src=\"../../tweets_media/1554280229262295045-FZHeCbMWQAEIa6q.png\"></a></li><li><a href=\"../../tweets_media/1554280229262295045-FZHoLP3WQAI8SQ1.jpg\"><img src=\"../../tweets_media/1554280229262295045-FZHoLP3WQAI8SQ1.jpg\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Aug 02 01:37:36 +0000 2022",
    "id_str": "1554280220689108992",
    "full_text": "Sharing some of the memories as I visited DC for #rstudioconf2022  - meeting so many friends there and on the journey home! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1554280220689108992-FZHn2ZeWAAAgKxJ.jpg\"><img src=\"../../tweets_media/1554280220689108992-FZHn2ZeWAAAgKxJ.jpg\"></a></li><li><a href=\"../../tweets_media/1554280220689108992-FZHnDF9WAAE4nxX.jpg\"><img src=\"../../tweets_media/1554280220689108992-FZHnDF9WAAE4nxX.jpg\"></a></li><li><a href=\"../../tweets_media/1554280220689108992-FZHnH6qWYAMG4Q3.jpg\"><img src=\"../../tweets_media/1554280220689108992-FZHnH6qWYAMG4Q3.jpg\"></a></li><li><a href=\"../../tweets_media/1554280220689108992-FZHnJjnWYAAV3Qo.jpg\"><img src=\"../../tweets_media/1554280220689108992-FZHnJjnWYAAV3Qo.jpg\"></a></li></ul></div>",
    "favorite_count": "51",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Jul 29 15:04:09 +0000 2022",
    "id_str": "1553033645320962048",
    "full_text": "Sitting here reflecting on how incredible it was to spend time with so many of my friends and meet some of the wonderful people in the R community. <br><br>My heart is very full.",
    "favorite_count": "43",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Jul 28 19:37:22 +0000 2022",
    "id_str": "1552740014269898752",
    "full_text": "Folks - <a href=\"https://twitter.com/yjunechoe\">@yjunechoe</a> is doing an incredible job of giving an _approachable_ introduction to the deep magic of ggplot layer evaluation 🤯 <br><br>#rstudioconf2022 <a href=\"https://twitter.com/JonTheGeek/status/1552736327354957824\">https://twitter.com/JonTheGeek/status/1552736327354957824</a>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 28 12:53:46 +0000 2022",
    "id_str": "1552638446128316416",
    "full_text": "Don’t forget to look under your seats before the keynote today #rstudioconf2022 😝",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jul 28 11:03:09 +0000 2022",
    "id_str": "1552610605017751553",
    "full_text": "I've uploaded the v_final_because_i_presented_it.pptx version of my slides to this repo  <a href=\"https://github.com/tanho63/project_immortality\">https://github.com/tanho63/project_immortality</a> <br><br>and in true brand fashion I have also uploaded it to a release in that repo *cackles*<br><br>#rstudioconf2022 <a href=\"./_TanHo/status/1552376301905973249\">https://twitter.com/_TanHo/status/1552376301905973249</a>",
    "favorite_count": "10",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Jul 28 10:19:00 +0000 2022",
    "id_str": "1552599495380279298",
    "full_text": "💯Elite Emil Energy #rstudioconf2022 <a href=\"https://twitter.com/Emil_Hvitfeldt/status/1552490752894242816\">https://twitter.com/Emil_Hvitfeldt/status/1552490752894242816</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 27 21:31:52 +0000 2022",
    "id_str": "1552406441805447170",
    "full_text": "Carl's work with piggyback is incredible and the #nflverse has reaped a ton of the benefits - I've been super proud to help and spread the word at #rstudioconf2022! <a href=\"https://twitter.com/cboettig/status/1552403526927597572\">https://twitter.com/cboettig/status/1552403526927597572</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jul 27 20:52:51 +0000 2022",
    "id_str": "1552396624189685763",
    "full_text": "Joe Cheng is an absolute hero and I'm crying. Thank goodness I'm taking this in from my room.",
    "favorite_count": "29",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 27 19:32:06 +0000 2022",
    "id_str": "1552376301905973249",
    "full_text": "Holy crap, y’all. Thanks for all your support - overwhelmed. Now to actually enjoy the rest of the conf!",
    "favorite_count": "51",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 27 17:34:21 +0000 2022",
    "id_str": "1552346666510045184",
    "full_text": "<div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1552346666510045184-FYsLEC4WQAAGvE_.mp4\"></video></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 27 17:34:08 +0000 2022",
    "id_str": "1552346615024914434",
    "full_text": "I’m on in about 30 minutes! <a href=\"./_TanHo/status/1550532244380721153\">https://twitter.com/_TanHo/status/1550532244380721153</a>",
    "favorite_count": "17",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jul 27 13:35:32 +0000 2022",
    "id_str": "1552286569788227584",
    "full_text": "#rstudioconf2022 me, posit-ing<br><br><a href=\"https://imgur.com/ZhdTBP2\">https://imgur.com/ZhdTBP2</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 27 13:09:19 +0000 2022",
    "id_str": "1552279971476946944",
    "full_text": "#rstudioconf2022 kickoff wooooo! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1552279971476946944-FYrOZ7MXoAISw85.jpg\"><img src=\"../../tweets_media/1552279971476946944-FYrOZ7MXoAISw85.jpg\"></a></li></ul></div>",
    "favorite_count": "30",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jul 24 11:27:02 +0000 2022",
    "id_str": "1551167067595882498",
    "full_text": "#rstudioconf2022 lfggggg <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1551167067595882498-FYbaOWqXkAAebLx.jpg\"><img src=\"../../tweets_media/1551167067595882498-FYbaOWqXkAAebLx.jpg\"></a></li></ul></div>",
    "favorite_count": "55",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 23 19:40:58 +0000 2022",
    "id_str": "1550928978827157505",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> also we are making an og book club meetup happen cc <a href=\"https://twitter.com/Mayacelium\">@Mayacelium</a> <a href=\"https://twitter.com/TonyElHabr\">@TonyElHabr</a> <a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jul 22 17:24:29 +0000 2022",
    "id_str": "1550532244380721153",
    "full_text": "Packing and prepping furiously for #rstudioconf2022 next week, where I'll be TA-ing the \"Getting Started with Quarto\" workshop, giving a talk, and wandering the hallway track meeting up with so many of the awesome friends I've made! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1550532244380721153-FYSYOGhXkAAVthY.jpg\"><img src=\"../../tweets_media/1550532244380721153-FYSYOGhXkAAVthY.jpg\"></a></li></ul></div>",
    "favorite_count": "30",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Jul 22 16:57:35 +0000 2022",
    "id_str": "1550525474585120770",
    "full_text": "just leaving this here for all the shiny devs in my feed #rstats <br><br>(Jokes on me, I’m still a novice apparently!) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1550525474585120770-FYSSs4oXEAEd1Iw.jpg\"><img src=\"../../tweets_media/1550525474585120770-FYSSs4oXEAEd1Iw.jpg\"></a></li></ul></div>",
    "favorite_count": "18",
    "retweet_count": "3"
  },
  {
    "created_at": "Thu Jul 21 12:41:16 +0000 2022",
    "id_str": "1550098583655006209",
    "full_text": "<a href=\"https://twitter.com/GKountourides\">@GKountourides</a> For personal/non-user facing stuff I'd perhaps also include a roadmap of tasks/features for the project, including what's been done, what's in progress, what's up next, what's \"wishful\" and what's \"out of scope\"<br><br><a href=\"https://twitter.com/GKountourides/status/1550095598036160512\">https://twitter.com/GKountourides/status/1550095598036160512</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 20 19:55:55 +0000 2022",
    "id_str": "1549845581039865858",
    "full_text": "<a href=\"https://twitter.com/BeanEnjoyersCEO\">@BeanEnjoyersCEO</a> <a href=\"https://twitter.com/SeanfromSeabeck\">@SeanfromSeabeck</a> <a href=\"https://www.reddit.com/r/sportsbook/comments/qdlusb/warren_sharp_is_a_hack/\">https://www.reddit.com/r/sportsbook/comments/qdlusb/warren_sharp_is_a_hack/</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 18 14:02:57 +0000 2022",
    "id_str": "1549031975763251201",
    "full_text": "Wanted to especially thank <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> for his everpresent friendship and for being the sounding board to all of my ideas, smart and dumb alike. <br><br>I'm forever grateful for you pushing me into learning R and data - and holy fk we're both in sports data now!",
    "favorite_count": "19",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 18 14:00:58 +0000 2022",
    "id_str": "1549031476766937090",
    "full_text": "I've made a ton of friends: here on Twitter, while streaming on Twitch, and in the various online communities I'm a part of - thank you for the constant encouragement, and I'm so glad to be able to meet some of you in person real soon at rsconf/DC!",
    "favorite_count": "15",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 18 14:00:57 +0000 2022",
    "id_str": "1549031475374440450",
    "full_text": "I'm grateful to the ABIC team for giving me the start to my data career - it was the perfect pairing for my real estate domain knowledge and burgeoning interest in data science. It's a great team of people here in Ottawa, and a fantastic place to work.",
    "favorite_count": "12",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 18 14:00:57 +0000 2022",
    "id_str": "1549031473767804928",
    "full_text": "I couldn't be more excited to be chasing the dream into sports data as a career, and I'm delighted at the fit - especially being still able to help maintain the nflverse projects.",
    "favorite_count": "20",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 18 14:00:56 +0000 2022",
    "id_str": "1549031471150956547",
    "full_text": "A bit of personal news: closed the books on my work with Caivan/ABIC last week - now taking several weeks off (hello rstudioconf!) before starting some awesome new adventures with <a href=\"https://twitter.com/ZelusAnalytics\">@ZelusAnalytics</a> in August as an ML Eng with their Soccer team🎉",
    "favorite_count": "193",
    "retweet_count": "7"
  },
  {
    "created_at": "Mon Jul 18 12:07:51 +0000 2022",
    "id_str": "1549003010386296836",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> Had forgotten the other great part: can use lamb merguez sausage or any of the other fun flavours from the butcher!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jul 03 14:46:00 +0000 2023",
    "id_str": "1675878562308423681",
    "full_text": "<a href=\"https://twitter.com/7RoundsInApril\">@7RoundsInApril</a> is that primarily the \"didn't spend time on T1 because no early picks\" thing?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 08 01:22:36 +0000 2023",
    "id_str": "1666616684302442500",
    "full_text": "and the final products of stream here <a href=\"https://tanho63.github.io/rmed2023_stream/\">https://tanho63.github.io/rmed2023_stream/</a><br><br>and on the repo here:<br><a href=\"https://github.com/tanho63/rmed2023_stream/\">https://github.com/tanho63/rmed2023_stream/</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 08 01:22:36 +0000 2023",
    "id_str": "1666616682876379136",
    "full_text": "you can catch a stream replay here for the next 30-60 days and hopefully on the RMed YouTube channel shortly after that 🤞<br><br><a href=\"https://www.twitch.tv/videos/1840471210\">https://www.twitch.tv/videos/1840471210</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 08 01:22:35 +0000 2023",
    "id_str": "1666616681374859264",
    "full_text": "had a lot of fun streaming #rstats again for the first time in ages! big thanks to #rmed23 organizers and especially <a href=\"https://twitter.com/chendaniely\">@chendaniely</a> for pushing me😅<br><br>takeaways: <a href=\"https://twitter.com/statistishdan\">@statistishdan</a>'s {gtsummary} is OP, <a href=\"https://twitter.com/riannone\">@riannone</a>'s gt interactivity is Super Promising, and I'm glad IANAD (sorry mom) <a href=\"https://twitter.com/r_medicine/status/1666552862862893057\">https://twitter.com/r_medicine/status/1666552862862893057</a>",
    "favorite_count": "15",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Jul 13 17:06:09 +0000 2022",
    "id_str": "1547266139247476737",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> (obviously betting on Tucker is a fine choice if I *had* to go against my model)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jul 13 12:15:25 +0000 2022",
    "id_str": "1547192975188443138",
    "full_text": "I put together a lightweight website on top of this #SFB12 ADP data here <a href=\"https://sfb12.netlify.app/\">https://sfb12.netlify.app/</a> <br><br>It's searchable, updated every 15 minutes, and gives you ADP for combined MFL/Sleeper as well as a quick glance at best available (by adp) for each division! <a href=\"./_TanHo/status/1546586358231302149\">https://twitter.com/_TanHo/status/1546586358231302149</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1547192975188443138-FXi7tJrWQAIle4u.jpg\"><img src=\"../../tweets_media/1547192975188443138-FXi7tJrWQAIle4u.jpg\"></a></li><li><a href=\"../../tweets_media/1547192975188443138-FXi7vBEWQAAzsvn.jpg\"><img src=\"../../tweets_media/1547192975188443138-FXi7vBEWQAAzsvn.jpg\"></a></li></ul></div>",
    "favorite_count": "27",
    "retweet_count": "12"
  },
  {
    "created_at": "Mon Jul 11 21:23:12 +0000 2022",
    "id_str": "1546606054217318402",
    "full_text": "Santiago’s been hard at work on this #rstats package and it’s looking really promising! <a href=\"https://twitter.com/BrotoFFCasanova/status/1546601441451802624\">https://twitter.com/BrotoFFCasanova/status/1546601441451802624</a>",
    "favorite_count": "8",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Jul 11 20:04:56 +0000 2022",
    "id_str": "1546586358231302149",
    "full_text": "Have started compiling #sfb12 adp and draft picks for MFL and Sleeper into this repository - updated every ten minutes. <br><br>I'll try to write a static site wrapper to make this web friendly tonight or tomorrow! <a href=\"https://github.com/dynastyprocess/data-sfb12/releases\">https://github.com/dynastyprocess/data-sfb12/releases</a>",
    "favorite_count": "7",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Jul 08 21:25:12 +0000 2022",
    "id_str": "1545519395820142592",
    "full_text": "<a href=\"https://twitter.com/DWZ_DoctorPT\">@DWZ_DoctorPT</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/jverzosa2\">@jverzosa2</a> this work mostly measures past distributions of opportunity, which is foundational for starting to study how we can predict forwards with it",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Jul 08 21:23:44 +0000 2022",
    "id_str": "1545519023969927174",
    "full_text": "<a href=\"https://twitter.com/DWZ_DoctorPT\">@DWZ_DoctorPT</a> <a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/jverzosa2\">@jverzosa2</a> and data/code here <a href=\"https://github.com/ffverse/ffopportunity\">https://github.com/ffverse/ffopportunity</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jul 06 01:40:35 +0000 2022",
    "id_str": "1544496500998275073",
    "full_text": "I’m gonna love having a resource to point people at rather than just telling them <br><br>“list_thing %&gt;% tibble() %&gt;% unnest_wider(1)” go brrrrrr <a href=\"https://twitter.com/hadleywickham/status/1544470643047006208\">https://twitter.com/hadleywickham/status/1544470643047006208</a>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jul 02 01:19:05 +0000 2022",
    "id_str": "1543041536769785857",
    "full_text": "bye NA_character_, you probably won't be missed 😆 .default arg also pretty great ngl <a href=\"https://twitter.com/dvaughan32/status/1542942862077317121\">https://twitter.com/dvaughan32/status/1542942862077317121</a>",
    "favorite_count": "10",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 28 19:32:53 +0000 2022",
    "id_str": "1541867250185027587",
    "full_text": "<a href=\"https://twitter.com/StatsbyLopez\">@StatsbyLopez</a> I believe <a href=\"https://twitter.com/apreshill\">@apreshill</a> wrote a bit about un-breaking blogdown sites here, not sure if there's some specific tip here that may help <a href=\"https://www.apreshill.com/blog/2020-12-blogdown-checks/\">https://www.apreshill.com/blog/2020-12-blogdown-checks/</a>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 28 15:14:18 +0000 2022",
    "id_str": "1541802176460324864",
    "full_text": "This looks really interesting for anyone interested in data viz - free online conf live now! <a href=\"https://t.co/b2hUJ90JH5\">https://t.co/b2hUJ90JH5</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 27 13:31:17 +0000 2022",
    "id_str": "1541413862989352961",
    "full_text": "<a href=\"https://twitter.com/statistishdan\">@statistishdan</a> (can you render the example pkgdown into a ghpages, otherwise?)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 23 22:23:42 +0000 2022",
    "id_str": "1540098298798899201",
    "full_text": "<a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> <a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> *looks at ugly af snip effort*<br>*remembers tom made a package for this*<br><br>ahh, much better <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1540098298798899201-FV-HONDWIAAH8YX.png\"><img src=\"../../tweets_media/1540098298798899201-FV-HONDWIAAH8YX.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 22 13:33:35 +0000 2022",
    "id_str": "1539602501644820482",
    "full_text": "And that's a wrap! Thanks to <a href=\"https://twitter.com/zoowalk\">@zoowalk</a> for an interesting question :) <br><br>TLDR: <br>devtools curl request -&gt; <br>curlconverter -&gt; <br>??? -&gt; <br>smash into tibble -&gt; <br>profit! <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1539602501644820482-FV3EUAZXEAEYC_M.mp4\"></video></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 22 13:33:33 +0000 2022",
    "id_str": "1539602493679800320",
    "full_text": "Lastly, to finish this up, let's throw this data object into a tibble with my favourite path from list to tibble: <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1539602493679800320-FV3DcX9XkAE_9Dr.jpg\"><img src=\"../../tweets_media/1539602493679800320-FV3DcX9XkAE_9Dr.jpg\"></a></li><li><a href=\"../../tweets_media/1539602493679800320-FV3Dq7AXgAA_nIu.png\"><img src=\"../../tweets_media/1539602493679800320-FV3Dq7AXgAA_nIu.png\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 22 13:33:32 +0000 2022",
    "id_str": "1539602489179258880",
    "full_text": "Okay! Now back to the original question: there's only 10 responses, how do you get all of them? <br><br>Let's inspect the request we're sending to see if there's anything obvious...oh! there's a filter parameter where broj = 10. What happens if we up that to 100? We get 66 locations! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1539602489179258880-FV3C5uEWIAQdrIk.png\"><img src=\"../../tweets_media/1539602489179258880-FV3C5uEWIAQdrIk.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 22 13:33:31 +0000 2022",
    "id_str": "1539602485320552449",
    "full_text": "Notice that this code can be quite a messy infodump! I like to (with trial and error) reduce the code down as much as possible to the minimum header/cookies/request that will return the data I want. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1539602485320552449-FV3CRSCX0AAoqNR.png\"><img src=\"../../tweets_media/1539602485320552449-FV3CRSCX0AAoqNR.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 22 13:33:30 +0000 2022",
    "id_str": "1539602480388096000",
    "full_text": "I typically start most of these scraping adventures by going to devtools and copying the curl request that provides the data, then pasting that into <a href=\"https://curlconverter.com/#r\">https://curlconverter.com/#r</a> <br><br>This gives you a great starting point by exactly replicating the request that gave you the data <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1539602480388096000-FV2_D_8WQAQPIiV.png\"><img src=\"../../tweets_media/1539602480388096000-FV2_D_8WQAQPIiV.png\"></a></li><li><a href=\"../../tweets_media/1539602480388096000-FV3ANlmWYAExvei.png\"><img src=\"../../tweets_media/1539602480388096000-FV3ANlmWYAExvei.png\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 22 13:33:29 +0000 2022",
    "id_str": "1539602476445335555",
    "full_text": "{Roland goes on to provide a great reprex, which we'll skip for this thread - but you can join us at <a href=\"https://r4ds.io/join\">https://r4ds.io/join</a> and check it out!}<br><br>Also TLDR gist here <a href=\"https://gist.github.com/tanho63/cf96f83f207bf3998c53ce9b85647a6e\">https://gist.github.com/tanho63/cf96f83f207bf3998c53ce9b85647a6e</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jun 22 13:33:29 +0000 2022",
    "id_str": "1539602474503397377",
    "full_text": "A quick thread on finding and scraping API data with #rstats, based on a question from Roland in <a href=\"https://twitter.com/R4DScommunity\">@R4DScommunity</a>! <br><br>Roland: \"For a project, I am collecting data on bank branch locations. One such bank is <a href=\"https://www.zaba.hr/home/en/map\">https://www.zaba.hr/home/en/map</a>. How can I access this via R, and get all branches?\" <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1539602474503397377-FV3ESauWQAEj1EM.mp4\"></video></li></ul></div>",
    "favorite_count": "51",
    "retweet_count": "5"
  },
  {
    "created_at": "Fri Jun 17 20:51:17 +0000 2022",
    "id_str": "1537900713652539394",
    "full_text": "<a href=\"https://twitter.com/Plowking1985\">@Plowking1985</a> <a href=\"https://twitter.com/DustinRoss30\">@DustinRoss30</a> wonder if we'll get enough to do a live draft 🤞also, we should do a discord chat once people start filling in :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jun 17 14:48:13 +0000 2022",
    "id_str": "1537809343470571520",
    "full_text": "🥹 value over flex replacement argument for kickers, YLTSI! <a href=\"https://twitter.com/KentWeyrauch/status/1537807064990461954\">https://twitter.com/KentWeyrauch/status/1537807064990461954</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 16 15:16:06 +0000 2022",
    "id_str": "1537453974420443136",
    "full_text": "<a href=\"https://twitter.com/CoopsFB\">@CoopsFB</a> <a href=\"https://twitter.com/DwayneB13\">@DwayneB13</a> I’m not gonna lie that there’s a nice side benefit of dunking on the casuals who eyeball rosters when evaluating, rather than access with an api 😅",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jun 16 12:39:13 +0000 2022",
    "id_str": "1537414492971229187",
    "full_text": "I can only imagine what my life would have been like had I gotten hooked on sports data and programming this early in life 🤯<br><br>Pranav’s leading an intro sports analytics workshop for Grade 7-11 … and for charity, too 👇 #rstats #nflverse <a href=\"https://twitter.com/_pranavrajaram/status/1537167381138653191\">https://twitter.com/_pranavrajaram/status/1537167381138653191</a>",
    "favorite_count": "22",
    "retweet_count": "7"
  },
  {
    "created_at": "Wed Jun 15 13:56:53 +0000 2022",
    "id_str": "1537071649228472321",
    "full_text": "Jason’s doing fantastic work on this and it’s been a pleasure to chip in a little where I can! <a href=\"https://twitter.com/jaseziv/status/1537050638810759168\">https://twitter.com/jaseziv/status/1537050638810759168</a>",
    "favorite_count": "10",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 14 16:40:36 +0000 2022",
    "id_str": "1536750464670244864",
    "full_text": "i've managed to wrap my head around a lot of data.table stuff but I still pull this out when I need unnesting...and somehow I do need it a lot! <a href=\"https://twitter.com/markfairbanks10/status/1536690924230569984\">https://twitter.com/markfairbanks10/status/1536690924230569984</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 13 18:00:25 +0000 2022",
    "id_str": "1536408161879564289",
    "full_text": "gtExtras is already so crucial to the gt table ecosystem - very glad to see it on CRAN! <a href=\"https://twitter.com/thomas_mock/status/1536387423244103684\">https://twitter.com/thomas_mock/status/1536387423244103684</a>",
    "favorite_count": "28",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Jun 13 15:53:24 +0000 2022",
    "id_str": "1536376195087990784",
    "full_text": "A Bechdel test for conferences: <br><br>Are there women, non-white, and LGBTQ people speaking about something OTHER than diversity and equality? <a href=\"https://twitter.com/sarahrimmington/status/1536354620812959750\">https://twitter.com/sarahrimmington/status/1536354620812959750</a>",
    "favorite_count": "20",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jun 13 15:42:21 +0000 2022",
    "id_str": "1536373414293917699",
    "full_text": "fuckin lol <a href=\"https://twitter.com/dannyfunt/status/1536340698143801344\">https://twitter.com/dannyfunt/status/1536340698143801344</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1536373414293917699-FVJLeIGWUAIfnYV.png\"><img src=\"../../tweets_media/1536373414293917699-FVJLeIGWUAIfnYV.png\"></a></li><li><a href=\"../../tweets_media/1536373414293917699-FVJLBcfWQAEYOKQ.png\"><img src=\"../../tweets_media/1536373414293917699-FVJLBcfWQAEYOKQ.png\"></a></li></ul></div>",
    "favorite_count": "11",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon May 30 17:36:51 +0000 2022",
    "id_str": "1531328801740832773",
    "full_text": "Have noticed this among programmers too! Forgetting what it's like to be a beginner or intermediate programmer is a real problem for giving the right level of advice/help <a href=\"https://twitter.com/hobdaydesign/status/1531327974187868161\">https://twitter.com/hobdaydesign/status/1531327974187868161</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 25 20:10:10 +0000 2022",
    "id_str": "1529555447048552448",
    "full_text": "<a href=\"https://twitter.com/eric_drz/status/1529551929155719168\">https://twitter.com/eric_drz/status/1529551929155719168</a> <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1529555447048552448-FToSkZOXsAAn1Nx.mp4\"></video></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 25 04:20:42 +0000 2022",
    "id_str": "1529316505342685184",
    "full_text": "<a href=\"https://twitter.com/domluszczyszyn/status/1529312827936317440\">https://twitter.com/domluszczyszyn/status/1529312827936317440</a> <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1529316505342685184-FTk5QQJXsAEbDXs.mp4\"></video></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 20 20:26:30 +0000 2022",
    "id_str": "1527747617605799936",
    "full_text": "in a \"user story\" sense: <br><br>I, as the user, would like to edit the contents of the document template in word and have a bunch of numbers populate the doc from R. I don't want to update an RMD that builds a word doc.",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 20 20:22:07 +0000 2022",
    "id_str": "1527746513501405184",
    "full_text": "I *think* this may be possible with <a href=\"https://twitter.com/DavidGohel\">@DavidGohel</a>'s officer? <br><br>Exploring down this path shortly but if anyone's previously done work/guides on this please let me know😅",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 20 20:20:09 +0000 2022",
    "id_str": "1527746015952084993",
    "full_text": "hey #rstats, I know you can knit RMDs/Quarto to a word doc with a reference style, but does anyone know of (guides/tutorials/past work) on more of a glue/mail-merge style interface to put text fields into an existing document with contents?",
    "favorite_count": "1",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed May 18 20:06:30 +0000 2022",
    "id_str": "1527017809137618947",
    "full_text": "Hey <a href=\"https://twitter.com/j_druzzi\">@j_druzzi</a> what did it list when you applied? <a href=\"https://twitter.com/TeamWorkOnline/status/1526999588560723969\">https://twitter.com/TeamWorkOnline/status/1526999588560723969</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1527017809137618947-FTEOZHEWIAEJ66k.png\"><img src=\"../../tweets_media/1527017809137618947-FTEOZHEWIAEJ66k.png\"></a></li></ul></div>",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 16 20:06:26 +0000 2022",
    "id_str": "1526293016406900736",
    "full_text": "<a href=\"https://twitter.com/LisaDeBruine\">@LisaDeBruine</a> for ref my namespace ends up looking like this <a href=\"https://github.com/ffverse/ffsimulator/blob/main/NAMESPACE\">https://github.com/ffverse/ffsimulator/blob/main/NAMESPACE</a> and yours looks similar<br><a href=\"https://github.com/debruine/webmorphR/blob/master/NAMESPACE\">https://github.com/debruine/webmorphR/blob/master/NAMESPACE</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri May 13 01:14:44 +0000 2022",
    "id_str": "1524921048893882374",
    "full_text": "Oh my god it gets better and better and better <a href=\"https://twitter.com/chargers/status/1524902549353951232\">https://twitter.com/chargers/status/1524902549353951232</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 11 21:39:57 +0000 2022",
    "id_str": "1524504608768462851",
    "full_text": "<a href=\"https://twitter.com/LisaDeBruine\">@LisaDeBruine</a> basically, if I'm running this in a script I just want you to overwrite it - that's on me if I mess up. If i'm running interactively, ask me if I want to overwrite... I think.",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 11 21:04:55 +0000 2022",
    "id_str": "1524495794799321090",
    "full_text": "Or, yknow, just buy me a coffee, that’ll make my head feel better in no time 😝<br><br><a href=\"https://ko-fi.com/tanho\">https://ko-fi.com/tanho</a>",
    "favorite_count": "8",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed May 11 21:04:55 +0000 2022",
    "id_str": "1524495792836333568",
    "full_text": "Help, a brick has hit me in the head! Raising money for medical expenses 👇 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1524495792836333568-FSgY18iXEAELZXF.jpg\"><img src=\"../../tweets_media/1524495792836333568-FSgY18iXEAELZXF.jpg\"></a></li></ul></div>",
    "favorite_count": "12",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Jun 07 22:33:21 +0000 2023",
    "id_str": "1666574091715846147",
    "full_text": "help, i've forgotten how to stream! will knock off a bit of streamer rust while digging into the latest version of {gt} by <a href=\"https://twitter.com/riannone\">@riannone</a> and looking a completely alien dataset to me ⚕<br><br>live in about 30 minutes! <a href=\"https://twitter.com/r_medicine/status/1666552862862893057\">https://twitter.com/r_medicine/status/1666552862862893057</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 06 21:40:11 +0000 2023",
    "id_str": "1666198322149728256",
    "full_text": "for anyone following along with my struggles from earlier today, this is the winning solution<br><br>#rstats community is the best 🙌thank you all <a href=\"https://twitter.com/markfairbanks10/status/1666170832996167680\">https://twitter.com/markfairbanks10/status/1666170832996167680</a>",
    "favorite_count": "5",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Jun 06 16:35:10 +0000 2023",
    "id_str": "1666121564461445135",
    "full_text": "<a href=\"https://twitter.com/topepos\">@topepos</a> in other words, length(df) is bad, length(vec) is good, but can't easily identify all bad cases and want it to scream loudly where to fix (so I can prioritize based on frequency/importance of usage)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 06 15:19:38 +0000 2023",
    "id_str": "1666102553921085440",
    "full_text": "gist of current code: <a href=\"https://gist.github.com/tanho63/4a3064c653b2a7aba11cd99a75172de9\">https://gist.github.com/tanho63/4a3064c653b2a7aba11cd99a75172de9</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 06 15:17:18 +0000 2023",
    "id_str": "1666101970069774336",
    "full_text": "hate pinging <a href=\"https://twitter.com/hadleywickham\">@hadleywickham</a> on this but I really don't know who else I should be pinging 😓",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 06 15:16:36 +0000 2023",
    "id_str": "1666101790935248897",
    "full_text": "In short, I want it to follow the override behaviour specifically if:<br>- the user calls length(obj) directly<br>- an internally developed package calls length(obj)<br><br>I do have a list of said packages to work with if that's helpful? (can I use memory addresses for each pkg env?)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 06 15:11:56 +0000 2023",
    "id_str": "1666100616152711168",
    "full_text": "Deep dark #rstats nerd problem with a custom S3 method for length() - screenshot of context + my current thought process. <br><br>I know it's a hacky solve. Is there something clearly better? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1666100616152711168-Fx8tlY8XwAYvjaM.png\"><img src=\"../../tweets_media/1666100616152711168-Fx8tlY8XwAYvjaM.png\"></a></li><li><a href=\"../../tweets_media/1666100616152711168-Fx8tXPEWYAA_IlR.png\"><img src=\"../../tweets_media/1666100616152711168-Fx8tXPEWYAA_IlR.png\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Jun 06 14:24:38 +0000 2023",
    "id_str": "1666088715108876289",
    "full_text": "via <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jun 06 14:21:47 +0000 2023",
    "id_str": "1666087996314226692",
    "full_text": "making a (brief?) Twitch comeback tomorrow night looking at medical data in a tidytuesday ish way! <br><br>#rstats <a href=\"https://twitter.com/r_medicine/status/1666079242189443076\">https://twitter.com/r_medicine/status/1666079242189443076</a>",
    "favorite_count": "16",
    "retweet_count": "4"
  },
  {
    "created_at": "Mon May 09 01:31:51 +0000 2022",
    "id_str": "1523475804104978433",
    "full_text": "<a href=\"https://twitter.com/SeanfromSeabeck\">@SeanfromSeabeck</a> <a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> <a href=\"https://twitter.com/17Rance\">@17Rance</a> <a href=\"https://twitter.com/CoachVass\">@CoachVass</a> (hello, yes, resident github actions stan checking in, don't mind me)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu May 05 18:06:45 +0000 2022",
    "id_str": "1522276629761900544",
    "full_text": "cooper ff newsletter incoming. sign up, he thinks good 👇 <a href=\"https://twitter.com/CoopsFB/status/1522273965170999296\">https://twitter.com/CoopsFB/status/1522273965170999296</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 02 00:02:41 +0000 2022",
    "id_str": "1520916648991109120",
    "full_text": "You can follow my twitch channel here: <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 02 00:02:40 +0000 2022",
    "id_str": "1520916647623680000",
    "full_text": "In about an hour (9pm ET) I'll be streaming some work on optimizing a shiny app, which may or may not include explorations in shiny JS and/or some refactoring of tidyverse to data.table!",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Apr 30 13:12:33 +0000 2022",
    "id_str": "1520390650885197825",
    "full_text": "Final leaderboard and entries here: <a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Apr 30 13:12:32 +0000 2022",
    "id_str": "1520390647903145985",
    "full_text": "Congrats to <a href=\"https://twitter.com/bootzfantasy\">@bootzfantasy</a> and <a href=\"https://twitter.com/eric_drz\">@eric_drz</a> for winning the Draft Contest -  both hung onto their Day 1 leads and beat out strong Day 2 pushes by <a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> and <a href=\"https://twitter.com/TAlbTree\">@TAlbTree</a>! <br><br>They'll get prizes courtesy of <a href=\"https://twitter.com/LateRoundQB\">@LateRoundQB</a> and <a href=\"https://twitter.com/campus2canton\">@campus2canton</a> 🎉<br><br>We also raised &gt;$200 for <a href=\"https://twitter.com/MercyCorps\">@MercyCorps</a>! <a href=\"./_TanHo/status/1520096128498384903\">https://twitter.com/_TanHo/status/1520096128498384903</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1520390647903145985-FRmBhjiXwAIC3-w.jpg\"><img src=\"../../tweets_media/1520390647903145985-FRmBhjiXwAIC3-w.jpg\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Apr 29 17:42:14 +0000 2022",
    "id_str": "1520096132537503746",
    "full_text": "Full scoreboard here: <a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 29 17:42:13 +0000 2022",
    "id_str": "1520096128498384903",
    "full_text": "Round one scores so far have <a href=\"https://twitter.com/BootzFantasy\">@BootzFantasy</a> and <a href=\"https://twitter.com/eric_drz\">@eric_drz</a> leading with three correct team matches - but plenty of points to come tonight! <a href=\"./_TanHo/status/1519653068643741696\">https://twitter.com/_TanHo/status/1519653068643741696</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1520096128498384903-FRh3LovWQAAfVHz.png\"><img src=\"../../tweets_media/1520096128498384903-FRh3LovWQAAfVHz.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Apr 29 02:18:52 +0000 2022",
    "id_str": "1519863760495775746",
    "full_text": "i thought i was salty last year with najee<br>nvm i'm saltier now",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 28 23:35:19 +0000 2022",
    "id_str": "1519822601010524162",
    "full_text": "Here's last year's: <a href=\"./_TanHo/status/1388866609910063108?s=20&t=RdSYVcp0f_JXTN5kwsFchQ\">https://twitter.com/_TanHo/status/1388866609910063108?s=20&t=RdSYVcp0f_JXTN5kwsFchQ</a> (a QT chain that goes all the way back to 2019)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 28 23:35:19 +0000 2022",
    "id_str": "1519822598670012416",
    "full_text": "Taking a snapshot of my predraft rookie thoughts for 2022 as per my usual annual process - I like to see how my thoughts change immediately after the draft and it's also fun to look at how past years went! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1519822598670012416-FRd9-yeWYAQygB8.png\"><img src=\"../../tweets_media/1519822598670012416-FRd9-yeWYAQygB8.png\"></a></li><li><a href=\"../../tweets_media/1519822598670012416-FRd9W_OXMAIlBiB.png\"><img src=\"../../tweets_media/1519822598670012416-FRd9W_OXMAIlBiB.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 28 15:26:38 +0000 2022",
    "id_str": "1519699619235741696",
    "full_text": "<a href=\"https://twitter.com/SethWalder\">@SethWalder</a> <a href=\"https://twitter.com/KentWeyrauch\">@KentWeyrauch</a> Also fill out mine while you're doing these :)  <a href=\"./_TanHo/status/1518592038463283200?s=20&t=lwxpAQDK_zdf3emDGHtWiA\">https://twitter.com/_TanHo/status/1518592038463283200?s=20&t=lwxpAQDK_zdf3emDGHtWiA</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 28 12:21:57 +0000 2022",
    "id_str": "1519653142870249473",
    "full_text": "<a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 28 12:21:40 +0000 2022",
    "id_str": "1519653068643741696",
    "full_text": "It's draft day! Get your predictions in, support a great charity, and win awesome prizes! <a href=\"./_TanHo/status/1518592038463283200\">https://twitter.com/_TanHo/status/1518592038463283200</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Apr 28 02:56:44 +0000 2022",
    "id_str": "1519510899891003392",
    "full_text": "cc <a href=\"https://twitter.com/CowboysStats\">@CowboysStats</a> <a href=\"https://twitter.com/dril/status/1519117965207105539\">https://twitter.com/dril/status/1519117965207105539</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Apr 27 17:38:58 +0000 2022",
    "id_str": "1519370532558356485",
    "full_text": "<a href=\"https://twitter.com/iamrahstradamus\">@iamrahstradamus</a> <a href=\"https://twitter.com/HutchNGo\">@HutchNGo</a> here's to you hutch - i'm grateful for all of the positivity in the brief moments we crossed paths online - ever an inspiration to us all",
    "favorite_count": "20",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Apr 26 14:50:46 +0000 2022",
    "id_str": "1518965818666762240",
    "full_text": "cool nflreadr stuff on the horizon: a oneliner to mass download some or all of the #nflverse releases (in your preferred format!) to a local folder. <br><br>Here's \"all of nflverse-data in parquet format\" in two minutes: <a href=\"https://streamable.com/yee7wv\">https://streamable.com/yee7wv</a>",
    "favorite_count": "7",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Apr 25 14:05:31 +0000 2022",
    "id_str": "1518592040443039749",
    "full_text": "This year, we'll be supporting <a href=\"https://twitter.com/MercyCorps\">@MercyCorps</a> - doing awesome humanitarian work in Ukraine, Romania, and Poland right now!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Apr 25 14:05:30 +0000 2022",
    "id_str": "1518592038463283200",
    "full_text": "HAPPY NFL DRAFT WEEK, EVERYONE! The <a href=\"https://twitter.com/DynastyProcess\">@DynastyProcess</a> Draft Contest is back with some awesome prizes courtesy of <a href=\"https://twitter.com/LateRoundQB\">@LateRoundQB</a>  and <a href=\"https://twitter.com/campus2canton\">@campus2canton</a> - can you predict QBs/RBs/WRs/TEs that go in the first two rounds of the draft?<br><br><a href=\"https://apps.dynastyprocess.com/draftcontest\">https://apps.dynastyprocess.com/draftcontest</a>",
    "favorite_count": "10",
    "retweet_count": "9"
  },
  {
    "created_at": "Sun Apr 24 22:08:24 +0000 2022",
    "id_str": "1518351173891276800",
    "full_text": "been a while, but I think I'll be dusting off some of my streaming equipment and working on something tonight around 8 or 9 pm (EDT)<br><br>i've been meaning to work on a few outstanding issues for the piggyback package so it'll probably be that!",
    "favorite_count": "14",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Apr 22 13:25:30 +0000 2022",
    "id_str": "1517494806850818049",
    "full_text": "I'M PRESENTING A TALK AT #rstudioconf AND I'M SO FREAKING EXCITED! <br><br>Talk is tentatively titled: \"Levelling Up with GitHub: How To Automate Powerful Open Source Data Projects For Free!\" and I'll be taking you behind the scenes of some cool #nflverse projects!<br><br>#rstats <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1517494806850818049-FQ85e0aWUAEJDlH.mp4\"></video></li></ul></div>",
    "favorite_count": "152",
    "retweet_count": "12"
  },
  {
    "created_at": "Fri Apr 22 01:20:32 +0000 2022",
    "id_str": "1517312364915351552",
    "full_text": "<a href=\"https://twitter.com/pahowdy\">@pahowdy</a> <a href=\"https://twitter.com/Jake_FFDude\">@Jake_FFDude</a> <a href=\"https://twitter.com/YZR_Fantasy\">@YZR_Fantasy</a> <a href=\"https://twitter.com/JTRB1\">@JTRB1</a> <a href=\"https://twitter.com/4WhomJBellTolls\">@4WhomJBellTolls</a> <a href=\"https://twitter.com/Maatspencer\">@Maatspencer</a> CSV downloads here <a href=\"https://github.com/ffverse/ffopportunity/releases/tag/latest-data\">https://github.com/ffverse/ffopportunity/releases/tag/latest-data</a>",
    "favorite_count": "6",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Apr 20 01:49:22 +0000 2022",
    "id_str": "1516594842964484096",
    "full_text": "made a dumb that slowed this down a bunch. have fixed. <br><br>relatedly: friendship ended with f7autocomplete, f7smartselect is my new best fren 😍 <a href=\"./_TanHo/status/1515296188999905282\">https://twitter.com/_TanHo/status/1515296188999905282</a>",
    "favorite_count": "6",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Apr 16 12:24:24 +0000 2022",
    "id_str": "1515305106060763137",
    "full_text": "I’m eternally grateful to the continued awesome work by <a href=\"https://twitter.com/divadnojnarg\">@divadnojnarg</a> on the shinyMobile package, without which this app would not be possible 🙏 <a href=\"https://rinterface.github.io/shinyMobile/\">https://rinterface.github.io/shinyMobile/</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Apr 16 11:48:59 +0000 2022",
    "id_str": "1515296192586203144",
    "full_text": "Also adding a Ko-fi page link if you’d like to help support the calculator: <a href=\"https://ko-fi.com/tanho\">https://ko-fi.com/tanho</a>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Apr 16 11:48:59 +0000 2022",
    "id_str": "1515296191407398917",
    "full_text": "You can find the latest here: <a href=\"https://apps.dynastyprocess.com/calculator\">https://apps.dynastyprocess.com/calculator</a> (and you can add it to your Home Screen so it behaves like a mobile app!)",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Apr 16 11:48:58 +0000 2022",
    "id_str": "1515296188999905282",
    "full_text": "Rolling out some improvements to the <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> trade calc this morning, including caching valuation settings, searchable player values, and an overall UI facelift! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1515296188999905282-FQdp2cIWYAIlrlB.jpg\"><img src=\"../../tweets_media/1515296188999905282-FQdp2cIWYAIlrlB.jpg\"></a></li><li><a href=\"../../tweets_media/1515296188999905282-FQdp2cHXEAE7JcG.jpg\"><img src=\"../../tweets_media/1515296188999905282-FQdp2cHXEAE7JcG.jpg\"></a></li><li><a href=\"../../tweets_media/1515296188999905282-FQdp2cHXEAQui8N.jpg\"><img src=\"../../tweets_media/1515296188999905282-FQdp2cHXEAQui8N.jpg\"></a></li></ul></div>",
    "favorite_count": "26",
    "retweet_count": "3"
  },
  {
    "created_at": "Sat Apr 09 14:41:57 +0000 2022",
    "id_str": "1512803005636169729",
    "full_text": "here's what firefox has to say about it:<br><br><a href=\"https://support.mozilla.org/en-US/kb/firefox-dns-over-https?as=u&utm_source=inproduct\">https://support.mozilla.org/en-US/kb/firefox-dns-over-https?as=u&utm_source=inproduct</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Apr 09 14:37:43 +0000 2022",
    "id_str": "1512801939318267908",
    "full_text": "firefox routing dns to a partner service is...good? bad? <br><br>my first reaction is \"bad\" but opinions welcomed - cc <a href=\"https://twitter.com/hrbrmstr\">@hrbrmstr</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Apr 06 14:51:17 +0000 2022",
    "id_str": "1511718190342098946",
    "full_text": "Seb doing awesome work to make nfl plots easier! <a href=\"https://twitter.com/mrcaseb/status/1511717741794938880\">https://twitter.com/mrcaseb/status/1511717741794938880</a>",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 23 23:09:55 +0000 2022",
    "id_str": "1506770246484561923",
    "full_text": "Me, minding my own business, thinking about what the Chiefs are gonna get with their new rookie pick haul<br><br>PFF app be like: MALIK WILLIS TO THE PACKERS <br><br>I blame <a href=\"https://twitter.com/PFF_Eric\">@PFF_Eric</a> 🤣🤣🤣 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1506770246484561923-FOkfMWRWYAQyFu_.jpg\"><img src=\"../../tweets_media/1506770246484561923-FOkfMWRWYAQyFu_.jpg\"></a></li></ul></div>",
    "favorite_count": "39",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Mar 23 22:52:01 +0000 2022",
    "id_str": "1506765739570733065",
    "full_text": "RStudio autosave 🤯 #rstats <a href=\"https://twitter.com/hadleywickham/status/1506760493263900681\">https://twitter.com/hadleywickham/status/1506760493263900681</a>",
    "favorite_count": "21",
    "retweet_count": "6"
  },
  {
    "created_at": "Tue Mar 22 22:06:03 +0000 2022",
    "id_str": "1506391783911141379",
    "full_text": "<a href=\"https://twitter.com/joshmccrain\">@joshmccrain</a> (mostly in-case you wanted to rebuild all of that data from scratch for whatever reason)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 22 18:07:13 +0000 2022",
    "id_str": "1506331679740289026",
    "full_text": "webscraping! instant retweet <a href=\"https://twitter.com/slcrug/status/1506330423802019843\">https://twitter.com/slcrug/status/1506330423802019843</a>",
    "favorite_count": "10",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 21 13:59:18 +0000 2022",
    "id_str": "1505906903632822272",
    "full_text": "Huge thank yous to:<br><br>- GitHub Releases for being an awesome resource<br>- <a href=\"https://twitter.com/cboettig\">@cboettig</a> for his work on the {piggyback} package that makes working with Releases so darn easy<br>- <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> for his support and feedback <br>- the #nflverse community for being fantastic and a huge inspiration",
    "favorite_count": "5",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Mar 21 13:59:18 +0000 2022",
    "id_str": "1505906902420672527",
    "full_text": "Please update any direct URL references to files, we'll be archiving them by August 2022 so your code may no longer work if they're hardlinking the various old repos. (If you're using nflreadr, just updating the package version will keep your code working!)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 21 13:59:18 +0000 2022",
    "id_str": "1505906900856094726",
    "full_text": "nflreadr 1.2.0 is now on CRAN and has been updated to access the new data locations. It also features a fun new pretty-print method I've been playing with for a little while now 🎨 <a href=\"./_TanHo/status/1503725844698734592\">https://twitter.com/_TanHo/status/1503725844698734592</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 21 13:59:17 +0000 2022",
    "id_str": "1505906899182620678",
    "full_text": "You may also notice a handy new status page that shows automation status as well as last update times of the various data frames, courtesy of <a href=\"https://twitter.com/shields_io\">@shields_io</a> 🛡 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1505906899182620678-FOYKmGPXMAMIVlX.png\"><img src=\"../../tweets_media/1505906899182620678-FOYKmGPXMAMIVlX.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 21 13:59:16 +0000 2022",
    "id_str": "1505906895047045123",
    "full_text": "The new central repository is located here: <a href=\"https://github.com/nflverse/nflverse-data\">https://github.com/nflverse/nflverse-data</a> and you can access the various data files from the Releases menu. <br><br>We've also increased support for various file types and now aim to provide RDS, parquet, and raw/uncompressed CSVs for every release! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1505906895047045123-FOYLbUaXoAQWiLu.jpg\"><img src=\"../../tweets_media/1505906895047045123-FOYLbUaXoAQWiLu.jpg\"></a></li><li><a href=\"../../tweets_media/1505906895047045123-FOYMGogWQAI4ngW.jpg\"><img src=\"../../tweets_media/1505906895047045123-FOYMGogWQAI4ngW.jpg\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 21 13:59:15 +0000 2022",
    "id_str": "1505906890278113285",
    "full_text": "Important #nflverse updates: we've reorganized the data automation to push into releases of a single repo (nflverse-data), and will deprecate (ie stop updating) the previous repos. <br><br>We recommend all #rstats users update to nflreadr 1.2.0+ which is now available on ✨CRAN ✨ <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1505906890278113285-FOYOVABXIAANA9O.mp4\"></video></li></ul></div>",
    "favorite_count": "48",
    "retweet_count": "6"
  },
  {
    "created_at": "Wed Mar 16 16:06:05 +0000 2022",
    "id_str": "1504126869469290500",
    "full_text": "just <a href=\"https://twitter.com/tejfbanalytics\">@tejfbanalytics</a> things <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1504126869469290500-FN-7amwXIAM5PHO.png\"><img src=\"../../tweets_media/1504126869469290500-FN-7amwXIAM5PHO.png\"></a></li></ul></div>",
    "favorite_count": "17",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Mar 16 13:05:09 +0000 2022",
    "id_str": "1504081335794679820",
    "full_text": "(yes i know the scaling is off i need to fix it etc etc but hell yea)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 13:04:34 +0000 2022",
    "id_str": "1504081186775261188",
    "full_text": "FOLKS IMA LET YOU FINISH BUT <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> MAKES THE EASIEST WAY TO PLOT IMAGES AS GEOM POINTS AND HE'S THE GREATEST OF ALL TIME (minorly excited) <a href=\"./_TanHo/status/1503924875131604993\">https://twitter.com/_TanHo/status/1503924875131604993</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1504081186775261188-FN-RYJfWQAAxfEs.jpg\"><img src=\"../../tweets_media/1504081186775261188-FN-RYJfWQAAxfEs.jpg\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 12:50:05 +0000 2022",
    "id_str": "1504077543141482502",
    "full_text": "Imitating the work of others is essential in so many of the areas I’m in (fantasy football creator, data analysis, programming) and there’s no reason not to build on awesome past work. I love this guide to good and bad “theft” (c/o STEAL LIKE AN ARTIST) <a href=\"https://twitter.com/JohnBoschFF/status/1504061738928553986\">https://twitter.com/JohnBoschFF/status/1504061738928553986</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1504077543141482502-FN-OjZYXsAEkTV_.jpg\"><img src=\"../../tweets_media/1504077543141482502-FN-OjZYXsAEkTV_.jpg\"></a></li></ul></div>",
    "favorite_count": "11",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 02:43:26 +0000 2022",
    "id_str": "1503924875131604993",
    "full_text": "A little more time tweaking, subbing out point shapes and fixing up axes and breaks. Things I probably should try to remember to get during the actual competition, probably. Next time! <a href=\"./_TanHo/status/1503920548153339907\">https://twitter.com/_TanHo/status/1503920548153339907</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1503924875131604993-FN8DnMXX0AAvPPI.png\"><img src=\"../../tweets_media/1503924875131604993-FN8DnMXX0AAvPPI.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 02:30:44 +0000 2022",
    "id_str": "1503921679432568835",
    "full_text": "Very impressed by <a href=\"https://twitter.com/drob\">@drob</a>'s work on the spline/logit curves in his rendition - looking forward to seeing his code when he posts it :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 02:29:10 +0000 2022",
    "id_str": "1503921285075812358",
    "full_text": "which overall didn't turn out too hot. I'm fine with it though, not something I expected myself to know offhand before this started.",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 02:29:10 +0000 2022",
    "id_str": "1503921284115226627",
    "full_text": "I think my overall strategy of \"well lets get a minimum submission and then figure out the biggest value add\" is a pretty decent one. I got the points/size/lines in 20 minutes and spent the last half of my time trying various ways to get ggimage or ggtext poppy images working...",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 02:26:15 +0000 2022",
    "id_str": "1503920550091046916",
    "full_text": "Repo with code here: <a href=\"https://github.com/tanho63/vizbuzz/tree/main/vizbuzz03\">https://github.com/tanho63/vizbuzz/tree/main/vizbuzz03</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 16 02:26:14 +0000 2022",
    "id_str": "1503920548153339907",
    "full_text": "Faced off against <a href=\"https://twitter.com/drob\">@drob</a> and <a href=\"https://twitter.com/redickio\">@redickio</a> tonight in #VizBuzz with an incredibly challenging replication: Poppy Fields by <a href=\"https://twitter.com/defilippovale\">@defilippovale</a><br>Left is the goal, right is my efforts in 40 minutes. Had fun and I think I'm getting better at it overall! Huge shouts to <a href=\"https://twitter.com/nickwan\">@nickwan</a> for organizing🔥 <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1503920548153339907-FN7-6onXEAMFh1X.jpg\"><img src=\"../../tweets_media/1503920548153339907-FN7-6onXEAMFh1X.jpg\"></a></li><li><a href=\"../../tweets_media/1503920548153339907-FN7--b9XMAgmRmS.png\"><img src=\"../../tweets_media/1503920548153339907-FN7--b9XMAgmRmS.png\"></a></li></ul></div>",
    "favorite_count": "44",
    "retweet_count": "5"
  },
  {
    "created_at": "Tue Mar 15 13:32:36 +0000 2022",
    "id_str": "1503725855255764996",
    "full_text": "Code here:<br><br>nflreadr print: <a href=\"https://github.com/nflverse/nflreadr/blob/main/R/utils.R#L50-L62\">https://github.com/nflverse/nflreadr/blob/main/R/utils.R#L50-L62</a><br><br>nflseedr summaries by <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a>: <a href=\"https://github.com/nflverse/nflseedR/blob/master/R/summary_nflseedR.R\">https://github.com/nflverse/nflseedR/blob/master/R/summary_nflseedR.R</a><br><br>ffsimulator plots: <a href=\"https://github.com/ffverse/ffsimulator/blob/main/R/9_autoplot.R\">https://github.com/ffverse/ffsimulator/blob/main/R/9_autoplot.R</a>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 15 13:32:35 +0000 2022",
    "id_str": "1503725852588228612",
    "full_text": "Or even provide a couple of predefined plots instead! Here are some ffsimulator automatic plots for wins, season rank, and points: <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1503725852588228612-FN5OjdiWUAMvwS_.png\"><img src=\"../../tweets_media/1503725852588228612-FN5OjdiWUAMvwS_.png\"></a></li><li><a href=\"../../tweets_media/1503725852588228612-FN5NTZ-X0AA6uMp.png\"><img src=\"../../tweets_media/1503725852588228612-FN5NTZ-X0AA6uMp.png\"></a></li><li><a href=\"../../tweets_media/1503725852588228612-FN5NVTmWYAIzfpG.jpg\"><img src=\"../../tweets_media/1503725852588228612-FN5NVTmWYAIzfpG.jpg\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 15 13:32:34 +0000 2022",
    "id_str": "1503725847546630150",
    "full_text": "Automatically summarise the output of a complex NFL season simulation with a gorgeous {gt} table: <a href=\"https://twitter.com/mrcaseb/status/1503433939276505089\">https://twitter.com/mrcaseb/status/1503433939276505089</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 15 13:32:33 +0000 2022",
    "id_str": "1503725844698734592",
    "full_text": "You can use S3 print methods to help users know what dataset they're looking at and when it was last updated (in the user's time zone!)  by accessing some metadata attributes included in the dataframe <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1503725844698734592-FN5OWmtXwAMudxB.jpg\"><img src=\"../../tweets_media/1503725844698734592-FN5OWmtXwAMudxB.jpg\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 15 13:32:33 +0000 2022",
    "id_str": "1503725840995172353",
    "full_text": "S3 methods are an awesome addition to your toolbox as an #rstats package developer! Here are a few neat examples from some #nflverse projects for prettier printing, summarising, and autoplotting: <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1503725840995172353-FN5L5zbWQAEAnMt.jpg\"><img src=\"../../tweets_media/1503725840995172353-FN5L5zbWQAEAnMt.jpg\"></a></li><li><a href=\"../../tweets_media/1503725840995172353-FN5K9o3XsAMJcFl.jpg\"><img src=\"../../tweets_media/1503725840995172353-FN5K9o3XsAMJcFl.jpg\"></a></li><li><a href=\"../../tweets_media/1503725840995172353-FN5LnevXMAYPvr4.png\"><img src=\"../../tweets_media/1503725840995172353-FN5LnevXMAYPvr4.png\"></a></li></ul></div>",
    "favorite_count": "35",
    "retweet_count": "4"
  },
  {
    "created_at": "Fri Jun 02 15:38:47 +0000 2023",
    "id_str": "1664657824704606209",
    "full_text": "<a href=\"https://twitter.com/statsowar\">@statsowar</a> I’m only like half kidding as well tbh <a href=\"https://twitter.com/AdamHarstad/status/1431365397933080576\">https://twitter.com/AdamHarstad/status/1431365397933080576</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 29 12:26:32 +0000 2023",
    "id_str": "1663159888468488193",
    "full_text": "<a href=\"https://twitter.com/nflversetweets\">@nflversetweets</a> special thanks to <a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> for putting up with the twitter oauth app stuff, and to <a href=\"https://twitter.com/mattdray\">@mattdray</a> for the original tutorial (and similar pour out for <a href=\"https://twitter.com/londonmapbot\">@londonmapbot</a>)",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon May 29 12:25:38 +0000 2023",
    "id_str": "1663159663578284032",
    "full_text": "<a href=\"https://twitter.com/nflversetweets\">@nflversetweets</a> not sure whether we'll manage to resurrect it or what will replace it. join us on the nflverse discord and share your work there! <a href=\"https://discord.gg/UCKxQyuPw5\">https://discord.gg/UCKxQyuPw5</a>",
    "favorite_count": "5",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon May 29 12:21:31 +0000 2023",
    "id_str": "1663158627329343488",
    "full_text": "rip <a href=\"https://twitter.com/nflversetweets\">@nflversetweets</a>, you had a great run 🫡 have really enjoyed seeing everyone's work come through the feed<br><br>#nflverse #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1663158627329343488-FxQheP8XsAAriaU.png\"><img src=\"../../tweets_media/1663158627329343488-FxQheP8XsAAriaU.png\"></a></li><li><a href=\"../../tweets_media/1663158627329343488-FxS48wzX0AED7e2.jpg\"><img src=\"../../tweets_media/1663158627329343488-FxS48wzX0AED7e2.jpg\"></a></li></ul></div>",
    "favorite_count": "21",
    "retweet_count": "5"
  },
  {
    "created_at": "Tue Mar 15 02:48:57 +0000 2022",
    "id_str": "1503563876419485701",
    "full_text": "<a href=\"https://twitter.com/PipingHotData\">@PipingHotData</a> alternatively (and less confidently) try readr::write_csv(…,quote = “all”)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 12 03:53:14 +0000 2022",
    "id_str": "1502492889275904006",
    "full_text": "Parallel to this, suffering from depression doesn’t *always* involve suicidal thoughts: I put off getting help because I *didn’t* have them - I sank into deep, unfeeling pits of emptiness and couldn’t muster energy to get out of bed. Your struggles are valid &amp; worthy of help 🙏 <a href=\"https://twitter.com/AdamHarstad/status/1502348725125013514\">https://twitter.com/AdamHarstad/status/1502348725125013514</a>",
    "favorite_count": "16",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Mar 11 22:34:55 +0000 2022",
    "id_str": "1502412781018046469",
    "full_text": "Absolutely love seeing the artistic process unfold here from Jacquie! #rstats #rtistry <a href=\"https://t.co/zsEvuuGaN3\">https://t.co/zsEvuuGaN3</a>",
    "favorite_count": "2",
    "retweet_count": "2"
  },
  {
    "created_at": "Thu Mar 10 15:50:20 +0000 2022",
    "id_str": "1501948577509097480",
    "full_text": "blindly versioning binary files is a recipe for getting rekt by your own automated data repo<br><br>data: 60 MB uncompressed<br>.git version storage: 3.7 GB compressed and growing daily (60x size!)<br>innocent maintainer trying to update code locally: (┛ಠ_ಠ)┛彡┻━┻ <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1501948577509097480-FNf7ug-VUAI1DIp.png\"><img src=\"../../tweets_media/1501948577509097480-FNf7ug-VUAI1DIp.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 09 04:53:58 +0000 2022",
    "id_str": "1501421010842705921",
    "full_text": "<a href=\"https://twitter.com/mlfurman3\">@mlfurman3</a> Oh and the numbers were wrong anyway 😅😅😅",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 09 04:21:52 +0000 2022",
    "id_str": "1501412930990051335",
    "full_text": "With a bit more time, I figured out the various text pieces at least...but I probably should dig out the original code and figure out how this geom_hex-ish thing was done! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1501412930990051335-FNYW-qBXoAIzXI4.png\"><img src=\"../../tweets_media/1501412930990051335-FNYW-qBXoAIzXI4.png\"></a></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 09 04:20:59 +0000 2022",
    "id_str": "1501412708771586048",
    "full_text": "<a href=\"https://twitter.com/qntkhvn\">@qntkhvn</a>*",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 09 04:08:58 +0000 2022",
    "id_str": "1501409686645616640",
    "full_text": "I landed on the barplot first and got most of the styling I wanted, but then went off into several rabbit holes trying to get something similar to the hexagons....",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 09 04:08:57 +0000 2022",
    "id_str": "1501409683143340038",
    "full_text": "#VizBuzz round two: replicating <a href=\"https://twitter.com/geokaramanis\">@geokaramanis</a>'s bee colonies plot in 30 minutes! I have no idea how the hex patterning happened, and I missed out on the text labels below😦 <br><br>I felt pretty OK with this overall, huge props to <a href=\"https://twitter.com/mlfurman3\">@mlfurman3</a> <a href=\"https://twitter.com/alexpax6\">@alexpax6</a> <a href=\"https://twitter.com/scottrcole\">@scottrcole</a> <a href=\"https://twitter.com/qntkvhn\">@qntkvhn</a><br>and <a href=\"https://twitter.com/nickwan\">@nickwan</a>! <a href=\"./_TanHo/status/1501295103092019202\">https://twitter.com/_TanHo/status/1501295103092019202</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1501409683143340038-FNYSz7OXwA81cgC.jpg\"><img src=\"../../tweets_media/1501409683143340038-FNYSz7OXwA81cgC.jpg\"></a></li><li><a href=\"../../tweets_media/1501409683143340038-FNYT0PvXoAkCf3F.png\"><img src=\"../../tweets_media/1501409683143340038-FNYT0PvXoAkCf3F.png\"></a></li><li><a href=\"../../tweets_media/1501409683143340038-FNYT_H1WQAImyKB.png\"><img src=\"../../tweets_media/1501409683143340038-FNYT_H1WQAImyKB.png\"></a></li></ul></div>",
    "favorite_count": "10",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 08 23:55:43 +0000 2022",
    "id_str": "1501345953911123969",
    "full_text": "Excited to dig into <a href=\"https://twitter.com/kenjilopezalt\">@kenjilopezalt</a>’s new book, The Wok! A true culinary hero. <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1501345953911123969-FNXaL8hXIAAcdJB.jpg\"><img src=\"../../tweets_media/1501345953911123969-FNXaL8hXIAAcdJB.jpg\"></a></li></ul></div>",
    "favorite_count": "12",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 08 21:08:54 +0000 2022",
    "id_str": "1501303972321271809",
    "full_text": "<a href=\"https://twitter.com/benbbaldwin\">@benbbaldwin</a> (not sure if this is <a href=\"https://twitter.com/PFF_Moo\">@PFF_Moo</a> feedback but I see he's in this thread) Eric Gray was available to select for some reason, he's not in this draft class iirc",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Mar 08 20:33:39 +0000 2022",
    "id_str": "1501295103092019202",
    "full_text": "As ever, I'm a sucker for punishment: catch me (swearing about) viz at 10pm ET tonight<br>#VizBuzz <a href=\"https://twitter.com/nickwan/status/1501288368268709890\">https://twitter.com/nickwan/status/1501288368268709890</a>",
    "favorite_count": "12",
    "retweet_count": "1"
  },
  {
    "created_at": "Tue Mar 08 17:01:53 +0000 2022",
    "id_str": "1501241809363681283",
    "full_text": "\"I've spent years developing insider relationships with Aaron and he just ... tweeted it out?!\" <a href=\"https://twitter.com/PatMcAfeeShow/status/1501238616281997317\">https://twitter.com/PatMcAfeeShow/status/1501238616281997317</a>",
    "favorite_count": "11",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Mar 07 19:45:07 +0000 2022",
    "id_str": "1500920500511518724",
    "full_text": "legitimately the three books I recommend most often to folks looking to get started in creative/analytics/data work <a href=\"https://twitter.com/austinkleon/status/1500913403120046080\">https://twitter.com/austinkleon/status/1500913403120046080</a>",
    "favorite_count": "7",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Mar 07 16:05:22 +0000 2022",
    "id_str": "1500865197040447491",
    "full_text": "Better infographic here, folks: <a href=\"https://twitter.com/CoryRAanalytics/status/1500822427118542849\">https://twitter.com/CoryRAanalytics/status/1500822427118542849</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1500865197040447491-FNQkvP1WUAkm2PN.png\"><img src=\"../../tweets_media/1500865197040447491-FNQkvP1WUAkm2PN.png\"></a></li></ul></div>",
    "favorite_count": "27",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Mar 06 17:45:52 +0000 2022",
    "id_str": "1500528102111424519",
    "full_text": "sneak peek of some #nflverse readme swag upgrades courtesy of <a href=\"https://twitter.com/shields_io\">@shields_io</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1500528102111424519-FNLyDcPXIAEBc1w.jpg\"><img src=\"../../tweets_media/1500528102111424519-FNLyDcPXIAEBc1w.jpg\"></a></li></ul></div>",
    "favorite_count": "10",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Mar 06 16:37:04 +0000 2022",
    "id_str": "1500510785969303561",
    "full_text": "I think I'm on team doors here after factoring in cabinets/appliances/furniture <a href=\"https://twitter.com/NewYorkNixon/status/1500000428985286657\">https://twitter.com/NewYorkNixon/status/1500000428985286657</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Mar 05 20:18:44 +0000 2022",
    "id_str": "1500204184062287873",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> I wouldn't be surprised if they were ~ exactly the same if you're selecting for \"QBs who are fantasy relevant at age 30\" vs \"QBs who are fantasy relevant at age 24",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 21:01:51 +0000 2022",
    "id_str": "1499852646047494148",
    "full_text": "oh hello there #nflverse <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1499852646047494148-FNCL43rX0AARL-H.jpg\"><img src=\"../../tweets_media/1499852646047494148-FNCL43rX0AARL-H.jpg\"></a></li></ul></div>",
    "favorite_count": "22",
    "retweet_count": "2"
  },
  {
    "created_at": "Fri Mar 04 14:20:47 +0000 2022",
    "id_str": "1499751715419078663",
    "full_text": "(regrets not tagging the rstats hashtag lul)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 14:17:27 +0000 2022",
    "id_str": "1499750877220978696",
    "full_text": "cool skimr stuff you can do: grouped stat summaries in seconds! here's forty yard dash stat summaries by position <a href=\"./_TanHo/status/1499750464635781126\">https://twitter.com/_TanHo/status/1499750464635781126</a>",
    "favorite_count": "11",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 14:09:32 +0000 2022",
    "id_str": "1499748882883956737",
    "full_text": "<a href=\"https://twitter.com/statsowar\">@statsowar</a> merry christmas <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1499748882883956737-FNAtqO5XoAEXSyv.jpg\"><img src=\"../../tweets_media/1499748882883956737-FNAtqO5XoAEXSyv.jpg\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 13:59:27 +0000 2022",
    "id_str": "1499746347989323776",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> (I think you and I are on same page but reading hard)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 13:52:08 +0000 2022",
    "id_str": "1499744502751412232",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> come to the daRk side we have ~~cookies~~ all of my hard work thinking about this shit",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 02:45:32 +0000 2022",
    "id_str": "1499576748903698435",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> One of the differences from your approach which uses actual scores is that it doesn't get as skewed by teams having deebo/kupp etc, since it interprets teams by preseason rank primarily",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 02:43:19 +0000 2022",
    "id_str": "1499576191166078978",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> Odds of bye, to compare to your previous experiment <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1499576191166078978-FM-QkA9WQAA7pYt.jpg\"><img src=\"../../tweets_media/1499576191166078978-FM-QkA9WQAA7pYt.jpg\"></a></li></ul></div>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 02:34:26 +0000 2022",
    "id_str": "1499573956176752640",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> Sim data here, in parquet format summarised to the season level (250 seasons x 287 leagues). <br><br><a href=\"https://github.com/dynastyprocess/data-safeleagues_sim\">https://github.com/dynastyprocess/data-safeleagues_sim</a> <br><br>The best-ranked team wins somewhere between 21 and 34 percent of the time and centers at about 25% <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1499573956176752640-FM-ObdYWUA03xRL.jpg\"><img src=\"../../tweets_media/1499573956176752640-FM-ObdYWUA03xRL.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Mar 04 00:01:08 +0000 2022",
    "id_str": "1499535375043338240",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> long list of caveats aside, i'll start a job tonight and we'll see how it goes :)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Mar 03 23:59:53 +0000 2022",
    "id_str": "1499535061825249280",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> Plus does not account for a whole offseason's worth of trading nor rookies etc",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Mar 03 23:56:30 +0000 2022",
    "id_str": "1499534212722053126",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> But in the meantime I can more or less already tell you the odds a team finishes with the most wins",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Mar 03 23:55:00 +0000 2022",
    "id_str": "1499533833275953162",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> I just need to write out playoff bracket handling and I can probably tell you this for any given league",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Mar 03 18:39:50 +0000 2022",
    "id_str": "1499454518765010951",
    "full_text": "<a href=\"https://twitter.com/brianmcleish2\">@brianmcleish2</a> <a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> \"How many improve their league-relative performance? How many improve their league-relative value?\" etc. By definition they should be adding more pick value just by virtue of being shitty in Y0, so perhaps measuring January to January would be the more interesting?",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 02 19:28:05 +0000 2022",
    "id_str": "1499104272822190085",
    "full_text": "Adding + NULL to the end of a ggplot chain helps you comment out previous lines and iterate faster! <br><br>Relatedly, did you know you can use 1=1 in SQL's WHERE and JOIN clauses for the same effect? <a href=\"./_TanHo/status/1499082434897395712\">https://twitter.com/_TanHo/status/1499082434897395712</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1499104272822190085-FM3jE_eWUAAZqyg.png\"><img src=\"../../tweets_media/1499104272822190085-FM3jE_eWUAAZqyg.png\"></a></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "1"
  },
  {
    "created_at": "Wed Mar 02 04:52:09 +0000 2022",
    "id_str": "1498883837480345608",
    "full_text": "GGs to all my vizbuzz pilot 1 frens: <a href=\"https://twitter.com/drob\">@drob</a> <a href=\"https://twitter.com/imkeller_5\">@imkeller_5</a> <a href=\"https://twitter.com/solplots\">@solplots</a> <a href=\"https://twitter.com/TonyElHabr\">@TonyElHabr</a> <a href=\"https://twitter.com/JennaJrdn\">@JennaJrdn</a> <a href=\"https://twitter.com/mlfurman3\">@mlfurman3</a> <a href=\"https://twitter.com/statsowar\">@statsowar</a> isomore and a massive massive shoutout to <a href=\"https://twitter.com/nickwan\">@nickwan</a> for hosting a fun new competition! <br><br>Looking forward to VizBuzz next Tuesday!  <a href=\"https://twitch.tv/nickwan_datasci\">https://twitch.tv/nickwan_datasci</a>",
    "favorite_count": "10",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 02 04:13:00 +0000 2022",
    "id_str": "1498873983470551044",
    "full_text": "(also I had fun and you can catch <a href=\"https://twitter.com/mlfurman3\">@mlfurman3</a> and <a href=\"https://twitter.com/statsowar\">@statsowar</a> going at it right now on <a href=\"https://twitch.tv/nickwan_datasci\">https://twitch.tv/nickwan_datasci</a>!)",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 02 03:57:35 +0000 2022",
    "id_str": "1498870106683813898",
    "full_text": "vizbuzz, pilot 1. I STG IF I HAVE TO DO US MAPS EVER AGAIN I WILL FLIP A TABLE <a href=\"https://twitter.com/nickwan/status/1498413298529837057\">https://twitter.com/nickwan/status/1498413298529837057</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1498870106683813898-FM0OajyXsAMGW_W.jpg\"><img src=\"../../tweets_media/1498870106683813898-FM0OajyXsAMGW_W.jpg\"></a></li><li><a href=\"../../tweets_media/1498870106683813898-FM0N-dFXMAEar3v.png\"><img src=\"../../tweets_media/1498870106683813898-FM0N-dFXMAEar3v.png\"></a></li></ul></div>",
    "favorite_count": "27",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Mar 02 01:55:51 +0000 2022",
    "id_str": "1498839468622626819",
    "full_text": "Giving this a go tonight! I’ll be on around 9:45 ET <a href=\"https://twitter.com/nickwan/status/1498413298529837057\">https://twitter.com/nickwan/status/1498413298529837057</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 28 21:26:20 +0000 2022",
    "id_str": "1498409257104035842",
    "full_text": "More gems in this talk by Andy Harris <a href=\"https://www.youtube.com/watch?v=YWwBhjQN-Qw\">https://www.youtube.com/watch?v=YWwBhjQN-Qw</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 28 21:26:20 +0000 2022",
    "id_str": "1498409255258439691",
    "full_text": "In most cases (especially with #rstats), you can figure out \"what\" code is doing. It's far more important to understand \"why\" you wrote this code - that's where *starting* with a comment first and then writing code to explain the comment to the computer is so useful! <a href=\"./_TanHo/status/1498407029945389058\">https://twitter.com/_TanHo/status/1498407029945389058</a>",
    "favorite_count": "9",
    "retweet_count": "3"
  },
  {
    "created_at": "Mon Feb 28 21:19:03 +0000 2022",
    "id_str": "1498407423475916803",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> Aha, I was right - this talk is fantastic! <a href=\"https://www.youtube.com/watch?v=YWwBhjQN-Qw&feature=youtu.be\">https://www.youtube.com/watch?v=YWwBhjQN-Qw&feature=youtu.be</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 28 16:45:36 +0000 2022",
    "id_str": "1498338608629047298",
    "full_text": "(oops, forgot to add code alt text, code here:  <a href=\"https://gist.github.com/tanho63/1f00506651dbed28f67bff9b20cbbdc2\">https://gist.github.com/tanho63/1f00506651dbed28f67bff9b20cbbdc2</a>)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 28 13:20:54 +0000 2022",
    "id_str": "1498287093101047813",
    "full_text": "A fun expansion that I'll look into this year is trying to aggregate tweets with search terms for top players and/or rookies - so that it's easier than mining the Twitter API for sentiment analysis...",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 28 13:20:54 +0000 2022",
    "id_str": "1498287091570118658",
    "full_text": "Hey FF nerds! I've been keeping track of <a href=\"https://twitter.com/32BeatWriters\">@32BeatWriters</a>  tweets in this data repository: <br> <br><a href=\"https://github.com/dynastyprocess/data-fantasytweetarchives/releases/tag/32beatwriters\">https://github.com/dynastyprocess/data-fantasytweetarchives/releases/tag/32beatwriters</a><br><br>If you're looking to get started with sentiment analysis and other NLP projects, this could be an interesting place to start! #nflverse #rstats",
    "favorite_count": "28",
    "retweet_count": "8"
  },
  {
    "created_at": "Mon Feb 28 13:03:36 +0000 2022",
    "id_str": "1498282740491431939",
    "full_text": "<a href=\"https://twitter.com/mdneuzerling\">@mdneuzerling</a> I forget where I first heard this, something like <a href=\"https://twitter.com/jessiedotjs/status/1357924244559196161\">https://twitter.com/jessiedotjs/status/1357924244559196161</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 23 17:11:50 +0000 2022",
    "id_str": "1496533270783303688",
    "full_text": "<a href=\"https://twitter.com/mixedknuts\">@mixedknuts</a> <a href=\"https://twitter.com/friscojosh\">@friscojosh</a> <a href=\"https://twitter.com/SethPartnow\">@SethPartnow</a> and in Air Yard's defense, it lines up with passing/rushing/receiving yards being related to scrimmage positions!",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 23 17:09:58 +0000 2022",
    "id_str": "1496532799548973056",
    "full_text": "<a href=\"https://twitter.com/mixedknuts\">@mixedknuts</a> <a href=\"https://twitter.com/friscojosh\">@friscojosh</a> <a href=\"https://twitter.com/SethPartnow\">@SethPartnow</a> <a href=\"https://nextgenstats.nfl.com/glossary\">https://nextgenstats.nfl.com/glossary</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 23 16:35:47 +0000 2022",
    "id_str": "1496524196092030976",
    "full_text": "<a href=\"https://twitter.com/AdamHarstad\">@AdamHarstad</a> <a href=\"https://twitter.com/LateRoundQB\">@LateRoundQB</a> give me the guy with higher range of outcomes when playing over a lower/tighter range of outcomes",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 23 16:35:08 +0000 2022",
    "id_str": "1496524032975548424",
    "full_text": "<a href=\"https://twitter.com/AdamHarstad\">@AdamHarstad</a> <a href=\"https://twitter.com/LateRoundQB\">@LateRoundQB</a> my trouble with this is that it's all hindsight biased - you don't know the 10-15 ppg guy will play every game including championship week, and you don't know 20 ppg guy is gonna be injured halfway through the season. Given that injury probabiliity is roughly the same for both...",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 23 14:15:53 +0000 2022",
    "id_str": "1496488989729202178",
    "full_text": "Bylaws:  <a href=\"https://docs.google.com/document/d/1o0xa9ZxLzwahO3YNAflFX5HcE2OJ2YKwA91AoAIawTs/view\">https://docs.google.com/document/d/1o0xa9ZxLzwahO3YNAflFX5HcE2OJ2YKwA91AoAIawTs/view</a> # will be updated/revised again this offseason<br><br>League link: <a href=\"https://www60.myfantasyleague.com/2021/home/22627#0\">https://www60.myfantasyleague.com/2021/home/22627#0</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 23 14:15:52 +0000 2022",
    "id_str": "1496488987669766159",
    "full_text": "Looking for replacement coaches and GMs for the Four Eight Dynasty League - a superflex salary sap #FFIDP league where every team is run by a group of at least two and up to four co-managers! <br><br>Details in screenshot, send me a DM if you're interested! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1496488987669766159-FMSYJTNXEAEqUTm.png\"><img src=\"../../tweets_media/1496488987669766159-FMSYJTNXEAEqUTm.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "3"
  },
  {
    "created_at": "Mon May 22 23:03:56 +0000 2023",
    "id_str": "1660783584137949185",
    "full_text": "<a href=\"https://twitter.com/matthewdwood82\">@matthewdwood82</a> <a href=\"https://twitter.com/brodriguesco\">@brodriguesco</a> <a href=\"https://twitter.com/dgkeyes\">@dgkeyes</a> in hindsight I think the framing of “here’s an example of when you’d need to automate something” is important (grounding in practicals etc)<br><br>very interested to see your take on it!",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 10 17:29:03 +0000 2023",
    "id_str": "1656350651582906390",
    "full_text": "My #shinyconf talk recording is finally up! It gives an overview of how I think about debugging Shiny apps 🐛<br><br>#rstats<br><br><a href=\"https://www.youtube.com/watch?v=x764Y1qz_iQ\">https://www.youtube.com/watch?v=x764Y1qz_iQ</a>",
    "favorite_count": "28",
    "retweet_count": "11"
  },
  {
    "created_at": "Thu May 04 17:27:50 +0000 2023",
    "id_str": "1654176016737206272",
    "full_text": "Mueller was last an NFL GM of the Dolphins in 2005-2007. <br><br>In the 2005 NFL Draft the Dolphins had the second overall pick, and two QB prospects were vying for the 1.01 pick: Alex Smith and…Aaron Rodgers. <br><br>✨the more you know ✨ <a href=\"https://twitter.com/friscojosh/status/1654162458960076801\">https://twitter.com/friscojosh/status/1654162458960076801</a>",
    "favorite_count": "6",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Feb 21 21:18:48 +0000 2022",
    "id_str": "1495870647481819139",
    "full_text": "At some point in the future I'd like to fully flesh out examples for every path on this flowchart, I know I've got a good chunk of it already done in that repository. Maybe expand it to a small bookdown? not sure!",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 21 21:18:48 +0000 2022",
    "id_str": "1495870646181638159",
    "full_text": "Link here: <a href=\"https://github.com/tanho63/office_hours/blob/main/20210719-scraping/scraping.md\">https://github.com/tanho63/office_hours/blob/main/20210719-scraping/scraping.md</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Feb 21 21:18:48 +0000 2022",
    "id_str": "1495870644285853697",
    "full_text": "was playing with GitHub markdown's new mermaid integration and started drafting a flowchart on web scraping with #rstats <br><br>I'm really liking mermaid so far and want to start using it instead of LucidChart! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1495870644285853697-FMJlLN5XEAQE5yc.jpg\"><img src=\"../../tweets_media/1495870644285853697-FMJlLN5XEAQE5yc.jpg\"></a></li></ul></div>",
    "favorite_count": "169",
    "retweet_count": "11"
  },
  {
    "created_at": "Mon Feb 21 20:07:04 +0000 2022",
    "id_str": "1495852592890531847",
    "full_text": "confession: keeping a mini paint roller in my bathroom for applying lotion to my back has been so freaking worth it. $6 = no more itchy back 🤷‍♂️",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Feb 19 17:39:24 +0000 2022",
    "id_str": "1495090656448032768",
    "full_text": "<a href=\"https://twitter.com/StatsbyLopez/status/1495063349851303936\">https://twitter.com/StatsbyLopez/status/1495063349851303936</a> <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1495090656448032768-FL-hBpWXsAMh6WZ.mp4\"></video></li></ul></div>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Feb 18 15:17:25 +0000 2022",
    "id_str": "1494692535398281220",
    "full_text": "<a href=\"https://twitter.com/andyestridge\">@andyestridge</a> <a href=\"https://twitter.com/everysportisbad\">@everysportisbad</a> <a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> (and substitute the x axis label for \"Y+1 dynasty value, if you want\", or whatever outcome metric you care about)",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Feb 17 06:24:54 +0000 2022",
    "id_str": "1494196136818655235",
    "full_text": "TEAM CANADA #Gold LETS  FKIN GOOOOOOOO",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Feb 16 21:18:05 +0000 2022",
    "id_str": "1494058526767042564",
    "full_text": "<a href=\"https://twitter.com/dgkeyes\">@dgkeyes</a> <a href=\"https://twitter.com/JosiahParry\">@JosiahParry</a> <a href=\"https://twitter.com/video_ai\">@video_ai</a> the cannot-open-file bit looks funny. I wonder if that needs converted somehow",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Feb 11 19:06:52 +0000 2022",
    "id_str": "1492213564249190400",
    "full_text": "me: adds a custom github token as a secret<br>me: forgets to update the action to use said token<br>me: _waits for 30+ minutes only to see it fail again_<br><br>how's your friday going? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1492213564249190400-FLVoURFXEAcVHao.jpg\"><img src=\"../../tweets_media/1492213564249190400-FLVoURFXEAcVHao.jpg\"></a></li></ul></div>",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Feb 03 17:27:13 +0000 2022",
    "id_str": "1489289384616677387",
    "full_text": "<a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> <a href=\"https://twitter.com/TylerGrantS\">@TylerGrantS</a> SO here: <a href=\"https://stackoverflow.com/questions/2458013/what-ways-are-there-to-edit-a-function-in-r\">https://stackoverflow.com/questions/2458013/what-ways-are-there-to-edit-a-function-in-r</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jan 31 17:28:45 +0000 2022",
    "id_str": "1488202605230710792",
    "full_text": "Me, this morning: \"oh hey lunar new year is tomorrow, I wonder what animal it is this year\"<br>mum: year of the tiger<br>me: *surprised pikachu* <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1488202605230710792-FKcoYR0X0AMXiQL.mp4\"></video></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jan 31 16:14:50 +0000 2022",
    "id_str": "1488184005254168580",
    "full_text": "<a href=\"https://twitter.com/PFF_Eric\">@PFF_Eric</a> <a href=\"https://twitter.com/BrunoHMioto\">@BrunoHMioto</a> (Hurry up and tweet it properly, Bruno!)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jan 28 21:19:45 +0000 2022",
    "id_str": "1487173576239333380",
    "full_text": "Link (and audiobook recording) here: <a href=\"https://sive.rs/balance\">https://sive.rs/balance</a> and I highly highly highly recommend the book this chapter is from, Hell Yeah or No",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jan 28 21:19:45 +0000 2022",
    "id_str": "1487173573890486289",
    "full_text": "This reminds me of the advice <a href=\"https://twitter.com/sivers\">@sivers</a> prescribes as \"the lifestyle of the happiest people\" he knows: <br><br>1) Have a well-paying job<br>2) Seriously pursue your art for love, not money <a href=\"https://twitter.com/TomKislingbury/status/1487170599696973824\">https://twitter.com/TomKislingbury/status/1487170599696973824</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1487173573890486289-FKOAJuGXEAUqxJS.png\"><img src=\"../../tweets_media/1487173573890486289-FKOAJuGXEAUqxJS.png\"></a></li></ul></div>",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jan 24 18:55:55 +0000 2022",
    "id_str": "1485687828721852416",
    "full_text": "Seb has done absolutely incredible work to make plotting NFL data seamless - what a legend! #rstats <a href=\"https://twitter.com/mrcaseb/status/1485664158175608837\">https://twitter.com/mrcaseb/status/1485664158175608837</a>",
    "favorite_count": "10",
    "retweet_count": "3"
  },
  {
    "created_at": "Mon Jan 24 02:45:48 +0000 2022",
    "id_str": "1485443688331456515",
    "full_text": "SPEAK IT INTO EXISTENCE! <a href=\"https://twitter.com/KentWeyrauch/status/1485439384455462916\">https://twitter.com/KentWeyrauch/status/1485439384455462916</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jan 21 14:47:38 +0000 2022",
    "id_str": "1484538181647310854",
    "full_text": "<a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> <a href=\"https://twitter.com/LisaDeBruine\">@LisaDeBruine</a> Always curious about what <a href=\"https://twitter.com/hrbrmstr\">@hrbrmstr</a> has to say about these - seems like htmlunit/htmlunitjars is his latest recommendation on this? <a href=\"https://rud.is/b/category/web-scraping/\">https://rud.is/b/category/web-scraping/</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jan 21 14:13:34 +0000 2022",
    "id_str": "1484529606677782530",
    "full_text": "<a href=\"https://twitter.com/LisaDeBruine\">@LisaDeBruine</a> trawl all the pages you want looking for this /voting/ URL and get the correct requests? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1484529606677782530-FJobrAnXoAoU-3z.png\"><img src=\"../../tweets_media/1484529606677782530-FJobrAnXoAoU-3z.png\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Jan 21 14:11:41 +0000 2022",
    "id_str": "1484529135548522496",
    "full_text": "<a href=\"https://twitter.com/LisaDeBruine\">@LisaDeBruine</a> Your JS chops &gt;&gt;&gt;&gt;&gt; mine, of course",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Jan 20 18:18:33 +0000 2022",
    "id_str": "1484228873998974989",
    "full_text": "<a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> (check out the slider package, perhaps?)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jan 18 21:56:23 +0000 2022",
    "id_str": "1483558917254823937",
    "full_text": "I knew what R’s head() function returns but I didn’t know why - pretty interesting! <a href=\"https://community.rstudio.com/t/why-does-head-show-6-rows-by-default/3259\">https://community.rstudio.com/t/why-does-head-show-6-rows-by-default/3259</a> <a href=\"https://twitter.com/jeroenhjanssens/status/1483453540546846734\">https://twitter.com/jeroenhjanssens/status/1483453540546846734</a>",
    "favorite_count": "8",
    "retweet_count": "1"
  },
  {
    "created_at": "Mon Jan 17 02:46:07 +0000 2022",
    "id_str": "1482907054436192257",
    "full_text": "<a href=\"https://gist.github.com/tanho63/18f99cf6756e1bd38c3155671b3459d9\">https://gist.github.com/tanho63/18f99cf6756e1bd38c3155671b3459d9</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Jan 17 02:44:08 +0000 2022",
    "id_str": "1482906556987580420",
    "full_text": "Perhaps 1.5 def TDs would give the steelers a win rate similar to what Vegas thought KC was at pregame? <a href=\"https://twitter.com/benbbaldwin/status/1482899522137296902\">https://twitter.com/benbbaldwin/status/1482899522137296902</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1482906556987580420-FJRXjY7XMAI9GZB.png\"><img src=\"../../tweets_media/1482906556987580420-FJRXjY7XMAI9GZB.png\"></a></li></ul></div>",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 12 22:19:28 +0000 2022",
    "id_str": "1481390399868522502",
    "full_text": "<a href=\"https://twitter.com/JonTheGeek\">@JonTheGeek</a> I think taking these on would be a fun starter project for someone interested in their first Shiny app, actually",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 12 17:35:55 +0000 2022",
    "id_str": "1481319041683894276",
    "full_text": "Code here <a href=\"https://github.com/tanho63/rdle/\">https://github.com/tanho63/rdle/</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 12 16:54:52 +0000 2022",
    "id_str": "1481308709116690433",
    "full_text": "This would probably be a lot more playable if I spent the time to figure out the top 1000 packages or something. Not bad for a lunch hour effort though",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 12 16:49:24 +0000 2022",
    "id_str": "1481307332692877319",
    "full_text": "<a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a> the good news is that I was nerdsniped for only 45 minutes?",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 12 16:46:16 +0000 2022",
    "id_str": "1481306544394457088",
    "full_text": "cc <a href=\"https://twitter.com/asmae_toumi\">@asmae_toumi</a>, whose peer pressure pushed me over the edge",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 12 16:45:31 +0000 2022",
    "id_str": "1481306355017437188",
    "full_text": "me: *tries to avoid nerdsniping*<br>also me: <a href=\"https://apps.dynastyprocess.com/rdle/\">https://apps.dynastyprocess.com/rdle/</a><br><br>good luck, #rstats. cran names suck. you were warned. <a href=\"https://twitter.com/geokaramanis/status/1481009179288653825\">https://twitter.com/geokaramanis/status/1481009179288653825</a>",
    "favorite_count": "17",
    "retweet_count": "6"
  },
  {
    "created_at": "Wed Jan 12 15:09:33 +0000 2022",
    "id_str": "1481282205112573952",
    "full_text": "*resists urge to get nerdsniped into making this in shiny* <a href=\"https://twitter.com/geokaramanis/status/1481009179288653825\">https://twitter.com/geokaramanis/status/1481009179288653825</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jan 11 03:22:48 +0000 2022",
    "id_str": "1480741957630676994",
    "full_text": "<a href=\"https://twitter.com/SamHoppen\">@SamHoppen</a> Still just an outline but also a list of bookmarks for R materials I like/recommend",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed May 03 17:18:44 +0000 2023",
    "id_str": "1653811341243691008",
    "full_text": "I would love it if I could buy Hank Green's 3D to 2D glasses to automatically convert 3D pie charts back to 2D<br><br><a href=\"https://store.dftba.com/products/2d-glasses\">https://store.dftba.com/products/2d-glasses</a>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Apr 27 16:28:16 +0000 2023",
    "id_str": "1651624314523852805",
    "full_text": "<a href=\"https://twitter.com/laurenelizab\">@laurenelizab</a> <a href=\"https://twitter.com/statistishdan\">@statistishdan</a> <a href=\"https://github.com/talgalili/installr/blob/master/R/updateR.R#L158\">https://github.com/talgalili/installr/blob/master/R/updateR.R#L158</a> tbh installr does the same thing as <a href=\"https://twitter.com/statistishdan\">@statistishdan</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Jan 05 15:51:46 +0000 2022",
    "id_str": "1478756115894648836",
    "full_text": "Today in \"now you've seen literally everything\" <a href=\"https://twitter.com/AkivaMCohen/status/1478744944965820424\">https://twitter.com/AkivaMCohen/status/1478744944965820424</a>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jan 04 18:59:13 +0000 2022",
    "id_str": "1478440901756305414",
    "full_text": "<a href=\"https://twitter.com/Cardanski0\">@Cardanski0</a> Also try asking in nflverse discord if anyone has other sources to share, I just keep rankings personally",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Jan 04 14:20:00 +0000 2022",
    "id_str": "1478370632463273985",
    "full_text": "TIL: if you like options(error = recover) for debugging in #rstats, you can use options(shiny.error = recover) for debugging in Shiny. Now, how do I send a message to one year ago me? <br><br><a href=\"https://shiny.rstudio.com/reference/shiny/1.7.0/shinyOptions.html\">https://shiny.rstudio.com/reference/shiny/1.7.0/shinyOptions.html</a>",
    "favorite_count": "10",
    "retweet_count": "2"
  },
  {
    "created_at": "Sun Jan 02 03:28:54 +0000 2022",
    "id_str": "1477482001548648450",
    "full_text": "Code here: <a href=\"https://gist.github.com/tanho63/8c7e088f8394c67a7ee8e79c618eddac\">https://gist.github.com/tanho63/8c7e088f8394c67a7ee8e79c618eddac</a><br><br>This features <a href=\"https://twitter.com/propublica\">@propublica</a>'s Weepeople font!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Jan 02 03:28:53 +0000 2022",
    "id_str": "1477481999166324737",
    "full_text": "Scratched together a quick #genuary entry while watching <a href=\"https://twitter.com/jacquietran\">@jacquietran</a>'s stream: <br><br>\"Ten Thousand People\"<br><br>#rtistry <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1477481999166324737-FIESBnuXMAIH9aN.jpg\"><img src=\"../../tweets_media/1477481999166324737-FIESBnuXMAIH9aN.jpg\"></a></li></ul></div>",
    "favorite_count": "20",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Jan 01 20:08:48 +0000 2022",
    "id_str": "1477371248116211720",
    "full_text": "nflreadr update: thanks to <a href=\"https://twitter.com/_pranavrajaram\">@_pranavrajaram</a>, new data dictionaries have been added for ESPN QBR, combine, injuries, depth charts, and trades data! You can check them out online in the \"Dictionaries\" section: <a href=\"https://nflreadr.nflverse.com/\">https://nflreadr.nflverse.com/</a> <br><br>#rstats #nflverse <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1477371248116211720-FICtGACWYAoWVix.png\"><img src=\"../../tweets_media/1477371248116211720-FICtGACWYAoWVix.png\"></a></li></ul></div>",
    "favorite_count": "15",
    "retweet_count": "6"
  },
  {
    "created_at": "Thu Dec 30 18:47:00 +0000 2021",
    "id_str": "1476625888192122886",
    "full_text": "<a href=\"https://twitter.com/aNellytics\">@aNellytics</a> <a href=\"https://twitter.com/hoganmark\">@hoganmark</a> <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> also, 1.01 + 2.12 = 15800, 1.12+2.01 = 14400 or so?",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 29 18:18:01 +0000 2021",
    "id_str": "1476256206507458560",
    "full_text": "<a href=\"https://twitter.com/juliasilge\">@juliasilge</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1476256206507458560-FHy3Me1XEAY_ljo.jpg\"><img src=\"../../tweets_media/1476256206507458560-FHy3Me1XEAY_ljo.jpg\"></a></li></ul></div>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Dec 27 23:02:37 +0000 2021",
    "id_str": "1475603052904292352",
    "full_text": "<a href=\"https://twitter.com/dgkeyes\">@dgkeyes</a> and repo <a href=\"https://github.com/dynastyprocess/sfb_projections/blob/main/index.Rmd\">https://github.com/dynastyprocess/sfb_projections/blob/main/index.Rmd</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 22 15:27:24 +0000 2021",
    "id_str": "1473676551527047178",
    "full_text": "<a href=\"https://twitter.com/ChristianLohr9\">@ChristianLohr9</a> Also, this WAR is entirely based on projections and is not a calculation of what actually happened - could probably use similar logic with real scoring, actually,,,,,",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 22 14:22:50 +0000 2021",
    "id_str": "1473660304760492032",
    "full_text": "<a href=\"https://twitter.com/MattJonesTFR\">@MattJonesTFR</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> Also usually easiest to help in discord (code chunks!) <a href=\"https://discord.com/invite/5Er2FBnnQa\">https://discord.com/invite/5Er2FBnnQa</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 22 14:19:07 +0000 2021",
    "id_str": "1473659368159727616",
    "full_text": "<a href=\"https://twitter.com/MattJonesTFR\">@MattJonesTFR</a> <a href=\"https://twitter.com/nflfastR\">@nflfastR</a> <a href=\"https://gist.github.com/tanho63/d0a4421307a67d6dad9d019901f58a20\">https://gist.github.com/tanho63/d0a4421307a67d6dad9d019901f58a20</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Dec 21 14:10:54 +0000 2021",
    "id_str": "1473294913596973062",
    "full_text": "Full news update: <a href=\"https://ffsimulator.ffverse.com/news/index.html\">https://ffsimulator.ffverse.com/news/index.html</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Dec 21 14:10:54 +0000 2021",
    "id_str": "1473294912120672258",
    "full_text": "ffsimulator 1.2.0 has been published to CRAN! It has a new experimental feature for calculating fantasy wins added over replacement (at the player level), and also some fixes for CRAN related complaints. Give it a spin! <br><br>#rstats #nflverse",
    "favorite_count": "28",
    "retweet_count": "5"
  },
  {
    "created_at": "Mon Dec 20 16:39:11 +0000 2021",
    "id_str": "1472969842386952199",
    "full_text": "me: *marks example as donttest because it relies on an API*<br>CRAN: *runs example anyway*<br>CRAN: 😡why did it fail",
    "favorite_count": "10",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Dec 08 06:58:48 +0000 2021",
    "id_str": "1468475128455512066",
    "full_text": "<a href=\"https://twitter.com/John_B_Edwards\">@John_B_Edwards</a> (I, too, am absolutely wiped. that one was a dooooooozy)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Dec 05 15:11:52 +0000 2021",
    "id_str": "1467512050649907201",
    "full_text": "Made a better leaderboard for the #rstats AOC leaderboard group: <a href=\"https://rstats-aoc.netlify.app\">https://rstats-aoc.netlify.app</a> <br><br>It sorts by total stars and average time to solve part 2, which removes the emphasis on starting the puzzle at midnight EST 😴",
    "favorite_count": "11",
    "retweet_count": "3"
  },
  {
    "created_at": "Sun Dec 05 05:36:20 +0000 2021",
    "id_str": "1467367212424081408",
    "full_text": "Celebrated cracking the top 500 of #AdventOfCode with a nice little visualization of my inputs. Thank you map2 + unnest for being OP as ever 🤩🤩🤩<br><br>#rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1467367212424081408-FF0isaIXIAQU78q.jpg\"><img src=\"../../tweets_media/1467367212424081408-FF0isaIXIAQU78q.jpg\"></a></li></ul></div>",
    "favorite_count": "14",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Dec 01 20:50:30 +0000 2021",
    "id_str": "1466147720578670595",
    "full_text": "<a href=\"https://twitter.com/delaBJL\">@delaBJL</a> <a href=\"https://twitter.com/rappa753\">@rappa753</a> Nice solution - looks a lot like mine! I think + is already vectorized so you don't need the rowwise there :)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 29 13:23:45 +0000 2021",
    "id_str": "1465310512716173313",
    "full_text": "Hey #rstats - Advent of Code kicks off this week! If you're participating, feel free to use this private leaderboard code: 1032765-5d428d59<br><br><a href=\"https://adventofcode.com/2021\">https://adventofcode.com/2021</a>",
    "favorite_count": "55",
    "retweet_count": "10"
  },
  {
    "created_at": "Sun Nov 28 16:04:46 +0000 2021",
    "id_str": "1464988647032299524",
    "full_text": "<a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Nov 28 16:04:37 +0000 2021",
    "id_str": "1464988612290822158",
    "full_text": "Working on assorted R projects on stream this morning (in ~5 minutes!)",
    "favorite_count": "9",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Nov 24 16:44:36 +0000 2021",
    "id_str": "1463549119537025024",
    "full_text": "<a href=\"https://twitter.com/Mayacelium\">@Mayacelium</a> er, I guess you actually want the GUI lol <a href=\"https://alandipert.shinyapps.io/html2r/\">https://alandipert.shinyapps.io/html2r/</a><br><a href=\"https://github.com/alandipert/html2r\">https://github.com/alandipert/html2r</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Nov 20 18:06:29 +0000 2021",
    "id_str": "1462120177982742536",
    "full_text": "I can honestly say I would not be in data science or R programming without having Joe in my corner. Life changing friendship!",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Nov 20 18:06:29 +0000 2021",
    "id_str": "1462120175185149958",
    "full_text": "Big <a href=\"https://twitter.com/dynastyprocess\">@dynastyprocess</a> vibes ✨so grateful to be finally meeting <a href=\"https://twitter.com/JoeSydlowskiFF\">@JoeSydlowskiFF</a> in person after talking every day for 3+ years! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1462120175185149958-FEp-i__XoAAx_5b.jpg\"><img src=\"../../tweets_media/1462120175185149958-FEp-i__XoAAx_5b.jpg\"></a></li><li><a href=\"../../tweets_media/1462120175185149958-FEp-jAHXMBMnk9w.jpg\"><img src=\"../../tweets_media/1462120175185149958-FEp-jAHXMBMnk9w.jpg\"></a></li></ul></div>",
    "favorite_count": "14",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Nov 19 12:17:22 +0000 2021",
    "id_str": "1461669929841745929",
    "full_text": "<a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Nov 19 12:17:03 +0000 2021",
    "id_str": "1461669849311109122",
    "full_text": "No streams this weekend (busy), but I’ll probably be on tonight around 8pm EST doing something or other - maybe buttoning up some of my half-finished Shiny app projects?",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 15 14:43:56 +0000 2021",
    "id_str": "1460257263139143680",
    "full_text": "<a href=\"https://twitter.com/mrcaseb\">@mrcaseb</a> and I think it was a refurb when I bought it, I was broke at the time",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 15 14:38:38 +0000 2021",
    "id_str": "1460255931506335747",
    "full_text": "Thinking about repurposing this laptop as a home storage server. May write up my notes on this soon! (Need to acquire some external hard drives this BF) <a href=\"./_TanHo/status/1460205707672834051\">https://twitter.com/_TanHo/status/1460205707672834051</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 15 11:22:42 +0000 2021",
    "id_str": "1460206622320599040",
    "full_text": "for reference, I think this was last booted up in Oct 2019 - and I'm now allergic to all git GUIs and basically live in RStudio",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Nov 15 11:19:04 +0000 2021",
    "id_str": "1460205707672834051",
    "full_text": "Found an old laptop and fired it up for fun...I can't believe there was a time where I <br><br>a) had GitHub Desktop pinned to the taskbar, and <br>b) DIDN'T HAVE RSTUDIO ON THE DESKTOP OR TASKBAR SHORTCUTS?!?! 🤯🤯🤯<br><br>oh how times have changed <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1460205707672834051-FEOw12jWUAAtA78.jpg\"><img src=\"../../tweets_media/1460205707672834051-FEOw12jWUAAtA78.jpg\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Nov 13 22:56:54 +0000 2021",
    "id_str": "1459656546649051137",
    "full_text": "Going live in ~10 minutes - starting to think about revamping #nflverse beginner #rstats tutorials!<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "6",
    "retweet_count": "3"
  },
  {
    "created_at": "Fri Nov 12 14:20:00 +0000 2021",
    "id_str": "1459164075951149058",
    "full_text": "Back from London! 🇬🇧 Thinking I'll stream tomorrow at 6pm ET (jet lag😴probs 8pm next week) and at 11am on Sunday as usual. <br><br>Current plan is to start a new project to revamp #nflverse beginner #rstats tutorials!<br><br><a href=\"http://twitch.tv/tanho_\">http://twitch.tv/tanho_</a><br><br>Some travel highlights: <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1459164075951149058-FD_FuILXoAIgbUW.jpg\"><img src=\"../../tweets_media/1459164075951149058-FD_FuILXoAIgbUW.jpg\"></a></li><li><a href=\"../../tweets_media/1459164075951149058-FD_F0dmXIAQQCbG.jpg\"><img src=\"../../tweets_media/1459164075951149058-FD_F0dmXIAQQCbG.jpg\"></a></li><li><a href=\"../../tweets_media/1459164075951149058-FD_F2wJXIFIEZy3.jpg\"><img src=\"../../tweets_media/1459164075951149058-FD_F2wJXIFIEZy3.jpg\"></a></li><li><a href=\"../../tweets_media/1459164075951149058-FD_G1vGXIAEL-zD.jpg\"><img src=\"../../tweets_media/1459164075951149058-FD_G1vGXIAEL-zD.jpg\"></a></li></ul></div>",
    "favorite_count": "37",
    "retweet_count": "4"
  },
  {
    "created_at": "Fri Nov 12 00:17:02 +0000 2021",
    "id_str": "1458951936087003143",
    "full_text": "<a href=\"https://twitter.com/EmRstats\">@EmRstats</a> also defaulting to three sets per exercise gets me in and out of the gym more efficiently (esp when I can superset the upper body ones)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Nov 03 22:33:57 +0000 2021",
    "id_str": "1456026893183029254",
    "full_text": "SO FREAKING HYPE, ANFIELD IS ABSOLUTELY INSANEEEEEEEE 🤩 UP THE REDS <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1456026893183029254-FDTYs5qWEAY8bT0.jpg\"><img src=\"../../tweets_media/1456026893183029254-FDTYs5qWEAY8bT0.jpg\"></a></li></ul></div>",
    "favorite_count": "73",
    "retweet_count": "0"
  },
  {
    "created_at": "Fri Oct 29 16:00:19 +0000 2021",
    "id_str": "1454115890862116867",
    "full_text": "I love this sketch of all the different ways you can host shiny apps! <a href=\"https://twitter.com/psolymos/status/1454114356900286471\">https://twitter.com/psolymos/status/1454114356900286471</a>",
    "favorite_count": "10",
    "retweet_count": "1"
  },
  {
    "created_at": "Fri Oct 29 09:37:40 +0000 2021",
    "id_str": "1454019593962500102",
    "full_text": "In London UK for a few weeks - hmu if you want to grab a beer! (No streams til I get back, probably.) <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1454019593962500102-FC23GFGWUAUqOdA.jpg\"><img src=\"../../tweets_media/1454019593962500102-FC23GFGWUAUqOdA.jpg\"></a></li></ul></div>",
    "favorite_count": "40",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 28 02:54:25 +0000 2021",
    "id_str": "1453555726752825348",
    "full_text": "Today on <a href=\"https://twitter.com/thercast\">@thercast</a>'s Twitch stream I discovered <a href=\"https://twitter.com/psolymos\">@psolymos</a>'s Analythium blog - what a gold mine about deploying Shiny apps in prod - covers docker, app hosting patterns, GitHub Actions, platform-specific notes, and more 👀<br><br><a href=\"https://hosting.analythium.io/\">https://hosting.analythium.io/</a>",
    "favorite_count": "24",
    "retweet_count": "2"
  },
  {
    "created_at": "Tue Apr 18 17:02:43 +0000 2023",
    "id_str": "1648371492147675137",
    "full_text": "Come work with me at Zelus! (Happy to answer questions) <a href=\"https://twitter.com/ZelusAnalytics/status/1648367602186735616\">https://twitter.com/ZelusAnalytics/status/1648367602186735616</a>",
    "favorite_count": "34",
    "retweet_count": "4"
  },
  {
    "created_at": "Wed Oct 27 19:37:37 +0000 2021",
    "id_str": "1453445801498357762",
    "full_text": "If you want more of this sort of content (i.e. experienced R programmers getting into and out of debugging holes) - there's a whole set of Twitch streamRs that you should check out, including me!  <a href=\"https://discord.gg/SekSWsQymu\">https://discord.gg/SekSWsQymu</a>",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Oct 27 19:35:47 +0000 2021",
    "id_str": "1453445341504806912",
    "full_text": "Update: I uploaded the raw recording of the Shiny Server tutorial here - could be useful for seeing how easily you can get into the weeds of managing a server and how I think through getting out of them!<br><br>#rstats <br><br><a href=\"https://www.youtube.com/watch?v=iok93McUaus&list=PLu1JHrmmzdY1WWeQ6kA1L7WGcQ2EestVU\">https://www.youtube.com/watch?v=iok93McUaus&list=PLu1JHrmmzdY1WWeQ6kA1L7WGcQ2EestVU</a> <a href=\"./_TanHo/status/1453350705826340872\">https://twitter.com/_TanHo/status/1453350705826340872</a>",
    "favorite_count": "12",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Oct 27 13:19:44 +0000 2021",
    "id_str": "1453350705826340872",
    "full_text": "Appreciated the kind words from Eric and <a href=\"https://twitter.com/mike_ketchbrook\">@mike_ketchbrook</a> about my recent Shiny Server tutorial - and also the kick in the pants to finish uploading the raw \"server admininistration struggle\" version of the video, because I totally agree that it's worth sharing! <a href=\"https://twitter.com/theRcast/status/1453338012121800706\">https://twitter.com/theRcast/status/1453338012121800706</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Oct 27 13:08:52 +0000 2021",
    "id_str": "1453347968099172355",
    "full_text": "Finished off 2021's series of pumpkin carves with a quick Pikachu carve - this one's dedicated to all of the friends I've made while streaming on Twitch this past year ✨ <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1453347968099172355-FCtTqR1X0AkWyxX.jpg\"><img src=\"../../tweets_media/1453347968099172355-FCtTqR1X0AkWyxX.jpg\"></a></li></ul></div>",
    "favorite_count": "13",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 26 12:43:10 +0000 2021",
    "id_str": "1452979116085587974",
    "full_text": "<a href=\"https://twitter.com/antoine_fabri\">@antoine_fabri</a> and this also <a href=\"https://twitter.com/StatnMap/status/1446858295474593793?s=20\">https://twitter.com/StatnMap/status/1446858295474593793?s=20</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 26 12:42:24 +0000 2021",
    "id_str": "1452978919108452360",
    "full_text": "<a href=\"https://twitter.com/antoine_fabri\">@antoine_fabri</a> Also <a href=\"https://twitter.com/renkun_ken\">@renkun_ken</a>  has a whole bunch of vscode in R posts as well including this intro <a href=\"https://renkun.me/2019/12/11/writing-r-in-vscode-a-fresh-start/\">https://renkun.me/2019/12/11/writing-r-in-vscode-a-fresh-start/</a>",
    "favorite_count": "3",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 25 13:24:37 +0000 2021",
    "id_str": "1452627155930783746",
    "full_text": "More pumpkin content? MORE PUMPKIN CONTENT! Here's episode four: \"Surfing\" 🏄‍♂️ <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1452627155930783746-FCjEh--XEAMJ2Vv.jpg\"><img src=\"../../tweets_media/1452627155930783746-FCjEh--XEAMJ2Vv.jpg\"></a></li></ul></div>",
    "favorite_count": "14",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 23 18:28:22 +0000 2021",
    "id_str": "1451978823520686081",
    "full_text": "further to this convo: in a move that will *shock* literally all my Twitch friends, I have named my new laptop... <a href=\"https://twitter.com/chendaniely/status/1451947748182331392\">https://twitter.com/chendaniely/status/1451947748182331392</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1451978823520686081-FCZ28_HWQAY_1Ln.png\"><img src=\"../../tweets_media/1451978823520686081-FCZ28_HWQAY_1Ln.png\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 23 18:17:04 +0000 2021",
    "id_str": "1451975980923424775",
    "full_text": "<a href=\"https://twitter.com/pachadotdev\">@pachadotdev</a> Display is 3:2 and so feels \"tall\" - very crisp and highres, but currently very very glossy and reflective. Debating a matte screen protector but I'm living with it for now. <br><br>No performance concerns ventilationwise yet to report, but I also haven't done anything ML/gaming/strem",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 23 15:25:31 +0000 2021",
    "id_str": "1451932808650309633",
    "full_text": "Twitch VOD of the install here:<br><a href=\"https://www.twitch.tv/videos/1183223047\">https://www.twitch.tv/videos/1183223047</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 23 15:20:03 +0000 2021",
    "id_str": "1451931429881982978",
    "full_text": "I just got my new Framework laptop on Thursday and am having a lot of fun configuring it with Linux as my desktop OS, for the first time ever!<br><br>Here's some photos, and I also took some notes of the install process 🤩 <br><br><a href=\"https://github.com/tanho63/pc-setup/blob/main/ubuntu-laptop.md\">https://github.com/tanho63/pc-setup/blob/main/ubuntu-laptop.md</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1451931429881982978-FCZLBI-X0AMvvHW.jpg\"><img src=\"../../tweets_media/1451931429881982978-FCZLBI-X0AMvvHW.jpg\"></a></li><li><a href=\"../../tweets_media/1451931429881982978-FCZLC8fXIAUzxG-.jpg\"><img src=\"../../tweets_media/1451931429881982978-FCZLC8fXIAUzxG-.jpg\"></a></li></ul></div>",
    "favorite_count": "31",
    "retweet_count": "2"
  },
  {
    "created_at": "Thu Oct 21 22:07:25 +0000 2021",
    "id_str": "1451309171689902082",
    "full_text": "Live now! <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <a href=\"./_TanHo/status/1451238545281241095\">https://twitter.com/_TanHo/status/1451238545281241095</a>",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Oct 21 17:26:46 +0000 2021",
    "id_str": "1451238545281241095",
    "full_text": "ITS HEREEEEE! Gonna build this today at like 5/6 PM ET on stream <a href=\"./_TanHo/status/1451178212222984196\">https://twitter.com/_TanHo/status/1451178212222984196</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1451238545281241095-FCPVw4yWUAYnPbT.jpg\"><img src=\"../../tweets_media/1451238545281241095-FCPVw4yWUAYnPbT.jpg\"></a></li></ul></div>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 21 13:27:02 +0000 2021",
    "id_str": "1451178212222984196",
    "full_text": "My <a href=\"https://twitter.com/FrameworkPuter\">@FrameworkPuter</a> laptop is expected to arrive today and I'm SO FRICKEN EXCITED🎉<br><br>Might stream building it and setting it up tonight, if it arrives on-time 🤞",
    "favorite_count": "8",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Oct 20 19:36:06 +0000 2021",
    "id_str": "1450908705009057793",
    "full_text": "<a href=\"https://twitter.com/jaredlander\">@jaredlander</a> <a href=\"https://pacha.dev/analogsea/reference/docklet_create.html\">https://pacha.dev/analogsea/reference/docklet_create.html</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Oct 20 15:55:34 +0000 2021",
    "id_str": "1450853205705904142",
    "full_text": "Hi, I'm Tan and I'm hereby submitting my contender for \"worst-impacted-by-2021-week-7-fantasy-lineup\". <br><br>Any \"challengers\"? <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1450853205705904142-FCJ3S_yX0AIYe2w.png\"><img src=\"../../tweets_media/1450853205705904142-FCJ3S_yX0AIYe2w.png\"></a></li><li><a href=\"../../tweets_media/1450853205705904142-FCJ29krWQAIExYO.png\"><img src=\"../../tweets_media/1450853205705904142-FCJ29krWQAIExYO.png\"></a></li></ul></div>",
    "favorite_count": "6",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Oct 20 13:11:50 +0000 2021",
    "id_str": "1450812001274433542",
    "full_text": "Credit to this SO answer <a href=\"https://stackoverflow.com/a/49102004\">https://stackoverflow.com/a/49102004</a>",
    "favorite_count": "4",
    "retweet_count": "0"
  },
  {
    "created_at": "Wed Oct 20 13:01:31 +0000 2021",
    "id_str": "1450809405465825281",
    "full_text": "TIL: you can add class = \"align-self-center\" to bootstrap 4+ stuff and it VERTICALLY CENTERS IN A DIV🤯<br><br>(*pours gasoline over the unholy margin adjustments in CSS I was previously doing*)",
    "favorite_count": "33",
    "retweet_count": "2"
  },
  {
    "created_at": "Wed Oct 20 00:42:37 +0000 2021",
    "id_str": "1450623454164754434",
    "full_text": "<a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> <a href=\"https://twitter.com/Alex_Kozora\">@Alex_Kozora</a> or maybe <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1450623454164754434-FCGmV2IWUAIb9bb.png\"><img src=\"../../tweets_media/1450623454164754434-FCGmV2IWUAIb9bb.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 19 21:48:07 +0000 2021",
    "id_str": "1450579538241540105",
    "full_text": "<a href=\"https://twitter.com/GueyeNono\">@GueyeNono</a> So that’s just the fast way to get to the server when you have it configured",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 19 21:05:31 +0000 2021",
    "id_str": "1450568819576033287",
    "full_text": "<a href=\"https://twitter.com/GueyeNono\">@GueyeNono</a> Seemed to work OK for me. Try restarting the server (sudo reboot) and then re-connecting and trying the install again <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1450568819576033287-FCF0j50XoAMAJAC.jpg\"><img src=\"../../tweets_media/1450568819576033287-FCF0j50XoAMAJAC.jpg\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 19 15:11:04 +0000 2021",
    "id_str": "1450479620592128003",
    "full_text": "<a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> Update: I really like this! <div class=\"gallery\"><ul><li><video controls loop src=\"../../tweets_media/1450479620592128003-FCEjhkPWQAU-yDG.mp4\"></video></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 18 11:37:29 +0000 2021",
    "id_str": "1450063480569143304",
    "full_text": "Also incredibly grateful for the brilliant guides written by <a href=\"https://twitter.com/daattali\">@daattali</a> and <a href=\"https://twitter.com/CharlesBordet\">@CharlesBordet</a>, which this tutorial references and draws heavily from!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 18 11:30:23 +0000 2021",
    "id_str": "1450061693711798279",
    "full_text": "My notes are here: <a href=\"https://github.com/tanho63/office_hours/tree/main/20211011_shinyserver\">https://github.com/tanho63/office_hours/tree/main/20211011_shinyserver</a><br><br>I streamed this on Monday last week and ended up in package installation hell (which is just a fact of life with managing a server even for \"pros\" 🤣) so re-recorded and edited for this YT version (with the help of <a href=\"https://twitter.com/alyssastweeting\">@alyssastweeting</a> 🤩)",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 18 11:30:22 +0000 2021",
    "id_str": "1450061691987824649",
    "full_text": "Happy Monday, #rstats! Are you outgrowing the free tier of <a href=\"http://shinyapps.io\">http://shinyapps.io</a>? <br><br>I've just posted a video to my YouTube channel on how to get started with Shiny Server/RStudio Server on a free tier AWS instance 🔧💻<br><br><a href=\"https://youtu.be/JL4T0qfqY7k\">https://youtu.be/JL4T0qfqY7k</a>",
    "favorite_count": "42",
    "retweet_count": "9"
  },
  {
    "created_at": "Mon Oct 18 10:35:32 +0000 2021",
    "id_str": "1450047892367028225",
    "full_text": "Hello? Did anyone order 🎃 pumpkin spam 🎃 with a side of Steelers winning last night? Just me?🤣<br><br>Here's 2021's episode three: \"Tightrope\" <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1450047892367028225-FB-aky9X0AA2pWN.jpg\"><img src=\"../../tweets_media/1450047892367028225-FB-aky9X0AA2pWN.jpg\"></a></li></ul></div>",
    "favorite_count": "7",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 16 23:50:13 +0000 2021",
    "id_str": "1449523104431153153",
    "full_text": "A little behind today, but hopefully will stream a bit later - about 8:30 or so :)<br><br>Probably will give the shiny server tutorial a bit of a review and possibly a re-recording, so if you missed Monday’s stream feel free to pop by and say hello!<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 11 21:37:18 +0000 2021",
    "id_str": "1447677715587518467",
    "full_text": "I'll be on in thirty minutes! 🎉#rstats <a href=\"./_TanHo/status/1447567839238500354\">https://twitter.com/_TanHo/status/1447567839238500354</a>",
    "favorite_count": "4",
    "retweet_count": "2"
  },
  {
    "created_at": "Mon Oct 11 14:26:18 +0000 2021",
    "id_str": "1447569252442062852",
    "full_text": "Materials will live here, and an outline + list of resources I like are also posted <a href=\"https://github.com/tanho63/office_hours/tree/main/20211011_shinyserver\">https://github.com/tanho63/office_hours/tree/main/20211011_shinyserver</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 11 14:20:42 +0000 2021",
    "id_str": "1447567840815550466",
    "full_text": "You can find/follow my Twitch account here <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a> <br>and catch recordings on YouTube here: <a href=\"https://youtube.com/TanHo\">https://youtube.com/TanHo</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 11 14:20:42 +0000 2021",
    "id_str": "1447567839238500354",
    "full_text": "Happy (Canadian) Thanksgiving, folks 🦃 I'll be doing a tutorial today on setting up your first cloud #rstats and Shiny server from scratch, including deploying an app and adding your own domain name!<br><br>I'll be live on Twitch at 6pm ET, and also posting a recording to YT after 🎉",
    "favorite_count": "46",
    "retweet_count": "6"
  },
  {
    "created_at": "Mon Oct 11 12:27:00 +0000 2021",
    "id_str": "1447539226904567809",
    "full_text": "FLOODING YOUR TL WITH PUMPKIN CARVINGS, episode two!<br><br> #pumpkincarving <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1447539226904567809-FBaxQJaX0AQZ2kp.jpg\"><img src=\"../../tweets_media/1447539226904567809-FBaxQJaX0AQZ2kp.jpg\"></a></li></ul></div>",
    "favorite_count": "15",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Oct 10 23:55:48 +0000 2021",
    "id_str": "1447350181695983617",
    "full_text": "Currently polishing off Thanksgiving dinner 🍴 but I'll be live in about 30 minutes for a 🎃pumpkin carving stream 🎃",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Oct 10 14:50:53 +0000 2021",
    "id_str": "1447213049090383885",
    "full_text": "All on my Twitch channel which can be found here 👇<br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Oct 10 14:50:20 +0000 2021",
    "id_str": "1447212911081017351",
    "full_text": "Upcoming streams:<br><br>11am ET (in ten minutes!) - working through app and package maintenance for fantasy football<br>8pm ET - 🎃pumpkin carving 🎃<br><br>Tomorrow, 6pm ET - an \"office hours\" stream where I set up a cloud server for hosting your own Shiny apps and RStudio Server! <br><br>#rstats",
    "favorite_count": "2",
    "retweet_count": "1"
  },
  {
    "created_at": "Sat Oct 09 20:44:58 +0000 2021",
    "id_str": "1446939768089108481",
    "full_text": "On-stream tonight: some app maintenance, probably! <br><br>Live at about 8pm ET - <a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 07 16:26:01 +0000 2021",
    "id_str": "1446149825901342726",
    "full_text": "<a href=\"https://twitter.com/Cooper_DFF\">@Cooper_DFF</a> <a href=\"https://twitter.com/ak47twq/status/1446104347142549509\">https://twitter.com/ak47twq/status/1446104347142549509</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Oct 07 16:08:08 +0000 2021",
    "id_str": "1446145326944038916",
    "full_text": "and...that's a wrap, folks #lubrigate <a href=\"https://twitter.com/CRANberriesFeed/status/1446143844450451462\">https://twitter.com/CRANberriesFeed/status/1446143844450451462</a>",
    "favorite_count": "18",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 05 23:30:56 +0000 2021",
    "id_str": "1445531986194427904",
    "full_text": "nflreadr v1.1.1 is now available on CRAN! It features some new helper functions, a few additional dataframes, and bugfixes. More in the news release here 👇<a href=\"https://nflreadr.nflverse.com/news/index.html#nflreadr-1-1-1-2021-10-05\">https://nflreadr.nflverse.com/news/index.html#nflreadr-1-1-1-2021-10-05</a><br><br>#nflverse #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1445531986194427904-FA-PLoUVQAAWltM.png\"><img src=\"../../tweets_media/1445531986194427904-FA-PLoUVQAAWltM.png\"></a></li></ul></div>",
    "favorite_count": "29",
    "retweet_count": "5"
  },
  {
    "created_at": "Tue Oct 05 18:48:27 +0000 2021",
    "id_str": "1445460895753142276",
    "full_text": "For reference, this seems to be a solved issue so hopefully smooth sailing to fix! <a href=\"https://github.com/tidyverse/lubridate/issues/991\">https://github.com/tidyverse/lubridate/issues/991</a><br><br>(this is still a good time to say thank you to your favourite package maintainers!)",
    "favorite_count": "31",
    "retweet_count": "3"
  },
  {
    "created_at": "Tue Oct 05 17:03:41 +0000 2021",
    "id_str": "1445434530937114632",
    "full_text": "and by \"all modern digital infrastructure\" I here mean the 927 CRAN packages that import or depend on lubridate and were, uh, informed of pending removal from CRAN",
    "favorite_count": "46",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Oct 05 16:24:47 +0000 2021",
    "id_str": "1445424741360324608",
    "full_text": "Dear lubridate maintainers, we love you and good luck. #rstats <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1445424741360324608-FA8uEFtX0AEGdOQ.png\"><img src=\"../../tweets_media/1445424741360324608-FA8uEFtX0AEGdOQ.png\"></a></li></ul></div>",
    "favorite_count": "524",
    "retweet_count": "53"
  },
  {
    "created_at": "Mon Oct 04 23:51:16 +0000 2021",
    "id_str": "1445174713022570496",
    "full_text": "<a href=\"https://twitter.com/LuisDVerde\">@LuisDVerde</a> This is probably closer to what you were hoping to accomplish <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1445174713022570496-FA5KrfTXEAAVnKr.png\"><img src=\"../../tweets_media/1445174713022570496-FA5KrfTXEAAVnKr.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 04 23:50:19 +0000 2021",
    "id_str": "1445174476547796994",
    "full_text": "<a href=\"https://twitter.com/LuisDVerde\">@LuisDVerde</a> I like <a href=\"https://spannbaueradam.shinyapps.io/r_regex_tester/\">https://spannbaueradam.shinyapps.io/r_regex_tester/</a> for R-specific regex testing. I believe your problem is related to trying to match the $ in the middle of the string ($ is always at the end). You can't really relocate regex like that <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1445174476547796994-FA5KRK6XEAIalUM.png\"><img src=\"../../tweets_media/1445174476547796994-FA5KRK6XEAIalUM.png\"></a></li></ul></div>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 04 23:47:05 +0000 2021",
    "id_str": "1445173660952760321",
    "full_text": "<a href=\"https://twitter.com/LuisDVerde\">@LuisDVerde</a> <a href=\"https://twitter.com/yoniceedee\">@yoniceedee</a> As far as matching regex goes, I'd need to have a bit more of a look into what's going on there",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 04 23:44:26 +0000 2021",
    "id_str": "1445172995174117379",
    "full_text": "<a href=\"https://twitter.com/thomas_mock\">@thomas_mock</a> TOM IT'S TOO SOON",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 04 13:09:31 +0000 2021",
    "id_str": "1445013211871334400",
    "full_text": "I'll be streaming as I carve these - follow along on Twitch (<a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>) and the StreamRs Discord (<a href=\"https://discord.gg/mEQftRzhEm\">https://discord.gg/mEQftRzhEm</a>)!<br><br>You can also check out past carves here: <a href=\"https://tanho.ca/pumpkins\">https://tanho.ca/pumpkins</a>",
    "favorite_count": "5",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 04 13:07:18 +0000 2021",
    "id_str": "1445012654653952003",
    "full_text": "Closeups! <div class=\"gallery\"><ul><li><video controls src=\"../../tweets_media/1445012654653952003-Pcl94uQ8AirbnXnT.mp4?tag=12\"></video></li></ul></div>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Mon Oct 04 13:07:13 +0000 2021",
    "id_str": "1445012635364233216",
    "full_text": "Happy October, folks! Started a fun new stream project last night - pumpkin carving 🎃 Here's the first in the series! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1445012635364233216-FA23M6HWUAUQOYm.jpg\"><img src=\"../../tweets_media/1445012635364233216-FA23M6HWUAUQOYm.jpg\"></a></li></ul></div>",
    "favorite_count": "19",
    "retweet_count": "0"
  },
  {
    "created_at": "Sun Oct 03 00:01:14 +0000 2021",
    "id_str": "1444452446093332484",
    "full_text": "Going live! <a href=\"./_TanHo/status/1444406689218826242\">https://twitter.com/_TanHo/status/1444406689218826242</a>",
    "favorite_count": "2",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Oct 02 20:59:25 +0000 2021",
    "id_str": "1444406689218826242",
    "full_text": "Stream notes for this weekend: <br><br>Tonight (8pm EDT) and tomorrow (11am EDT): working on #nflverse data pipelines and automation! Possibly also bugfixing some Shiny apps!<br><br>TOMORROW NIGHT AT 8PM: PUMPKIN CARVING STREAMS🎃<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "3",
    "retweet_count": "1"
  },
  {
    "created_at": "Thu Sep 30 13:19:25 +0000 2021",
    "id_str": "1443566152161058816",
    "full_text": "THINGS YOU LOVE TO SEE: IT 👇<br><br>#rstats #nflverse <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1443566152161058816-FAiTmoqXsAA58aY.png\"><img src=\"../../tweets_media/1443566152161058816-FAiTmoqXsAA58aY.png\"></a></li></ul></div>",
    "favorite_count": "29",
    "retweet_count": "1"
  },
  {
    "created_at": "Sun Sep 26 14:56:25 +0000 2021",
    "id_str": "1442141010570719238",
    "full_text": "Live in five: more #nflverse work!<br><br><a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "2"
  },
  {
    "created_at": "Sat Sep 25 23:56:56 +0000 2021",
    "id_str": "1441914648916201481",
    "full_text": "<a href=\"https://twitch.tv/tanho_\">https://twitch.tv/tanho_</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 25 23:56:46 +0000 2021",
    "id_str": "1441914608718008324",
    "full_text": "Tonight, on-stream - not really sure yet! Probably GHA/data pipelines again. <br><br>Live in ~ ten!",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Sat Sep 25 02:06:52 +0000 2021",
    "id_str": "1441584959983001603",
    "full_text": "Stumbled on this league page generator for <a href=\"https://twitter.com/SleeperHQ\">@SleeperHQ</a> leagues and I'm very impressed - definitely worth checking out if you're commishing a Sleeper league! <br><br><a href=\"https://github.com/nmelhado/league-page\">https://github.com/nmelhado/league-page</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1441584959983001603-FAGJqZWXsAEdaNJ.png\"><img src=\"../../tweets_media/1441584959983001603-FAGJqZWXsAEdaNJ.png\"></a></li></ul></div>",
    "favorite_count": "23",
    "retweet_count": "2"
  },
  {
    "created_at": "Thu Sep 23 15:07:52 +0000 2021",
    "id_str": "1441056728427159554",
    "full_text": "And most table packages i'm aware of also have HTML escaping (reactable, gt etc)",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 23 14:52:02 +0000 2021",
    "id_str": "1441052744538804225",
    "full_text": "Gist: <a href=\"https://gist.github.com/tanho63/2d648bdd2cbb682fcad9c5001fa23579\">https://gist.github.com/tanho63/2d648bdd2cbb682fcad9c5001fa23579</a><br><br>Pkg: <a href=\"https://tanho63.github.io/fivestars/\">https://tanho63.github.io/fivestars/</a>",
    "favorite_count": "1",
    "retweet_count": "0"
  },
  {
    "created_at": "Thu Sep 23 14:52:01 +0000 2021",
    "id_str": "1441052741787275271",
    "full_text": "Was asked about an example of how I'm using my new fivestars #rstats pkg, so here's a quick and dirty \"air yards buy low model\" and the code used to generate it (cc #nflverse etc) <a href=\"./_TanHo/status/1440705882916982798\">https://twitter.com/_TanHo/status/1440705882916982798</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1441052741787275271-E_-kIR_XoAAYJM6.png\"><img src=\"../../tweets_media/1441052741787275271-E_-kIR_XoAAYJM6.png\"></a></li><li><a href=\"../../tweets_media/1441052741787275271-E_-lkK9XEBAfJA1.png\"><img src=\"../../tweets_media/1441052741787275271-E_-lkK9XEBAfJA1.png\"></a></li></ul></div>",
    "favorite_count": "32",
    "retweet_count": "8"
  },
  {
    "created_at": "Wed Sep 22 15:53:44 +0000 2021",
    "id_str": "1440705882916982798",
    "full_text": "Overengineering things, episode 10001: made a mini #rstats package to make ⭐star ⭐ratings in html/css<br><br><a href=\"https://tanho63.github.io/fivestars\">https://tanho63.github.io/fivestars</a> <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1440705882916982798-E_5qRglUUAccn3l.png\"><img src=\"../../tweets_media/1440705882916982798-E_5qRglUUAccn3l.png\"></a></li></ul></div>",
    "favorite_count": "121",
    "retweet_count": "11"
  },
  {
    "created_at": "Tue Sep 21 15:23:57 +0000 2021",
    "id_str": "1440336001709195271",
    "full_text": "<a href=\"https://twitter.com/kierisi\">@kierisi</a> If you can find the Lino-Zip series, even better (a pull motion &gt; a pushing motion, makes it even more similar to drawing)",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 21 14:44:41 +0000 2021",
    "id_str": "1440326118779748354",
    "full_text": "Happily taking ideas for pumpkin carves and other office hours tutorials on my channel in the streamRs discord <a href=\"https://discord.gg/SekSWsQymu\">https://discord.gg/SekSWsQymu</a> <br><br>and you can check out some past pumpkin carves here: <a href=\"https://tanho.ca/pumpkins\">https://tanho.ca/pumpkins</a>",
    "favorite_count": "0",
    "retweet_count": "0"
  },
  {
    "created_at": "Tue Sep 21 14:44:40 +0000 2021",
    "id_str": "1440326115558510595",
    "full_text": "Twitch stream news! In October, I'll be adding a ~ weekly stream specifically dedicated to 🎃CARVING PUMPKINS🎃<br><br>I also have some office hours tutorials on deck, namely: automating #rstats scripts with GHA and setting up your own open source Shiny server on Linux! <div class=\"gallery\"><ul><li><a href=\"../../tweets_media/1440326115558510595-E_0QKDRUcAon_ks.jpg\"><img src=\"../../tweets_media/1440326115558510595-E_0QKDRUcAon_ks.jpg\"></a></li></ul></div>",
    "favorite_count": "20",
    "retweet_count": "3"
  }
]
