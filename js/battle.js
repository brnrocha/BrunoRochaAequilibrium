window.onload = function () {
     var request = new XMLHttpRequest();
        request.open('GET', './data/specs.json');
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var autobots = JSON.parse(request.responseText).Autobots;
                var decepticons = JSON.parse(request.responseText).Decepticons;
            }else {
                console.log("Sorry! I can't contact the Transformers!!");
            }

            var randomAuto = Array.from({length: 3}, () => Math.floor(Math.random() * 10));
            var getRandomAuto = randomAuto;
            var randomDecept = getRandomDecept = Array.from({length: 3}, () => Math.floor(Math.random() * 10));
            var getRandomDecept = randomAuto;

            // $.each(randomAuto, function(i, el){
            //     if($.inArray(el, getRandomAuto) === -1) getRandomAuto.push(el);
            // });
            // $.each(randomDecept, function(i, el){
            //     if($.inArray(el, getRandomDecept) === -1) getRandomDecept.push(el);
            // });

            var playerAuto = getRandomAuto[0];
            var playerDecept = getRandomDecept[0];
            //Autobot
            var Autobot = {
                id:autobots[playerAuto].id,
                allegiance: autobots[playerAuto].Name,
                name: autobots[playerAuto].Name,
                strength: autobots[playerAuto].Strength,
                intelligence : autobots[playerAuto].Intelligence,
                speed: autobots[playerAuto].Speed,
                endurance: autobots[playerAuto].Endurance,
                firePower:  autobots[playerAuto].FirePower,
                skill: autobots[playerAuto].Skill,
                courage: autobots[playerAuto].Courage
            }

            //Decepticon
            var Decepticon = {
                id: decepticons[playerDecept].id,
                allegiance: decepticons[playerDecept].Allegiance,
                name: decepticons[playerDecept].Name,
                strength: decepticons[playerDecept].Strength,
                intelligence : decepticons[playerDecept].Intelligence,
                speed: decepticons[playerDecept].Speed,
                endurance: decepticons[playerDecept].Endurance,
                firePower: decepticons[playerDecept].FirePower,
                skill: decepticons[playerDecept].Skill,
                courage: decepticons[playerDecept].Courage
            }

            function Auto(id, allegiance, name, strength, intelligence, speed, endurance, firepower, skill, courage){
                this.id = id;
                this.allegiance = allegiance;
                this.name = name;
                this.strength = strength;
                this.intelligence = intelligence;
                this.speed = speed;
                this.endurance = endurance;
                this.firePower = firepower;
                this.skill = skill;
                this.courage = courage;
            }

            function Decept(id, allegiance, name, strength, intelligence, speed, endurance, firepower, skill, courage){
                this.id = id;
                this.allegiance = allegiance;
                this.name = name;
                this.strength = strength;
                this.intelligence = intelligence;
                this.speed = speed;
                this.endurance = endurance;
                this.firePower = firepower;
                this.skill = skill;
                this.courage = courage;
            }

            var autobot1 = new Auto(
                autobots[getRandomAuto[0]].id,
                autobots[getRandomAuto[0]].Allegiance,
                autobots[getRandomAuto[0]].Name,
                autobots[getRandomAuto[0]].Strength,
                autobots[getRandomAuto[0]].Intelligence,
                autobots[getRandomAuto[0]].Speed,
                autobots[getRandomAuto[0]].Endurance,
                autobots[getRandomAuto[0]].FirePower,
                autobots[getRandomAuto[0]].Skill,
                autobots[getRandomAuto[0]].Courage,
                );

            var autobot2 = new Auto(
                autobots[getRandomAuto[1]].id,
                autobots[getRandomAuto[1]].Allegiance,
                autobots[getRandomAuto[1]].Name,
                autobots[getRandomAuto[1]].Strength,
                autobots[getRandomAuto[1]].Intelligence,
                autobots[getRandomAuto[1]].Speed,
                autobots[getRandomAuto[1]].Endurance,
                autobots[getRandomAuto[1]].FirePower,
                autobots[getRandomAuto[1]].Skill,
                autobots[getRandomAuto[1]].Courage,
            );

            var autobot3 = new Auto(
                autobots[getRandomAuto[2]].id,
                autobots[getRandomAuto[2]].Allegiance,
                autobots[getRandomAuto[2]].Name,
                autobots[getRandomAuto[2]].Strength,
                autobots[getRandomAuto[2]].Intelligence,
                autobots[getRandomAuto[2]].Speed,
                autobots[getRandomAuto[2]].Endurance,
                autobots[getRandomAuto[2]].FirePower,
                autobots[getRandomAuto[2]].Skill,
                autobots[getRandomAuto[2]].Courage,
            );

            var decept1 = new Decept(
                decepticons[getRandomDecept[0]].id,
                decepticons[getRandomDecept[0]].Allegiance,
                decepticons[getRandomDecept[0]].Name,
                decepticons[getRandomDecept[0]].Strength,
                decepticons[getRandomDecept[0]].Intelligence,
                decepticons[getRandomDecept[0]].Speed,
                decepticons[getRandomDecept[0]].Endurance,
                decepticons[getRandomDecept[0]].FirePower,
                decepticons[getRandomDecept[0]].Skill,
                decepticons[getRandomDecept[0]].Courage,
            );
            var decept2 = new Decept(
                decepticons[getRandomDecept[1]].id,
                decepticons[getRandomDecept[1]].Allegiance,
                decepticons[getRandomDecept[1]].Name,
                decepticons[getRandomDecept[1]].Strength,
                decepticons[getRandomDecept[1]].Intelligence,
                decepticons[getRandomDecept[1]].Speed,
                decepticons[getRandomDecept[1]].Endurance,
                decepticons[getRandomDecept[1]].FirePower,
                decepticons[getRandomDecept[1]].Skill,
                decepticons[getRandomDecept[1]].Courage,
            );
            var decept3 = new Decept(
                decepticons[getRandomDecept[2]].id,
                decepticons[getRandomDecept[2]].Allegiance,
                decepticons[getRandomDecept[2]].Name,
                decepticons[getRandomDecept[2]].Strength,
                decepticons[getRandomDecept[2]].Intelligence,
                decepticons[getRandomDecept[2]].Speed,
                decepticons[getRandomDecept[2]].Endurance,
                decepticons[getRandomDecept[2]].FirePower,
                decepticons[getRandomDecept[2]].Skill,
                decepticons[getRandomDecept[2]].Courage,
            );

            //SUM Specs
            var numberAuto1 = [autobot1.strength, autobot1.intelligence, autobot1.speed, autobot1.endurance, autobot1.firePower];
            var numberDecept1 = [decept1.strength, decept1.intelligence, decept1.speed, decept1.endurance, decept1.firePower];
            var numberAuto2 = [autobot2.strength, autobot2.intelligence, autobot2.speed, autobot2.endurance, autobot2.firePower];
            var numberDecept2 = [decept2.strength, decept2.intelligence, decept2.speed, decept2.endurance, decept2.firePower];
            var numberAuto3 = [autobot3.strength, autobot3.intelligence, autobot3.speed, autobot3.endurance, autobot3.firePower];
            var numberDecept3 = [decept3.strength, decept3.intelligence, decept3.speed, decept3.endurance, decept3.firePower];

            const overAll = function(total,num){
                return total + num;
            }
            let sumAuto1 = numberAuto1.reduce(overAll);
            let sumDecept1 = numberDecept1.reduce(overAll);
            let sumAuto2 = numberAuto2.reduce(overAll);
            let sumDecept2 = numberDecept2.reduce(overAll);
            let sumAuto3 = numberAuto3.reduce(overAll);
            let sumDecept3 = numberDecept3.reduce(overAll);

            var autoWins = 0;
            var deceptWins = 0;
            var winner1 = '';
            var winner2 = '';
            var winner3 = '';
            var looser1 ='';
            var looser2 ='';
            var looser3 ='';
            var survaviors = '';
            var finalWinner1 ='';
            var finalLooser1 ='';

            //Show Elements

            $('#auto1').text(autobot1.name);
            $('#auto2').text(autobot2.name);
            $('#auto3').text(autobot3.name);
            $('#decept1').text(decept1.name);
            $('#decept2').text(decept2.name);
            $('#decept3').text(decept3.name);


            function fight1(){
                if(autobot1.id === 1){
                    $('#result-first-fight').text("OPTIMUS PRIME is the winner! " + decept1.name + "destroyed!");
                    winner1 = autobot1;
                    looser1 = decept1;
                    autoWins += 1;

                    return;
                }else if(decept1.id === 1){
                    $('#result-first-fight').text("PREDAKING PRIME is the winner! " + autobot1.name + "destroyed!");
                    deceptWins += 1;
                    winner1 = decept1;
                    looser1 = autobot1;
                    return;
                }else if(autobot1.id === 1 && decept1.id === 1){
                    $('#result-first-fight').text("OPTIMUS PRIME and PREDAKINF destroyed!");


                }else if(autobot1.strength <= 4 && autobot1.courage <=3 && decept1.strength > 4 && decept1.courage > 3 ){
                    $('#result-first-fight').text(autobot1.name + " Wins" + decept1.name + "Ran Away!");
                    winner1 = autobot1;
                    looser1 = decept1;

                }else if(decept1.strength <= 4 && decept1.courage <=3 && autobot1.strength > 4 && autobot1.courage > 3 ){
                    $('#result-first-fight').text(decept1.name + " Wins" + autobot1.name + "Ran Away!");
                    winner1 = decept1;
                    looser1 = autobot1;
                    deceptWins += 1;
                }
                else if(sumAuto1 > sumDecept1){
                    $('#result-first-fight').text(autobot1.name + " is the Winner!");
                    autoWins += 1;
                    winner1 = autobot1;
                    looser1 = decept1;
                }else if(sumAuto1 === sumDecept1) {
                    $('#result-first-fight').text(autobot1.name + " and " + decept1.name + "were destroyed!");
                }
                else{
                    $('#result-first-fight').text(decept1.name + " is the Winner!");
                    deceptWins += 1;
                    winner1 = decept1;
                    looser1 = autobot1;

                }
            }

            function fight2(){
                if(autobot2.id === 1){
                    $('#result-second-fight').text("OPTIMUS PRIME is the winner! " + decept2.name + "destroyed!");
                    autoWins += 1;
                    winner2 = autobot2;
                    looser2 = decept2;
                    return;
                }else if(decept2.id === 1){
                    $('#result-second-fight').text("PREDAKING is the winner! " + autobot2.name + "destroyed!");
                    deceptWins += 1;
                    winner2 = decept2;
                    looser2 = autobot2;

                    return;
                }else if(autobot2.id === 1 && decept2.id === 1){
                    $('#result-second-fight').text("OPTIMUS PRIME and PREDAKINF destroyed!");

                }else if(autobot2.strength <= 4 && autobot2.courage <=3 && decept2.strength > 4 && decept2.courage > 3 ){
                    $('#result-second-fight').text(autobot2.name + " Wins " + decept2.name + "Ran Away!");
                    winner2 = autobot2;
                    looser2 = decept2;

                }else if(decept2.strength <= 4 && decept2.courage <=3 && autobot2.strength > 4 && autobot2.courage > 3 ){
                    $('#result-second-fight').text(decept2.name + " Wins" + autobot2.name + "Ran Away!");
                    deceptWins += 1;
                    winner2 = decept2;
                    looser2 = autobot2;

                }
                else if(sumAuto2 > sumDecept2){
                    $('#result-second-fight').text(autobot2.name + " is the Winner");
                    autoWins += 1;
                    winner2 = autobot2;
                    looser2 = decept2;

                }else if(sumAuto2 === sumDecept2) {
                    $('#result-second-fight').text(autobot2.name + " and " + decept2.name + "were destroyed!");
                }
                else{
                    $('#result-second-fight').text(decept2.name + " is the Winner!");
                    deceptWins += 1;
                    winner2 = decept2;
                    looser2 = autobot2;
                }
            }

            function fight3(){
                if(autobot3.id === 1 && decept3.id === 1){
                    $('#result-third-fight').text("OPTIMUS PRIME and PREDAKING destroyed!");

                }if(autobot3.id === 1){
                    $('#result-third-fight').text("OPTIMUS PRIME is the winner!");
                    autoWins += 1;
                    winner3 = autobot3;
                    looser3 = decept3;

                    return;
                }else if(decept3.id === 1){
                    $('#result-third-fight').text("PREDAKING PRIME is the winner!");
                    deceptWins += 1;
                    winner3 = decept3;
                    looser3 = autobot3;
                    return;
                }else if(autobot3.strength <= 4 && autobot3.courage <=3 && decept3.strength > 4 && decept3.courage > 3 ){
                    $('#result-third-fight').text(decept3.name + " Wins " + decept3.name + "Ran Away!");
                }else if(decept3.strength <= 4 && decept3.courage <=3 && autobot3.strength > 4 && autobot3.courage > 3 ){
                    $('#result-third-fight').text(decept3.name + " Wins " + autobot3.name + "Ran Away!");
                    winner3 = decept3;
                    looser3 = autobot3;
                    deceptWins += 1;
                }
                else if(sumAuto3 > sumDecept3){
                    $('#result-third-fight').text(autobot3.name + " is the Winner");
                    autoWins += 1;
                    winner3 = autobot3;
                    looser3 = decept3;

                }else if(sumAuto3 === sumDecept3) {
                    $('#result-third-fight').text(autobot3.name + " and " + decept3.name + "were destroyed!");
                }
                else{
                    $('#result-third-fight').text(decept3.name + " is the Winner!");
                    deceptWins += 1;
                    winner3 = {decept3};
                    looser3 = autobot3;
                }
            }

            function finalFight(){
                var numberWinner1 = [winner1.strength, winner1.intelligence, winner1.speed, winner1.endurance, winner1.firePower];
                var numberWinner2 = [winner2.strength, winner2.intelligence, winner2.speed, winner2.endurance, winner2.firePower];
                var numberWinner3 = [winner3.strength, winner3.intelligence, winner3.speed, winner3.endurance, winner3.firePower];

                const overAll = function(total,num){
                    return total + num;
                }
                let sumWinner1 = numberWinner1.reduce(overAll);
                let sumWinner2 = numberWinner2.reduce(overAll);
                let sumWinner3 = numberWinner3.reduce(overAll);


                if(winner1.allegiance != winner2.allegiance){
                    if(winner1.name == "OPTIMUS PRIME"){
                        $('#result-final-fight').text("OPTIMUS PRIME is the winner!");
                        autoWins += 1;
                        finalWinner1 = winner1;
                        finalLooser1 = winner2;
                        survaviors = winner3;

                        return;
                    }else if(winner1.name == "PREDAKING"){
                        $('#result-final-fight').text("PREDAKING is the winner!");
                        deceptWins += 1;
                        finalWinner1 = winner1;
                        finalLooser1 = winner2;
                        survaviors = winner3;
                        return;
                    }else if(winner1.id === 1 && winner2.id === 1){
                        $('#result-final-fight').text("OPTIMUS PRIME and PREDAKINF destroyed!");
                        finalLooser1 = winner1 + "and" + winner2;
                        survaviors = winner3;

                    }else if(winner1.strength <= 4 && winner1.courage <=3 && winner2.strength > 4 && winner2.courage > 3 ){
                        $('#result-final-fight').text(winner1.name + " Wins " + winner2.name + "Ran Away!");
                        finalWinner1 = winner1;
                        finalLooser1 = winner2;
                        survaviors = winner3;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }else if(winner2.strength <= 4 && winner2.courage <=3 && winner1.strength > 4 && winner1.courage > 3 ){
                        $('#result-final-fight').text(winner2.name + " Wins " + winner1.name + "Ran Away!");
                        finalWinner1 = winner2;
                        finalLooser1 = winner1;
                        survaviors = winner3;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                    else if(sumWinner1 > sumWinner2){
                        $('#result-final-fight').text(winner1.name + " is the Winner!");
                        finalWinner1 = winner1;
                        finalLooser1 = winner2;
                        survaviors = winner3;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }

                    }else if(sumWinner1 === sumWinner2) {
                        $('#result-final-fight').text(winner1.name + " and " + winner2.name + "were destroyed!");
                        finalLooser1 = winner2 + "and" + winner1;
                        survaviors = winner3;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                    else{
                        $('#result-final-fight').text(winner2.name + " is the Winner!");
                        finalWinner1 = winner2;
                        finalLooser1 = winner1;
                        survaviors = winner3;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }



                }else if(winner1.allegiance != winner3.alleallegiance){
                    if(winner1.name == "OPTIMUS PRIME"){
                        $('#result-final-fight').text("OPTIMUS PRIME is the winner!");
                        autoWins += 1;
                        finalWinner1 = winner1;
                        finalLooser1 = winner2;
                        survaviors = winner3;

                        return;
                    }else if(winner1.name == "PREDAKING"){
                        $('#result-final-fight').text("PREDAKING PRIME is the winner!");
                        deceptWins += 1;
                        finalWinner1 = winner1;
                        finalLooser1 = winner2;
                        survaviors = winner3;
                        return;
                    }else if(winner1.id === 1 && winner3.id === 1){
                        $('#result-final-fight').text("OPTIMUS PRIME and PREDAKINF destroyed!");;
                        finalLooser1 = winner1 + "and" + winner3;
                        survaviors = winner2;

                    }else if(winner1.strength <= 4 && winner1.courage <=3 && winner3.strength > 4 && winner3.courage > 3 ){
                        $('#result-final-fight').text(winner1.name + " Wins " + winner3.name + "Ran Away!");
                        finalWinner1 = winner1;
                        finalLooser1 = winner3;
                        survaviors = winner2;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }else if(winner3.strength <= 4 && winner3.courage <=3 && winner1.strength > 4 && winner1.courage > 3 ){
                        $('#result-final-fight').text(winner3.name + " Wins " + winner1.name + "Ran Away!");
                        finalWinner1 = winner3;
                        finalLooser1 = winner1;
                        survaviors = winner2;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                    else if(sumWinner1 > sumWinner3){
                        $('#result-final-fight').text(winner1.name + " is the Winner");
                        finalWinner1 = winner1;
                        finalLooser1 = winner3;
                        survaviors = winner2;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }

                    }else if(sumWinner1 === sumWinner3) {
                        $('#result-final-fight').text(winner1.name + " and " + winner3.name + "were destroyed!");
                        finalLooser1 = winner3 + "and" + winner1;
                        survaviors = winner2;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                    else{
                        $('#result-final-fight').text(winner3.name + " is the Winner!");
                        finalWinner1 = winner2;
                        finalLooser1 = winner1;
                        survaviors = winner3;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                }else if(winner2.allegiance !=  winner3.allegiance){
                    if(winner2.name == "OPTIMUS PRIME"){
                        $('#result-final-fight').text("OPTIMUS PRIME is the winner!");
                        autoWins += 1;
                        finalWinner1 = winner2;
                        finalLooser1 = winner3;
                        survaviors = winner1;

                        return;
                    }else if(winner2.name == "PREDAKING"){
                        $('#result-final-fight').text("PREDAKING is the winner!");
                        deceptWins += 1;
                        finalWinner1 = winner2;
                        finalLooser1 = winner3;
                        survaviors = winner1;
                        return;
                    }else if(winner2.id === 1 && winner3.id === 1){
                        $('#result-final-fight').text("OPTIMUS PRIME and PREDAKINF destroyed!");;
                        finalLooser1 = winner1 + "and" + winner3;
                        survaviors = winner2;

                    }else if(winner2.strength <= 4 && winner2.courage <=3 && winner3.strength > 4 && winner3.courage > 3 ){
                        $('#result-final-fight').text(winner2.name + " Wins " + winner3.name + "Ran Away!");
                        finalWinner1 = winner2;
                        finalLooser1 = winner3;
                        survaviors = winner1;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }else if(winner3.strength <= 4 && winner3.courage <=3 && winner2.strength > 4 && winner2.courage > 3 ){
                        $('#result-final-fight').text(winner3.name + " Wins " + winner2.name + "Ran Away!");
                        finalWinner1 = winner3;
                        finalLooser1 = winner2;
                        survaviors = winner1;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                    else if(sumWinner2 > sumWinner3){
                        $('#result-final-fight').text(winner2.name + " is the Winner");
                        finalWinner1 = winner2;
                        finalLooser1 = winner3;
                        survaviors = winner1;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }

                    }else if(sumWinner2 === sumWinner3) {
                        $('#result-final-fight').text(winner2.name + " and " + winner3.name + "were destroyed!");
                        finalLooser1 = winner3 + "and" + winner2;
                        survaviors = winner1;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                    else{
                        $('#result-final-fight').text(winner3.name + " is the Winner!");
                        finalWinner1 = winner3;
                        finalLooser1 = winner2;
                        survaviors = winner1;
                        if(finalWinner1.allegiance == autobot1.allegiance){
                            autoWins += 1;
                        }else{
                            deceptWins += 1;
                        }
                    }
                }

            }

            $('#btnFight1').click(function () {
                fight1();
                fight2();
                fight3();
                finalFight();

        $('#scoreboard').text( autoWins +" AUTOBOTS " + "- VS -" + " DECEPTICONS " + deceptWins);
        $(".results").fadeIn();
        $("#Finalwinner").text("Final winner is " + finalWinner1.name);
                $("#survavior").text(survaviors.name + " survived!");


                setTimeout(function(){
                    if(autoWins > deceptWins){
                         if(!alert(autobot1.allegiance + " WINS THE WAR!")){window.location.reload();}
                    }else{
                         if(!alert(decept1.allegiance + " WINS THE WAR!")){window.location.reload();}
                    }
                    }, 3000);






            });
        };
        request.onerror = function () {
            console.log("Connection error");
        };
        request.send();






}