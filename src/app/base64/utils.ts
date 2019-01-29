export const fileReader = function(id, subject?) {
  const reader = new FileReader();
  const AllowImgFileSize = 2100000; // 上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
  const ele: any = document.querySelector('#' + id);
  // const file = ele.files[0];
  let imgUrlBase64;

  ele.addEventListener('change', (event: any) => {
    const {files} = event.target;
    let file: File;

    for (let i = files.length - 1; i >= 0; i--) {
      file = files[i];
      imgUrlBase64 = reader.readAsDataURL(file);
      reader.onload = function (e) {
        if (AllowImgFileSize as number !== 0 && AllowImgFileSize < reader.result.length) {
          alert( '上传失败，请上传不大于2M的图片！');
          return;
        } else {
          subject.next(reader.result);
        }
      };
    }
  });

};
