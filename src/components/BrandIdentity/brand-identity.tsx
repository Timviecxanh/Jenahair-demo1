import classes from "./brand-identity.module.scss";

export default function BrandIdentity() {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.mainLogo}>
        <span className={classes.jena}>Jena</span>
        <span className={classes.hair}>hair</span>
      </h1>

      <p className={classes.slogan}>
        Jenahair là salon tóc quận Tân Phú, xuất thân từ nhà tạo mẫu tóc được
        cấp bằng chứng nhận bởi thầy Iwata nhà tạo mẫu
        <br className={classes.desktopBr} />
        tóc Nhật Bản & với tình yêu đam mê tóc & sắc đẹp, Jena Hair sẽ làm bạn
        lộng lẫy là sứ mệnh từng thành viên của salon
      </p>
    </div>
  );
}
