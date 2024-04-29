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

    var dateString = document.getElementById("newDate").value;
    var dateParts = dateString.split("/");
    var year = parseInt(dateParts[2]);
    var month = parseInt(dateParts[1]) - 1; // JavaScript đếm tháng từ 0 đến 11
    var day = parseInt(dateParts[0]);

    // Tạo một đối tượng Date từ các phần tử ngày, tháng và năm
    var dateObject = new Date(year, month, day);

    // Chuyển đổi đối tượng Date thành timestamp
    var timestamp = dateObject.getTime();

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
        "difficulties": []
    };

    // Thêm thông tin về các khó khăn vào mảng "difficulties"
    for (var i = 0; i <= 3; i++) {
        var ratingValue = parseInt(document.getElementById("rating" + i).value);
        var chartDesigner = document.getElementById("chartDesigner" + i).value;
        var jacketDesigner = document.getElementById("jacketDesigner" + i).value;
        var ratingPlus = document.getElementById("ratingPlus" + i).checked;
        var ratingClass = i === 3 ? parseInt(document.getElementById("ratingClass3").value) : i;

        var difficulty = {
            "ratingClass": ratingClass,
            "chartDesigner": chartDesigner,
            "jacketDesigner": jacketDesigner,
            "rating": ratingValue
        };

        if (ratingPlus) {
            difficulty.ratingPlus = true;
        }

        newSong.difficulties.push(difficulty);
    }

    // Kiểm tra và loại bỏ thông tin về các khó khăn nếu không được nhập vào
    if (isNaN(newSong.difficulties[3].rating) || newSong.difficulties[3].rating === null) {
        newSong.difficulties.pop(); // Loại bỏ phần tử cuối cùng khỏi mảng difficulties 
    }

    if (document.getElementById("jacketOverride").checked) {
        newSong.difficulties[3].jacketOverride = true;
    }

    if (document.getElementById("audioOverride").checked) {
        newSong.difficulties[3].audioOverride = true;
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
