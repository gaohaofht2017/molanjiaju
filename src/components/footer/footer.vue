<template>
<div class="footer">
    <div class="container">
        <section class="logo"></section>
        <section class="explain">
            <h4>墨馨安居</h4>
            <ul>
                <li><a href="">关于我们</a></li>
                <li><a href="">联系我们</a></li>
                <li><a href="">合作加盟</a></li>
                <li><a href="">招贤纳士</a></li>
            </ul>
        </section>
        <section class="explain">
            <h4>常见问题</h4>
            <ul>
                <li><a href="">网站服务协议</a></li>
                <li><a href="">隐私条款</a></li>
            </ul>
        </section>
        <section class="contact">
            <div class="phone">
                <i></i>
                400 123 321 12
            </div>
            <div class="email">
                <i></i>
                info@melrealty.com
            </div>
        </section>
        <section class="wechat">
            <p>微信服务号</p>
            <div class="wechat_image">
                <div class="aboutUs">关注我们</div>

            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    .footer{
        padding: 40px 0;
        .container{
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
        }
        .logo{
            width: 171px;
            height: 48px;
            background: url(../../assets/images/logo.png);
        }
        .explain{
            font-family: "Microsoft Yahei";
            h4{
                font-size: 16px;
                color: #333;
                margin-bottom: 20px;
            }
            li{
                margin: 20px 0;
                font-size: 14px;
                color: #666;
            }
        }
        .contact{
            font-family: Arial;
            font-size: 30px;
            color:#fe5924;
            text-align: left;
            .phone{
                font-weight: bold;
                i{
                    display: inline-block;
                    width: 22px;
                    height: 26px;
                    background: url(../../assets/images/phone02.png);
                }
            }
            .email{
                margin-top: 40px;
                i{
                    display: inline-block;
                    width: 23px;
                    height: 23px;
                    background: url(../../assets/images/email.png);
                }
            }
        }
        .wechat{
            position: relative;
            p{
                color: #333;
                font-size: 16px;
                margin-bottom: 10px;
            }
            .wechat_image{
                width: 130px;
                height: 129px;
                background: url(../../assets/images/wechat.png);
                .aboutUs{
                    width: 14px;
                    font-size: 14px;
                    color: #666;
                    line-height: 20px;
                    position: absolute;
                    left: -20px;
                    top:50%;
                    transform: translateY(-50%)
            }
            }
            
        }
    }
</style>

