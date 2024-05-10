import { Col } from "antd";
import React from "react";

import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const FooterComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      class="container footer"
    >
      <Col span={5}>
        <div>
          <div class="block-footer">
            <p class="title-block">Công ty</p>
            <ul class="menu-footer">
              <li class="menu-item">
                <a href="/gioi-thieu">Giới thiệu</a>
              </li>
              <li class="menu-item">
                <a
                  href="https://help.shopeefood.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trung tâm Trợ giúp
                </a>
              </li>
              <li class="menu-item">
                <a href="/regulation-web">Quy chế</a>
              </li>
              <li class="menu-item">
                <a href="/terms-of-service">Điều khoản sử dụng</a>
              </li>
              <li class="menu-item">
                <a href="/security-policy">Bảo mật thông tin</a>
              </li>
              <li class="menu-item">
                <a href="/adjustment-of-claims">Giải quyết khiếu nại</a>
              </li>
              <li class="menu-item">
                <a href="/lien-he">Liên hệ</a>
              </li>
              <li class="menu-item">
                <a href="/tuyen-dung">Hợp tác nhân viên giao nhận</a>
              </li>
              <li class="menu-item">
                <a href="/merchant-register">Đăng ký quán</a>
              </li>
              <li class="menu-item">
                <a href="https://merchant.shopeefood.vn/edu/">ShopeeFood Uni</a>
              </li>
              <li class="menu-item">
                <a
                  href="https://shopee.vn/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shopee Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col span={5}>
        <div>
          <div class="block-footer">
            <p class="title-block">Ứng dụng ShopeeFood</p>
            <p>
              <a
                class="apps"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://itunes.apple.com/us/app/deliverynow/id1137866760"
                title="Down app iOS"
              >
                <img
                  class="footer-image"
                  src="https://shopeefood.vn/app/assets/img/AppStore-vn.png"
                />
              </a>
            </p>
            <p>
              <a
                class="apps"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://play.google.com/store/apps/details?id=com.deliverynow"
                title="Down app Android"
              >
                <img
                  class="footer-image"
                  src="https://shopeefood.vn/app/assets/img/PlayStore-vn.png"
                />
              </a>
            </p>
            <p>
              <a
                class="apps"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://appgallery.huawei.com/#/app/C102401853"
                title="Down app Huawei Gallery"
              >
                <img
                  class="footer-image"
                  src="https://shopeefood.vn/app/assets/img/Huawei-gallery-vn.png"
                />
              </a>
            </p>
          </div>
        </div>
      </Col>

      <Col span={5}>
        <div>
          <div class="block-footer txt-center">
            <div class="logo-footer">
              <a class="link" href="/">
                <img
                  id="delivery-footer-logo"
                  src="https://shopeefood.vn/app/assets/img/Logo-ShopeefoodVN.png"
                  alt="Đặt món trực tuyến giao hàng tận nơi"
                  title="Đặt món trực tuyến giao hàng tận nơi"
                  width="100"
                />
              </a>
            </div>
            <p class="font12">© 2024 ShopeeFood</p>
            <ul class="social-ico">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://www.facebook.com/shopeefoodvn"
                  title="Facebook"
                >
                  <FacebookOutlined />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://www.instagram.com/shopeefood_vn/"
                  title="Instagram"
                >
                  <InstagramOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col
        span={5}
        style={{ display: "flex", gap: "54px", alignItems: "center" }}
      >
        <div>
          <div class="block-last">
            <p class="title-block">Địa chỉ công ty</p>
            <span>
              <p>Công Ty Cổ Phần Foody</p>
              <p>Lầu G, Tòa nhà Jabes 1,</p>
              <p>số 244 đường Cống Quỳnh, phường Phạm Ngũ Lão, Quận 1, TPHCM</p>
              <p>Giấy CN ĐKDN số: 0311828036</p>
              <p>do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2012,</p>
              <p>sửa đổi lần thứ 23, ngày 10/12/2020</p>
              <p>Chịu trách nhiệm quản lý nội dung: Nguyễn Hồ Quảng Giang</p>
              <p>Điện thoại liên hệ: 028 71096879</p>
              <p>
                Email:{" "}
                <a href="mailto:support@shopeefood.vn">support@shopeefood.vn</a>
              </p>
            </span>
            <span class="registered">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=22747"
                title="ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG"
              >
                <img
                  class="footer-image"
                  alt="ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG"
                  src="https://shopeefood.vn/app/assets/img/gov_seals1.jpg"
                />
              </a>
            </span>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default FooterComponent;
