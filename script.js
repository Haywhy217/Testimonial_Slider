const slider = document.querySelector('.testimonial-slider');
  const cards = document.querySelectorAll('.testimonial-card');
  let currentIndex = 0 ;

      const rotateCards = () =>{
          const reorderedCards= Array.from(cards).map((_,i) =>
            cards[(currentIndex + i) % cards.length]
          );

          slider.innerHTML ='';
          reorderedCards.slice(0,3).forEach((card, index) => {
            const clonedCard =card.cloneNode(true);
            clonedCard.classList.remove('active','shrink');


            if (index === 0 || index === 2){
                clonedCard.classList.add('shrink')
            } else if(index === 1){
                clonedCard.classList.add('active');
            }

            slider.appendChild(clonedCard);
          });
      
      
      
          currentIndex =(currentIndex + 1) % cards.length;
      };


      rotateCards();

      setInterval(rotateCards,10000);
        