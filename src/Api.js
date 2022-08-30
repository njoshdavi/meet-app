@import url(https://fonts.googleapis.com/css?family=Roboto:500);

html {
  background-color: #141414;
  color: #ffffff;
}

.App {
  text-align: center;
  display: block;
  margin: auto;
}

.App * {
  box-sizing: border-box;
}

ul {
  padding: 0;
  list-style: none;
}

p {
  margin: 5px 0;
}

.Alert p {
  margin-top: 50px;
}

.display-none {
  display: none;
}
.showSuggestions {
  display: block;
}

input[type="text"],
input[type="number"] {
  padding: 8px 6px 8px 10px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 20px;
  align-self: center;
  height: 38px;
  margin-top: 50px;
}

.city {
  width: 250px;
}

.CitySearch {
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  max-width: 300px;
  margin: auto;
  /* position: relative; */
}

.suggestions {
  width: 250px;

  z-index: 2;
  align-self: center;
  margin: 0;
  top: 43px;
  font-size: 14px;
  box-shadow: 10px 10px 16px -12px rgba(0, 0, 0, 0.75);
}

.suggestions > li {
  text-align: left;
  padding: 8px 6px 8px 10px;
  background-color: #eee;
  color: #141414;
  cursor: default;
}

.suggestions > li:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.suggestions > li:hover {
  background-color: #bcdcdb;
}

.event-visible {
  justify-content: center;
  padding: 10px 10px 35px;
  margin-bottom: 10px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.default {
  margin-bottom: 25px;
}

.details-btn {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 5px 8px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.name {
  font-size: 18px;
  font-weight: 600;
}

.group-name {
  text-transform: uppercase;
  font-size: 14px;
}

.going,
.visibility {
  font-style: italic;
}

.description {
  overflow-x: hidden;
}

.numberOfEvents {
  width: 200px;
  margin: 20px auto;
  text-align: center;
}

.button-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  font-family: sans-serif;
}

.Alert.CitySearch {
  position: fixed;
  top: 20px;
}

.data-vis-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.data-vis-wrapper .recharts-responsive-container {
  /* min-width: 100%; */
  display: flex;
}

.login-button {
  color: #494949;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 20px;
  border: 4px solid #494949;
  display: inline-block;
  transition: all 0.4s ease 0s;
  min-width: 10rem;
  margin: 1rem;
}

.google-btn {
  width: 184px;
  height: 42px;
  margin: 1rem;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
}
.google-btn:hover {
  box-shadow: 0 0 6px #4285f4;
}
.google-btn:active {
  background: #1669f2;
}
.google-icon-wrapper {
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: #fff;
}
.google-icon {
  position: absolute;
  margin-top: 11px;
  margin-left: -8px;
  width: 18px;
  height: 18px;
}
.btn-text {
  float: right;
  margin: 11px 11px 0 0;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: "Roboto";
}

.div.recharts-wrapper {
  color: #ffffff;
}

.recharts-responsive-container {
  min-height: 50vh;
  min-width: 50vw;
}

.pie-wrapper {
  min-width: 50vw;
  min-height: 50vh;
}

.scatter-wrapper {
  min-width: 50vh;
  min-height: 50vh;
}

.recharts-surface {
  max-width: 900px;
}

@media only screen and (min-width: 992px) {
  .data-vis-wrapper {
    flex-direction: row;
  }
  .data-vis-wrapper .recharts-responsive-container {
    flex-basis: 50%;
    /* max-width: 50%; */
    /* min-width: auto;  */
    /* margin: 0 auto; */
  }
}
