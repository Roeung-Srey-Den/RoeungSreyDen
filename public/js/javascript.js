// <!-- header -->
  

                  const sidebar = document.getElementById('sidebar');
                  const pageContent = document.getElementById('pageContent');

        
 // <!-- project -->
   
                    let index = 1;
                    const cards = document.querySelectorAll(".card");

                    function update() {
                      cards.forEach((card, i) => {
                        card.className = "card"; // reset

                        if (i === index) {
                          card.classList.add("active");
                        } else if (i === (index - 1 + cards.length) % cards.length) {
                          card.classList.add("left");
                        } else if (i === (index + 1) % cards.length) {
                          card.classList.add("right");
                        }
                      });
                    }

                    document.querySelector(".next").onclick = () => {
                      index = (index + 1) % cards.length;
                      update();
                    };

                    document.querySelector(".prev").onclick = () => {
                      index = (index - 1 + cards.length) % cards.length;
                      update();
                    };
                    update();
                      // existing code...

                    // Make every card clickable
                    cards.forEach(card => {
                      card.addEventListener("click", () => {
                        const link = card.getAttribute("data-link");
                        if (link) {
                          window.location.href = link; // go to that page
                        }
                      });
                    });
      
    //   <!-- contact -->
       
                  document.getElementById("contactForm").addEventListener("submit", function(e) {
                      e.preventDefault();  // stop page reload

                      // Show success alert
                      alert("✔ Submit Success!");

                      // Optionally clear form
                      document.getElementById("contactForm").reset();
                  });
    