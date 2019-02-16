window.onload=function(){
    var notify=setTimeout(function(){
        if(!('checkNotifications' in localStorage)){
            var text=[
                {
                    h: 'Email Tip of the day Tip 1',
                    t: 'More than 60% of emails we send do not require a response.',
                    u: 'Use "No response needed" to make sure recipients know that a response is unnecessary.'
                },
                {
                    h: 'Email Tip of the day Tip 2',
                    t: 'More than 60% of emails we send do not require a response.',
                    u: 'Use "No response needed" to make sure recipients know that a response is unnecessary.'
                },
                {
                    h: 'Email Tip of the day Tip 3',
                    t: 'More than 60% of emails we send do not require a response.',
                    u: 'Use "No response needed" to make sure recipients know that a response is unnecessary.'
                },
                {
                    h: 'Email Tip of the day Tip 4',
                    t: 'More than 60% of emails we send do not require a response.',
                    u: 'Use "No response needed" to make sure recipients know that a response is unnecessary.'
                },
                {
                    h: 'Email Tip of the day Tip 5',
                    t: 'More than 60% of emails we send do not require a response.',
                    u: 'Use "No response needed" to make sure recipients know that a response is unnecessary.'
                },
                {
                    h: 'Email Tip of the day Tip 6',
                    t: 'More than 60% of emails we send do not require a response.',
                    u: 'Use "No response needed" to make sure recipients know that a response is unnecessary.'
                }
            ];
            //Create the notification
            var mainBox=document.createElement('div');
            mainBox.className='mainBox';
            var textBox=document.createElement('div');
            textBox.className='textWrapper';
            mainBox.appendChild(textBox);
            var footerN=document.createElement('div');
            footerN.className='footerNotification';
            mainBox.appendChild(footerN);
            // closing button
            var buttonCross=document.createElement('div');
            buttonCross.className='cross';
            buttonCross.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
            mainBox.appendChild(buttonCross);
            buttonCross.addEventListener('click',function(e){
                var temp=this.parentElement;
                temp.style.animation='disappear 1s';
                setInterval(function(){
                    temp.style.display='none';
                }, 1000);
            });
            //create checkbox
            var checkBoxLabel=document.createElement('label');
            var checkBox=document.createElement('input');
            checkBox.setAttribute('type','checkbox');
            checkBox.setAttribute('title','Подсказка больше не будет всплывать после закрытия');
            checkBoxLabel.appendChild(checkBox);
            var textLabel=document.createElement('span');
            textLabel.innerHTML='Disable Tips';
            checkBoxLabel.appendChild(textLabel);
            footerN.appendChild(checkBoxLabel);
            //set to local storage
            checkBox.addEventListener('change',function(e){
                if(this.checked){
                localStorage.setItem('checkNotifications',false);
                }else{
                localStorage.removeItem('checkNotifications');
                }
            });
            //create arrows
            var arrowsContainer=document.createElement('div');
            arrowsContainer.className='arrows';
            var arrowLeft=document.createElement('div');
            arrowLeft.className='arrow';
            arrowLeft.innerHTML='<i class="fa fa-angle-left" aria-hidden="true"></i>';
            arrowsContainer.appendChild(arrowLeft);
            var pointConainer=document.createElement('div');
            pointConainer.className='points';
            arrowsContainer.appendChild(pointConainer);
            var arrowRight=document.createElement('div');
            arrowRight.className='arrow';
            arrowRight.innerHTML='<i class="fa fa-angle-right" aria-hidden="true"></i>';
            arrowsContainer.appendChild(arrowRight);
            footerN.appendChild(arrowsContainer);
            //generate points and slides
            var arrSlides=[];
            var arrPoints=[];
            for(var i=0; i<text.length; i++){
                var slide=document.createElement('div');
                slide.className='hidden';
                for (key in text[i]){
                    switch(key){
                        case 'h':
                            var heading=document.createElement('h2');
                            var textY=text[i][key];
                            heading.innerHTML=textY.toUpperCase();
                            slide.appendChild(heading);
                        break;
                        default:
                            var textP=document.createElement('p');
                            textP.innerHTML=text[i][key];
                            slide.appendChild(textP);
                        break;
                    }
                }
                textBox.appendChild(slide);
                arrSlides.push(slide);
                var point=document.createElement('div');
                point.className='pointSmall';
                pointConainer.appendChild(point);
                arrPoints.push(point);
            }
            document.body.appendChild(mainBox);
            arrPoints[3].classList.add('active');
            arrSlides[3].className='activeDiv';
            function findDiv(){
                var currentDiv=document.getElementsByClassName('activeDiv')[0];
                var m=arrSlides.indexOf(currentDiv);
                return m;
            }
            function previousTip(){
                var index=findDiv();
                if(index>0){
                arrSlides[index].className='hidden';
                arrSlides[index-1].className='activeDiv';
                arrPoints[index].classList.remove('active');
                arrPoints[index-1].classList.add('active');
                }
            }
            function nextTip(){
                var index=findDiv();
                if(index<arrSlides.length-1){
                arrSlides[index].className='hidden';
                arrSlides[index+1].className='activeDiv'; 
                arrPoints[index].classList.remove('active');
                arrPoints[index+1].classList.add('active');
                }
            }
            arrowLeft.addEventListener('click',previousTip,false);
            arrowRight.addEventListener('click',nextTip,false);
            addEventListener('keydown',function(e){
                switch(e.keyCode){
                    case 37:
                    previousTip();
                    break;
                    case 39:
                    nextTip();
                    break;
                    case 88:
                    mainBox.style.display='none';
                    break;
                }
            });
        }
    },5000); 
};