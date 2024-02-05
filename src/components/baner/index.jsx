import React from "react";
import "./style.css";

function Umidjon() {
  return (
    <div className="Countainer">
      <div>
        <img className="Img" src="./img/u.jpg" alt="" />

        <div className="bmw">
          <img src="./img/bmw2.png" alt="" />
          <h1>Tug'ilgan kuningiz <br /> bilan tog'ajon</h1>
          <img src="./img/bmw1.png" alt="" />
        </div>
        <img src="./img/m.jpg" alt="" />
      </div>
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <i class="fab fa-windows"></i>
              <h3>38</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p className="pp">
                {" "}
                Umidjon, bugun sen uchun <br />
                maxsus kun,Tug'ilganing bilan <br />
                to'lgan dunyo nur. <br />
                Har bir tong sen uchun <br /> yangi umid boshlanur, <br />
                Har bir kecha esa orzularingga <br /> qanot bag'ishlar. <br />
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <i class="fab fa-android"></i> 
              <h3>Yoshingiz</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                {" "}
                Sening ismingdek, umid sochib <br />
                yashagin har dam, Yuragingda <br />
                mehr va quvonch bo'lsin <br />
                cheksiz jam. <br />
                Kulging bilan yoritgin atrofingdagi <br />
                olamni,Baxt qushi qo'nib, <br />
                aylansin doim sening tomongni. <br />
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <i class="fab fa-apple"></i>
              <h3>Muborak</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                {" "}
                Umidjon, bugun barcha tilaklar
                senga qaratiladi,Tug'ilgan kuningda <br />
                 eng ezgu orzular ro'yobga chiqadi. <br />
                Do'stlaring va yaqinlaring bilan <br />
                baham ko'r bu quvonchni, Ulash <br /> 
                bu baxt, ular bilan <br />
                 birga yashar ekan umr zavqini. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Umidjon;
