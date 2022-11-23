import React from 'react'
import './css/contact.css'

export const Contact = () => {
  return (
    <div className='contact'>

      <div className='form__container'>
        <form action='' method=''>
          <div className='form__input'>
            <input className='border-width' type="text" id="name" placeholder="Your Name" />
          </div>
          <div className='form__input'>
            <input className='border-width' type="email" id="email" placeholder='Your Email'/>   
          </div>
          <div className='form__input'>
            <label for='textarea'>Share your thoughts</label>
            <textarea placeholder='Maximo 200 caracteres' maxlength='200' autocorrect='on' className='border-width' type="text" id="textarea" />
          </div>
          <input class="form__button" value="Share" type="submit" data-wait="Please wait..."/>
        </form>
      </div>

      <div className='about-contact'>
        <h2>Contact Us</h2>
        <p>
          Consectetur occaecat mollit culpa laboris est voluptate eu irure adipisicing. Officia minim exercitation ea anim amet dolore est sit. Consequat reprehenderit labore esse cillum enim aliqua. Occaecat dolor dolore et ex Lorem ex elit irure labore. Esse aliqua commodo est ut dolor ex Lorem incididunt occaecat nisi dolore mollit labore. Occaecat elit id cupidatat ullamco labore nisi ex ex aliqua irure incididunt irure ad. Labore magna ut sit Lorem.
        </p>
      </div>

    </div>
  )
}
