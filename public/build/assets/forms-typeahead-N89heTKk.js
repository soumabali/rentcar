$(function(){var r=function(e){return function(g,k){var s,o;s=[],o=new RegExp(g,"i"),$.each(e,function(y,i){o.test(i)&&s.push(i)}),k(s)}},n=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];isRtl&&$(".typeahead").attr("dir","rtl"),$(".typeahead").typeahead({hint:!isRtl,highlight:!0,minLength:1},{name:"states",source:r(n)});var l=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,local:n});$(".typeahead-bloodhound").typeahead({hint:!isRtl,highlight:!0,minLength:1},{name:"states",source:l});var a=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:assetsPath+"json/typeahead.json"});$(".typeahead-prefetch").typeahead({hint:!isRtl,highlight:!0,minLength:1},{name:"states",source:a});function h(e,t){e===""?t(a.get("Alaska","New York","Washington")):a.search(e,t)}$(".typeahead-default-suggestions").typeahead({hint:!isRtl,highlight:!0,minLength:0},{name:"states",source:h});var m=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("value"),queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:assetsPath+"json/typeahead-data-2.json"});$(".typeahead-custom-template").typeahead(null,{name:"best-movies",display:"value",source:m,highlight:!0,hint:!isRtl,templates:{empty:['<div class="empty-message p-2">',"unable to find any Best Picture winners that match the current query","</div>"].join(`
`),suggestion:function(e){return'<div><span class="fw-medium">'+e.value+"</span> – "+e.year+"</div>"}}});var d=[{team:"Boston Celtics"},{team:"Dallas Mavericks"},{team:"Brooklyn Nets"},{team:"Houston Rockets"},{team:"New York Knicks"},{team:"Memphis Grizzlies"},{team:"Philadelphia 76ers"},{team:"New Orleans Hornets"},{team:"Toronto Raptors"},{team:"San Antonio Spurs"},{team:"Chicago Bulls"},{team:"Denver Nuggets"},{team:"Cleveland Cavaliers"},{team:"Minnesota Timberwolves"},{team:"Detroit Pistons"},{team:"Portland Trail Blazers"},{team:"Indiana Pacers"},{team:"Oklahoma City Thunder"},{team:"Milwaukee Bucks"},{team:"Utah Jazz"},{team:"Atlanta Hawks"},{team:"Golden State Warriors"},{team:"Charlotte Bobcats"},{team:"Los Angeles Clippers"},{team:"Miami Heat"},{team:"Los Angeles Lakers"},{team:"Orlando Magic"},{team:"Phoenix Suns"},{team:"Washington Wizards"},{team:"Sacramento Kings"}],u=[{team:"New Jersey Devils"},{team:"New York Islanders"},{team:"New York Rangers"},{team:"Philadelphia Flyers"},{team:"Pittsburgh Penguins"},{team:"Chicago Blackhawks"},{team:"Columbus Blue Jackets"},{team:"Detroit Red Wings"},{team:"Nashville Predators"},{team:"St. Louis Blues"},{team:"Boston Bruins"},{team:"Buffalo Sabres"},{team:"Montreal Canadiens"},{team:"Ottawa Senators"},{team:"Toronto Maple Leafs"},{team:"Calgary Flames"},{team:"Colorado Avalanche"},{team:"Edmonton Oilers"},{team:"Minnesota Wild"},{team:"Vancouver Canucks"},{team:"Carolina Hurricanes"},{team:"Florida Panthers"},{team:"Tampa Bay Lightning"},{team:"Washington Capitals"},{team:"Winnipeg Jets"},{team:"Anaheim Ducks"},{team:"Dallas Stars"},{team:"Los Angeles Kings"},{team:"Phoenix Coyotes"},{team:"San Jose Sharks"}],c=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("team"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:d}),p=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("team"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:u});$(".typeahead-multi-datasets").typeahead({hint:!isRtl,highlight:!0,minLength:0},{name:"nba-teams",source:c,display:"team",templates:{header:'<h4 class="league-name border-bottom mb-0 mx-3 mt-3 pb-2">NBA Teams</h4>'}},{name:"nhl-teams",source:p,display:"team",templates:{header:'<h4 class="league-name border-bottom mb-0 mx-3 mt-3 pb-2">NHL Teams</h4>'}})});