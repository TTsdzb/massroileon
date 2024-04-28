// Khai báo một biến global để lưu trữ danh sách các bài hát
var songList = {
    "songs": []
};

// Hàm thêm bài hát
function addSong() {
    // Lấy thông tin về bài hát từ các trường input
    var idx = parseInt(document.getElementById("newIdx").value);
    var id = document.getElementById("newId").value;
    var titleEn = document.getElementById("newTitleEn").value;
    var titleJp = document.getElementById("newTitleJp").value;
    var artist = document.getElementById("newArtist").value;
    var bpm = document.getElementById("newBpm").value;
    var bpm_base = document.getElementById("newBpmBase").value;
    var set = document.getElementById("newSet").value;
    var purchase = document.getElementById("newPurchase").value;
    var audioPreview = document.getElementById("newAudioPreview").value;
    var audioPreviewEnd = document.getElementById("newAudioPreviewEnd").value;
    var side = document.getElementById("newSide").value;
    var bg = document.getElementById("newBg").value;
    var bg_inverse = document.getElementById("newBgInverse").value;
    var date = document.getElementById("newDate").value;
    var version = document.getElementById("newVersion").value;

    // Lấy thông tin về khó khăn từ các trường input
    var rating0 = document.getElementById("rating0").value;
    var chartDesigner0 = document.getElementById("chartDesigner0").value;
    var jacketDesigner0 = document.getElementById("jacketDesigner0").value;

    var rating1 = document.getElementById("rating1").value;
    var chartDesigner1 = document.getElementById("chartDesigner1").value;
    var jacketDesigner1 = document.getElementById("jacketDesigner1").value;

    var rating2 = document.getElementById("rating2").value;
    var chartDesigner2 = document.getElementById("chartDesigner2").value;
    var jacketDesigner2 = document.getElementById("jacketDesigner2").value;

    var ratingClass3 = document.getElementById("ratingClass3").value;
    var rating3 = document.getElementById("rating3").value;
    var chartDesigner3 = document.getElementById("chartDesigner3").value;
    var jacketDesigner3 = document.getElementById("jacketDesigner3").value;

    // Tạo một đối tượng JSON mới chứa thông tin về bài hát
    var newSong = {
        "idx": idx,
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
        "date": date,
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

    // Kiểm tra và loại bỏ thông tin về các khó khăn nếu không được nhập vào
    if (rating3.trim() === '' && chartDesigner3.trim() === '' && jacketDesigner3.trim() === '') {
        newSong.difficulties.pop(); // Loại bỏ phần tử cuối cùng khỏi mảng difficulties
    }

    // Thêm bài hát mới vào danh sách
    songList.songs.push(newSong);

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
