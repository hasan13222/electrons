import {BsEnvelopeFill, BsEnvelopeOpen} from 'react-icons/bs'
const Newsletter = () => {
  return (
    <>
        <div className="full_container newsletter_full">
            <div className="fix_container newsletter">
                <p><BsEnvelopeOpen/> <span>Newsletter</span></p>
                <h2>Get weekly update</h2>

                <form className="subscribe">
                    <input type="email" name="email" id="email" placeholder="Enter your Email" />
                    <BsEnvelopeFill className="mail_icon"/>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
    </>
  )
}

export default Newsletter