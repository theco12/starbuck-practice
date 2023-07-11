"use client";

export default function write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/write/new" method="POST">
        <input type="text" name="title" placeholder="제목" />
        <input type="text" name="content" placeholder="내용" />
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            let fileName = encodeURIComponent(file.name);
            let res = await fetch(`/api/write/image?fileName=${fileName}`);
            res = await res.json();

            //S3 업로드
            const formData = new FormData();
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value);
            });
            let result = await fetch(res.url, {
              method: "POST",
              body: formData,
            });
            console.log(result);

            if (result.ok) {
              setSrc(result.url + "/" + fileName);
            } else {
              console.log("실패");
            }
          }}
        />
        <img src="" />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
