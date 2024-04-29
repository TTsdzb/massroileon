// Khai báo một biến global để lưu trữ danh sách các bài hát
var songList = {
    "songs": []
};

// Hàm thêm bài hát
function addSong() {
    // Lấy thông tin về bài hát từ các trường input
    var idxValue = document.getElementById("newIdx").value.trim();
    var idx = idxValue !== "" ? parseInt(idxValue) : null;
    var id = document.getElementById("newId").value;
    var titleEn = document.getElementById("newTitleEn").value;
    var titleJp = document.getElementById("newTitleJp").value;
    var artist = document.getElementById("newArtist").value;
    var bpm = parseInt(document.getElementById("newBpm").value);
    var bpm_base = parseInt(document.getElementById("newBpmBase").value);
    var set = document.getElementById("newSet").value;
    var purchase = document.getElementById("newPurchase").value;
    var audioPreview = parseInt(document.getElementById("newAudioPreview").value);
    var audioPreviewEnd = parseInt(document.getElementById("newAudioPreviewEnd").value);
    var side = parseInt(document.getElementById("newSide").value);
    var bg = document.getElementById("newBg").value;
    var bg_inverse = document.getElementById("newBgInverse").value;
    var remote_dl = document.getElementById("remote_dl").checked;
    var source_en = document.getElementById("newSourceEn").value;
    var source_copyright = document.getElementById("source_copyright").value;
    var version = document.getElementById("newVersion").value;

    // Lấy thông tin về khó khăn từ các trường input
    var rating0 = parseInt(document.getElementById("rating0").value);
    var chartDesigner0 = document.getElementById("chartDesigner0").value;
    var jacketDesigner0 = document.getElementById("jacketDesigner0").value;
    var ratingPlus0 = document.getElementById("ratingPlus0").checked; // Lấy giá trị của checkbox

    var rating1 = parseInt(document.getElementById("rating1").value);
    var chartDesigner1 = document.getElementById("chartDesigner1").value;
    var jacketDesigner1 = document.getElementById("jacketDesigner1").value;
    var ratingPlus1 = document.getElementById("ratingPlus1").checked; // Lấy giá trị của checkbox

    var rating2 = parseInt(document.getElementById("rating2").value);
    var chartDesigner2 = document.getElementById("chartDesigner2").value;
    var jacketDesigner2 = document.getElementById("jacketDesigner2").value;
    var ratingPlus2 = document.getElementById("ratingPlus2").checked; // Lấy giá trị của checkbox

    var ratingClass3 = parseInt(document.getElementById("ratingClass3").value);
    var rating3 = parseInt(document.getElementById("rating3").value);
    var chartDesigner3 = document.getElementById("chartDesigner3").value;
    var jacketDesigner3 = document.getElementById("jacketDesigner3").value;
    var ratingPlus3 = document.getElementById("ratingPlus3").checked; // Lấy giá trị của checkbox
    var jacketOverride = document.getElementById("jacketOverride").checked;
    var audioOverride = document.getElementById("audioOverride").checked;

    var dateString = document.getElementById("newDate").value;
    var dateParts = dateString.split("/");
    var year = parseInt(dateParts[2]);
    var month = parseInt(dateParts[1]) - 1; // JavaScript đếm tháng từ 0 đến 11
    var day = parseInt(dateParts[0]);

// Chuyển đổi đối tượng Date thành timestamp
    var timestamp = dateObject.getTime();



// Tạo một đối tượng Date từ các phần tử ngày, tháng và năm
var dateObject = new Date(year, month, day);



    // Tạo một đối tượng JSON mới chứa thông tin về bài hát
    var newSong = {
        "id": id,
        "title_localized": {
            "en": titleEn,
            "jp": titleJp
        },
        "artist": artist,
        "bpm": bpm,
        "bpm_base": bpm_base,
        "set": set,
        "purchase": purchase,
        "audioPreview": audioPreview,
        "audioPreviewEnd": audioPreviewEnd,
        "side": side,
        "bg": bg,
        "bg_inverse": bg_inverse,
        "date": timestamp,
        "remote_dl": remote_dl,
        "source_localized": {
            "en": source_en
          },
        "source_copyright": source_copyright,
        "version": version,
        "difficulties": [
            {
                "ratingClass": 0,
                "chartDesigner": chartDesigner0,
                "jacketDesigner": jacketDesigner0,
                "rating": rating0
            },
            {
                "ratingClass": 1,
                "chartDesigner": chartDesigner1,
                "jacketDesigner": jacketDesigner1,
                "rating": rating1
            },
            {
                "ratingClass": 2,
                "chartDesigner": chartDesigner2,
                "jacketDesigner": jacketDesigner2,
                "rating": rating2
            },
            {
                "ratingClass": ratingClass3,
                "chartDesigner": chartDesigner3,
                "jacketDesigner": jacketDesigner3,
                "rating": rating3
            }
        ]
    };

    // Thêm trường "ratingPlus" chỉ khi nó khác false
    if (ratingPlus0) newSong.difficulties[0].ratingPlus = true;
    if (ratingPlus1) newSong.difficulties[1].ratingPlus = true;
    if (ratingPlus2) newSong.difficulties[2].ratingPlus = true;
    if (ratingPlus3) newSong.difficulties[3].ratingPlus = true;

    if (jacketOverride) newSong.difficulties[3].jacketOverride = true;
    if (audioOverride) newSong.difficulties[3].audioOverride = true;

    // Kiểm tra và loại bỏ thông tin về các khó khăn nếu không được nhập vào
if (rating3 === null || isNaN(rating3)) {
    newSong.difficulties.pop(); // Loại bỏ phần tử cuối cùng khỏi mảng difficulties 
}



    // Tạo một đối tượng chứa chỉ trường "idx" nếu giá trị khác null
    var idxObject = idx !== null ? {"idx": idx} : {};

    // Kết hợp đối tượng chứa thông tin bài hát và đối tượng chứa trường "idx"
    var finalSongObject = {...idxObject, ...newSong};

    // Thêm bài hát mới vào danh sách
    songList.songs.push(finalSongObject);

    // Hiển thị lại danh sách bài hát và cập nhật JSON output
    displaySongs();

    // Xóa dữ liệu trong các trường input sau khi thêm bài hát
    clearInputFields();
}

function toggleIdxField() {
    var toggleIdx = document.getElementById("toggleIdx");
    var idxField = document.getElementById("newIdx");

    if (toggleIdx.checked) {
        idxField.disabled = false; // Cho phép chỉnh sửa trường idx
    } else {
        idxField.disabled = true; // Không cho phép chỉnh sửa trường idx
    }
}


// Hàm xóa dữ liệu trong các trường input
function clearInputFields() {
    var inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach(function(input) {
        input.value = "";
    });
}

// Hàm hiển thị danh sách bài hát
function displaySongs() {
    // Lấy thẻ ul của danh sách bài hát
    var ul = document.getElementById("songList");

    // Xóa tất cả các phần tử con của ul trước khi hiển thị lại
    ul.innerHTML = "";

    // Duyệt qua mảng các bài hát và thêm chúng vào danh sách
    songList.songs.forEach(function(song, index) {
        var li = document.createElement("li");
        li.textContent = "Song: " + song.title_localized.en;

        // Tạo một nút xóa cho mỗi mục và gắn nó với hàm xóa tương ứng
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteSong(index);
        };

        // Thêm nút xóa vào phần tử li
        li.appendChild(deleteButton);

        // Thêm phần tử li vào danh sách
        ul.appendChild(li);
    });

    // Cập nhật dữ liệu JSON output
    var jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.textContent = JSON.stringify(songList, null, 2);
}

// Hàm xóa một bài hát
function deleteSong(index) {
    // Xóa một mục khỏi mảng "songs" dựa trên chỉ số (index)
    songList.songs.splice(index, 1);

    // Hiển thị lại danh sách bài hát và cập nhật JSON output
    displaySongs();
}

// Hàm sao chép nội dung của phần tử JSON output
function copyJson() {
    var jsonOutput = document.getElementById("jsonOutput");
    var range = document.createRange();
    range.selectNode(jsonOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

// Khởi tạo danh sách bài hát và hiển thị lên màn hình khi trang được tải
window.onload = function() {
    displaySongs();
};
