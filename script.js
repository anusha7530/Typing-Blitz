 const setOfWords=[
        "Happiness is a journey, not a destination",
        "Life is really simple, but we insist on making it complicated" ,
        "Enjoy the little things, for one day you may look back and realize they were the big things",
        "Smile in the mirror every morning and you will start to see a big difference in your life",
        "Life is short, smile while you still have teeth",
        "Do more things that make you forget to check your phone." ,
        "The best way to predict the future is to create it" ,
        "Be a voice, not an echo" ,
        "Kindness is a language that the deaf can hear and the blind can see" ,
        "In the end, we will remember not the words of our enemies, but the silence of our friends"
        ];
        const msg = document.getElementById('msg');
        const typedWords= document.getElementById('mywords');
        const btn = document.getElementById('btn');
        let startTime , endTime;

        const playGame= () => {
            let randomNumer = Math.floor(Math.random()*setOfWords.length);
            msg.innerText = setOfWords[randomNumer];
            let date = new Date();
            startTime = date.getTime();
            btn.innerText = 'Done';
        }

        const endPlay = () =>{
            let date = new Date();
            endTime = date.getTime();
            let totalTime = ((endTime - startTime)/1000);

            let totalStr = typedWords.value;
            let wordCount = wordCounter(totalStr);

            let speed = Math.round((wordCount / totalTime)*60);

            let finalMsg = "You typed at "+speed+" words per minutes. ";
            finalMsg += compareWords(msg.innerText, totalStr);
            msg.innerText = finalMsg;
        }

        const compareWords = (str1,str2) =>{
            let words1 = str1.split(" ");
            let words2 = str2.split(" ");
            let cnt =0;
            words1.forEach(function(item,index) {
                if(item == words2[index]){
                    cnt++;
                }
            });
            let errorWords = (words1.length - cnt);
            return(cnt+ "correct out of " + words1.length + " words and the total number of errors are " + errorWords + ".");

        }
        const wordCounter = (str) =>{
            let response = str.split(" ").length;
            return response;
        }

        btn.addEventListener('click', function(){
            if(this.innerText == 'Start'){
                typedWords.disabled = false;
                playGame();
            }
            else if(this.innerText == 'Done'){
                typedWords.disabled = true;
                btn.innerText = 'Start';
                endPlay();
                typedWords.value="";
            }
        })
