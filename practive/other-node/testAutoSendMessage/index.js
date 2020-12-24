const nodemailer=require("nodemailer");
const {default:Axios} =require("axios");

function getHoneyedWords(){
    var url="https://chp.shadiao.app/api.php";
    return Axios.get(url);
}

//发送邮件函数
async function sendMail(text){
    var user="2992945380@qq.com"
    var pass="pjwtpsbcuvhhdeeb"
    var to="941405119@qq.com"

    let transporter=nodemailer.createTransport(
        {
            host:"smtp.qq.com",
            port:587,
            secure:false,
            auth:{
                user:user,
                pass:pass,
            },
        }
    );
    let info =await transporter.sendMail({
        from:`lr<${user}>`,
        to:`zd<${to}>`,
        subject:"Dear zd",
        text:text,
    });
  console.log("发送成功~~")
};

//获取情话
getHoneyedWords().then(res=>{
    console.log(res.data)
    sendMail(res.data)
})
