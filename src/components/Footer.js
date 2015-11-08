import React          from 'react/addons';
import RouteAction    from '../actions/RouteAction';

export default React.createClass({


  render() {
    return (
      <div className="footer">
        <div className="ui container">
          <div className="ui grid">
            <div className="seven wide column">
              <div className="footer-box" style={{fontSize: '18px', paddingTop: '3rem'}}>
                wowAfrica 阿非卡為台灣最完整的非洲資訊平台 最新資訊及活動通知我們的願景是搭起台灣與非洲的橋樑，藉由資訊、新聞、整合各方資源及實體活動等推廣方式，豐富我們對於非洲的認識及想像，達成進一步的交流與發展。
              </div>
            </div>
            <div className="four wide column" style={{color: 'white', backgroundColor: '#BF3333'}}>
              <div className="footer-box">
                關於 wowAfrica
                <div>
                  <a href="/about_authors" onClick={this._onClick}>
                     成員介紹
                  </a>
                </div>
                <div>
                  <a href="/contact_us" onClick={this._onClick}>
                     聯絡我們
                  </a>
                </div>
                <div>
                </div>
                <div style={{paddingTop: '10px'}}>
                  <a href="mailto:lighteningdark2014@gmail.com" target="_blank">
                    <img src="/images/rb_mail.png" style={{width: '50px', border: 'thin solid white', margin: '3px'}}/>
                  </a>
                  <a href="http://wowafrica.tumblr.com/" target="_blank">
                    <img src="/images/rb_tumblr.png" style={{width: '50px', border: 'thin solid white', margin: '3px'}}/>
                  </a>
                  <a href="https://www.facebook.com/wowafrica.tw/" target="_blank">
                    <img src="/images/rb_facebook.png" style={{width: '50px', border: 'thin solid white', margin: '3px'}}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="five wide column">
              <div className="footer-box">
                最新資訊及活動通知
                <div id="emailForm" className="ui form">
                  <div className="field">
                    <input id="emailInput" type="email" placeholder="Email"/>
                  </div>
                  <div className="ui error message" style={{fontSize: '14px'}}>
                    oops! 現在有些問題，請稍候再試
                  </div>
                  <div id="emailBtn" className="ui submit button" onClick={this._onSubBtnClick} style={{backgroundColor: '#BF3333', color: 'white'}}>
                    訂閱
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  },

  _onSubBtnClick(e) {
    $('#emailForm').removeClass('error');
    $('#emailBtn').removeClass('button').addClass('loading button');
    let request = $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzuOLvCRul3ZAzNl3kp9nPihUQ_iowpjB-Uf1nwuvhY9Q5lODI/exec',
      type: 'post',
      data: {'email': $('#emailInput')[0].value}
    })
    .done(function(data) {
      $('#emailBtn').text('完成!');
    })
    .fail(function(data) {
      $('#emailForm').addClass('error');
    })
    .always(function() {
      $('#emailBtn').removeClass('loading button').addClass('button');
    });
  }
});
