const downloadButton = document.getElementById("download-button");
const downloadLinkInput = document.getElementById("download-link");
const selectOption = document.getElementById("download-option");
const downloadLinkContainer = document.getElementById(
    "download-link-container"
);

downloadButton.addEventListener("click", () => {
    const selectedOption = selectOption.value;
    const downloadUrl = downloadLinkInput.value;

    // Membuat URL API dengan endpoint dari nilai input select
    const apiUrl = `https://fundaypay.vercel.app/downscrap/${selectedOption}?url=${encodeURIComponent(
        downloadUrl
    )}`;
    const defText = downloadButton.textContent;
    const defBg = downloadButton.style.backgroundColor;
    downloadButton.textContent = "Tunggu Sebentar..";
    downloadButton.style.backgroundColor = "#3333aa";

    // Melakukan Fetch API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Terjadi kesalahan dalam mengambil data.");
            }
            return response.json();
        })
        .then((data) => {
            // Menampilkan hasil response atau link download (disesuaikan dengan respons API)
            if (!data.links) {
                const downloadLink = document.createElement("a");
                downloadLink.href =
                    data.link || data.mp4_2 || data.mp4_hd || data.mp4_1; // Data di sini adalah link download yang diperoleh dari API
                downloadLink.textContent = "Download Video";
                downloadLink.target = "_blank"; // Buka tautan dalam tab baru
                downloadLinkContainer.innerHTML = ""; // Hapus tampilan sebelumnya
                downloadLinkContainer.appendChild(downloadLink);
            } else {
                downloadLinkContainer.innerHTML = ""; // Hapus tampilan sebelumnya
                if (selectOption == "fb") {
                    data.links.forEach((d, i) => {
                        const downloadLink = document.createElement("a");
                        downloadLink.href = d.link; // Data di sini adalah link download yang diperoleh dari API
                        downloadLink.textContent = `Download File (${d.quality})`;
                        downloadLink.target = "_blank"; // Buka tautan dalam tab baru
                        downloadLinkContainer.appendChild(downloadLink);
                    });
                } else {
                    data.links.forEach((d, i) => {
                        const downloadLink = document.createElement("a");
                        downloadLink.href = d; // Data di sini adalah link download yang diperoleh dari API
                        downloadLink.textContent = `Download File ${i + 1}`;
                        downloadLink.target = "_blank"; // Buka tautan dalam tab baru
                        downloadLinkContainer.appendChild(downloadLink);
                    });
                }
            }
            if (data.mp3) {
                const downloadLink = document.createElement("a");
                downloadLink.href = data.mp3; // Data di sini adalah link download yang diperoleh dari API
                downloadLink.textContent = "Download Audio";
                downloadLink.target = "_blank"; // Buka tautan dalam tab baru
                downloadLinkContainer.appendChild(downloadLink);
            }
            downloadButton.textContent = defText;
            downloadButton.style.backgroundColor = defBg;
        })
        .catch((error) => {
            console.error("Terjadi kesalahan:", error);
            // Menampilkan pesan kesalahan kepada pengguna jika fetch API gagal
            downloadLinkContainer.innerHTML =
                "Terjadi kesalahan dalam mengambil data.";
            downloadButton.textContent = defText;
            downloadButton.style.backgroundColor = defBg;
        });
});
