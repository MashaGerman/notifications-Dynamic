window.onload=function(){
  //  var notify=setTimeout(function(){
      
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
        var footerN=document.createElement('div');
        footerN.className='footerNotification';
        mainBox.appendChild(footerN);
        // closing button
        var buttonCross=document.createElement('div');
        buttonCross.className='cross';
        buttonCross.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
        mainBox.appendChild(buttonCross);
        buttonCross.addEventListener('click',function(e){
            this.parentElement.style.display='none';
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
            slide.className='textWrapper';
            slide.style.display='none';
            for (key in text[i]){
                switch(key){
                    case 'h':
                        var heading=document.createElement('h2');
                        heading.innerHTML=text[i][key];
                        slide.appendChild(heading);
                    break;
                    default:
                        var textP=document.createElement('p');
                        textP.innerHTML=text[i][key];
                        slide.appendChild(textP);
                    break;
                }
            }
            mainBox.appendChild(slide);
            arrSlides.push(slide);
            var point=document.createElement('div');
            point.className='pointSmall';
            pointConainer.appendChild(point);
            arrPoints.push(point);
        }
        arrPoints[3].style.backgroundColor='rgb(107, 178, 248)';
        arrSlides[3].style.display='block';



        document.body.appendChild(mainBox);
    }


   // },5000);
        
};