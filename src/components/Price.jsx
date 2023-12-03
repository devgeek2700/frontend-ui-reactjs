import React from 'react'
import "../index.css";

function Price() {

    var btn = document.getElementById('btn')

    function leftClick() {
        btn.style.left = '0'
    }

    function rightClick() {
        btn.style.left = '110px'
    }
  return (
    <>
      <div>
      <div class="button-box">
            <div id="btn"></div>
            <button type="button" class="toggle-btn" onclick={leftClick}>Left</button>
            <button type="button" class="toggle-btn" onclick={rightClick}>Right</button>
        </div>
      </div>
    </>
  )
}

export default Price
