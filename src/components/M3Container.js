import React from 'react';
export default function M3Container() {
  
  return (
    <div className="mContainer m3Container" id="11">
      <div className="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            01. Why pet is a part of our life?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <p className='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem illum in aliquid eos non,
                    et labore maiores porro. At totam dolor laborum perferendis voluptatem inventore ea eius fuga rerum
                    hic nisi, nobis maiores, distinctio eos sequi pariatur. Pariatur earum, consequuntur vero et
                    possimus ducimus optio sit nisi blanditiis dolores hic quaerat quia quam cumque provident voluptas
                    at fugit aliquam numquam omnis ad eveniet deserunt!
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            02. How we take care about our pet?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <p className='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem illum in aliquid eos non,
                    et labore maiores porro. At totam dolor laborum perferendis voluptatem inventore ea eius fuga rerum
                    hic nisi, nobis maiores, distinctio eos sequi pariatur. Pariatur earum, consequuntur vero et
                    possimus ducimus optio sit nisi blanditiis dolores hic quaerat quia quam cumque provident voluptas
                    at fugit aliquam numquam omnis ad eveniet deserunt!
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            03. Which pet you choose and Why?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <p className='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem illum in aliquid eos non,
                    et labore maiores porro. At totam dolor laborum perferendis voluptatem inventore ea eius fuga rerum
                    hic nisi, nobis maiores, distinctio eos sequi pariatur. Pariatur earum, consequuntur vero et
                    possimus ducimus optio sit nisi blanditiis dolores hic quaerat quia quam cumque provident voluptas
                    at fugit aliquam numquam omnis ad eveniet deserunt!
            </p>
          </div>
        </div>
      </div>


      <div className="help">
        <div className="paws">
          <div className="oneP">
            <i className="fa-solid fa-paw"></i>
          </div>
          <div className="twoP">
            <i className="fa-solid fa-paw"></i>
          </div>
          <div className="threeP">
            <i className="fa-solid fa-paw"></i>
          </div>
        </div>
        <div className="afterPaw">
          <h3 id="helper3">We are working for the community</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, architecto beatae mollitia iusto
            quaerat numquam.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio officiis repellat
            nihil laudantium error!
          </p>
          <div id="phone">
            <i className="fa-solid fa-phone-volume"> </i>
            +(91) 9424255189
          </div>
        </div>
      </div>
    </div>
  )
}