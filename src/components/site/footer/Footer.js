import { GitHub, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'

import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <section>
                <div className="title">
                    <p> آکادمی آنلاین فرانت هوکس، دوره های کوچ محور برنامه نویسی وب</p>
                </div>

                <div className="info">
                    <p>حسین غیاثی هستم ، برنامه نویس وب. از سال 93 به برنامه نویسی مشغول هستم و بیش از سه سال هست که به صورت تخصصی به عنوان توسعه دهنده فرانت در استارتاپ هایی مثل</p>

                    <p>
                        در این چند سال چالش های زیادی را در زمینه برنامه نویسی چه به صورت کار فریلنسری در سایت های خارجی
                        و همچنین در کار تیمی تجربه کرده ام. هزینه مالی و زمانی بسیار زیادی را بابت کسب آموزش در معتبر ترین
                        دوره های سایت های خارجی صرف کردم. همه ی
                        آموزش های فرانت هوکس بر پایه سه اصل، دوره های با کیفیت و
                        پروژه محور و به روز، پشتیبانی مادام العمر به همراه آپدیت های رایگان و عودت هزینه در صورت هر گونه نارضایتی استوار است. امیدوارم فرانت
                        هوکس همراه خوبی برای ورود شما به بازار کار و دنیای برنامه نویسی باشد. شما می توانید از طریق
                    </p>
                </div>

                <div className="markting">
                    <Instagram className="markIcon" />
                    <LinkedIn className="markIcon" />
                    <GitHub className="markIcon" />
                    <Twitter className="markIcon" />
                    <Telegram className="markIcon" />
                    <YouTube className="markIcon" />
                </div>
                <h4>تمامی حقوق برای فرانت هوکس محفوظ است</h4>
            </section>


        </div>
    )
}

export default Footer
