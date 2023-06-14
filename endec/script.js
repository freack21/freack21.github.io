import tableify from "https://cdn.jsdelivr.net/npm/tableify@1.1.1/+esm";
let result = document.getElementById("result");
let title = document.getElementById("title");

const Encode = () => {
    const I = document.getElementById("input_I").value;
    if (I < 1) {
        return (result.innerText =
            "\nJumlah masukan yang kamu inginkan tidak valid (I > 0) !!");
    }
    let encoderProps = [{ INPUT: [], OUTPUT: [] }];
    let i = 0;
    const n = Math.ceil(getBaseLog(2, I));
    do {
        let prop1 = {};
        let prop2 = {};
        for (let j = 0; j < I; j++) {
            if (j == i) prop1[`I${j}`] = 1;
            else prop1[`I${j}`] = 0;
        }
        let YProps = i.toString(2);
        for (let j = YProps.length; j < n; j++) {
            YProps = "0" + YProps;
        }
        let j = 0;
        do {
            prop2[`Y${n - j - 1 < 0 ? 0 : n - j - 1}`] = isNaN(
                Number(YProps[j])
            )
                ? 0
                : Number(YProps[j]);
            j++;
        } while (j < n);
        encoderProps[0].INPUT.push(prop1);
        encoderProps[0].OUTPUT.push(prop2);
        i++;
    } while (i < I);
    document.getElementById("result").innerHTML = tableify(encoderProps);
};

const Decode = () => {
    const n = document.getElementById("input_n").value;
    if (n < 1 || n > 5) {
        return (result.innerText =
            "\nJumlah masukan yang kamu inginkan tidak valid (6 > n > 0) !!");
    }
    let decoderProps = [{ INPUT: [], OUTPUT: [] }];
    let i = 0;
    const I = 2 ** n;
    do {
        let prop1 = {};
        let prop2 = {};
        let biner = i.toString(2);
        for (let j = biner.length; j < n; j++) {
            biner = "0" + biner;
        }
        const absChar = 91 - n;
        for (let j = 0; j < I; j++) {
            for (let k = 0; k < n; k++) {
                prop1[String.fromCharCode(absChar + k)] = Number(biner[k]);
            }
            prop2[`F${j}`] = i == j ? 1 : 0;
        }
        decoderProps[0].INPUT.push(prop1);
        decoderProps[0].OUTPUT.push(prop2);
        i++;
    } while (i < I);
    result.innerHTML = tableify(decoderProps);
};

const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
};

const submit_I = document.getElementById("submit_I");
submit_I.addEventListener("click", (e) => {
    title.style.display = "block";
    Encode();
});

const submit_n = document.getElementById("submit_n");
submit_n.addEventListener("click", (e) => {
    title.style.display = "block";
    Decode();
});
