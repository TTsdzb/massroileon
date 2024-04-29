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

    var timeString = document.getElementById("newTime").value;
    var timeParts = timeString.split(":");
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var seconds = parseInt(timeParts[2]);

    // Tạo một đối tượng Date từ các phần tử ngày, tháng, năm, giờ, phút và giây
    var dateObject = new Date(year, month, day, hours, minutes, seconds);

    // Chuyển đổi đối tượng Date thành timestamp Unix 10 số
    var timestamp = Math.floor(dateObject.getTime() / 1000);

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

   // Định nghĩa hàm formatDateFromTimestamp() trước hàm editSong()
function formatDateFromTimestamp(timestamp, isDate) {
    var date = new Date(timestamp * 1000);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');

    if (isDate) {
        return day + "/" + month + "/" + year;
    } else {
        return hours + ":" + minutes + ":" + seconds;
    }
}



    // Hàm sửa bài hát
function editSong(index) {
    // Lấy thông tin bài hát cần chỉnh sửa từ mảng songList
    var song = songList.songs[index];

    // Hiển thị giao diện sửa đổi với các trường input được điền với thông tin hiện tại của bài hát
    document.getElementById("newIdx").value = song.idx !== undefined ? song.side : "";
    document.getElementById("newId").value = song.id || "";
    document.getElementById("newTitleEn").value = song.title_localized.en || "";
    document.getElementById("newTitleJp").value = song.title_localized.jp || "";
    document.getElementById("newArtist").value = song.artist || "";
    document.getElementById("newBpm").value = song.bpm || "";
    document.getElementById("newBpmBase").value = song.bpm_base || "";
    document.getElementById("newSet").value = song.set || "";
    document.getElementById("newPurchase").value = song.purchase || "";
    document.getElementById("newAudioPreview").value = song.audioPreview || "";
    document.getElementById("newAudioPreviewEnd").value = song.audioPreviewEnd || "";
    document.getElementById("newSide").value = song.side !== undefined ? song.side : "";
    console.log(song.side);
    document.getElementById("newBg").value = song.bg || "";
    document.getElementById("newBgInverse").value = song.bg_inverse || "";
    document.getElementById("remote_dl").checked = song.remote_dl || false;
    document.getElementById("newSourceEn").value = song.source_localized && song.source_localized.en ? song.source_localized.en : "";
    document.getElementById("source_copyright").value = song.source_copyright || "";
    document.getElementById("newVersion").value = song.version || "";

    // Hiển thị ngày và thời gian nếu có
    document.getElementById("newDate").value = song.date ? formatDateFromTimestamp(song.date, true) : "";
    document.getElementById("newTime").value = song.date ? formatDateFromTimestamp(song.date, false) : "";
    console.log(song.date);
    
    // Lặp qua mảng difficulties và điền thông tin vào các trường input tương ứng
    song.difficulties.forEach(function(difficulty, i) {
    document.getElementById("rating" + i).value = difficulty.rating || "";
    document.getElementById("chartDesigner" + i).value = difficulty.chartDesigner || "";
    document.getElementById("jacketDesigner" + i).value = difficulty.jacketDesigner || "";
    
    // Kiểm tra nếu ratingClass là 3 hoặc 4, thêm thông tin tương ứng
    if (difficulty.ratingClass === 3) {
        document.getElementById("ratingClass3").value = difficulty.ratingClass || "";
    } else if (difficulty.ratingClass === 4) {
        document.getElementById("ratingClass4").value = difficulty.ratingClass || "";
    }
});


    // Lưu lại chỉ số của bài hát đang được chỉnh sửa
    window.editingIndex = index;
}


// Hàm cập nhật bài hát sau khi chỉnh sửa
function changeSong(index) {
    // Lấy thông tin bài hát từ các trường input
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

    var timeString = document.getElementById("newTime").value;
    var timeParts = timeString.split(":");
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var seconds = parseInt(timeParts[2]);

    // Tạo một đối tượng Date từ các phần tử ngày, tháng, năm, giờ, phút và giây
    var dateObject = new Date(year, month, day, hours, minutes, seconds);

    // Chuyển đổi đối tượng Date thành timestamp Unix 10 số
    var timestamp = Math.floor(dateObject.getTime() / 1000);
    // Lấy thông tin khác tương tự như trong hàm addSong...

    // Tạo một đối tượng JSON mới chứa thông tin về bài hát
    var updatedSong = {
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

        updatedSong.difficulties.push(difficulty);
    }

    // Kiểm tra và loại bỏ thông tin về các khó khăn nếu không được nhập vào
    if (isNaN(updatedSong.difficulties[3].rating) || updatedSong.difficulties[3].rating === null) {
        updatedSong.difficulties.pop(); // Loại bỏ phần tử cuối cùng khỏi mảng difficulties 
    }

    if (document.getElementById("jacketOverride").checked) {
        updatedSong.difficulties[3].jacketOverride = true;
    }

    if (document.getElementById("audioOverride").checked) {
        updatedSong.difficulties[3].audioOverride = true;
    }

    // Tạo một đối tượng chứa chỉ trường "idx" nếu giá trị khác null và không phải NaN
    var idxObject = !isNaN(idx) && idx !== null ? {"idx": idx} : {};

    // Kết hợp đối tượng chứa thông tin bài hát và đối tượng chứa trường "idx"
    var finalSongObject = {...idxObject, ...updatedSong};

    // Cập nhật thông tin bài hát trong mảng songList
    songList.songs[index] = finalSongObject;

    // Hiển thị lại danh sách bài hát và cập nhật JSON output
    displaySongs();

    // Xóa dữ liệu trong các trường input sau khi thêm bài hát
    clearInputFields();
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

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editSong(index);
        };

        var changeButton = document.createElement("button");
        changeButton.textContent = "Change";
        changeButton.onclick = function() {
            changeSong(index);
        };

        // Thêm nút xóa vào phần tử li
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        li.appendChild(changeButton);

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

// Hàm toggle trường idx
function toggleIdxField() {
    var toggleIdx = document.getElementById("toggleIdx");
    var idxField = document.getElementById("newIdx");

    if (toggleIdx.checked) {
        idxField.disabled = false; // Cho phép chỉnh sửa trường idx
    } else {
        idxField.disabled = true; // Không cho phép chỉnh sửa trường idx
    }
}

// Khởi tạo danh sách bài hát và hiển thị lên màn hình khi trang được tải
window.onload = function() {
    displaySongs();
};

// Hàm import file JSON
function importSongList() {
    var fileInput = document.getElementById('songListFileInput');
    
    // Kiểm tra xem người dùng đã chọn file hay chưa
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.onload = function(event) {
            // Đọc nội dung của file JSON
            var content = event.target.result;
            
            try {
                // Parse nội dung JSON và gán cho biến songList
                songList = JSON.parse(content);

                // Hiển thị lại danh sách bài hát và cập nhật JSON output
                displaySongs();
            } catch (error) {
                alert('Đã xảy ra lỗi khi đọc file JSON: ' + error.message);
            }
        };

        // Đọc file như là một đối tượng dữ liệu URL
        reader.readAsText(file);
    } else {
        alert('Vui lòng chọn một file để import.');
    }
}
