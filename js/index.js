document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.getElementById("comment"); 
  const submitButton = document.getElementById("submit-comment"); 
  const commentList = document.querySelector(".comment-list"); 

  submitButton.addEventListener("click", function () {
    console.log(commentInput.value)
    const commentText = commentInput.value.trim(); 

    if (commentText === "") {
      alert("댓글을 입력해주세요!");
      return;
    }

    alert("댓글이 등록되었습니다");

    const newComment = document.createElement("li");
    newComment.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">${commentText}</div>
        </div>
      `;

    commentList.appendChild(newComment);

    commentInput.value = "";
  });
});
