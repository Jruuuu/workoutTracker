![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# workoutTracker
**Version 1.0.0**
# TABLE OF CONTENTS
1. [Introduction](#introduction)
2. [User Story](#user)
3. [Installation Commands](#installation)
4. [Questions Asked](#questions)
5. [Test Commands](#test)
6. [LICENSE & COPYRIGHT](#license)
7. [Example](#example)

### In This Project <a name="introduction"> </a> we were tasked to create an application using <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/5d3b0191832237fcbfc6d4497524e8bb547c6bfc9eafb738d5205c629d202067/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352532302d2532334533344632362e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/5d3b0191832237fcbfc6d4497524e8bb547c6bfc9eafb738d5205c629d202067/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352532302d2532334533344632362e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="HTML" data-canonical-src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&amp;style=for-the-badge&amp;logo=html5&amp;logoColor=white" style="max-width:100%;"></a>  ,<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/62d37abe760867620e0baea1066303719d630a82936837ba7bff6b0c754e3c9f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742532302d2532333332333333302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"><img src="https://camo.githubusercontent.com/62d37abe760867620e0baea1066303719d630a82936837ba7bff6b0c754e3c9f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742532302d2532333332333333302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="JavaScript" data-canonical-src="https://img.shields.io/badge/javascript%20-%23323330.svg?&amp;style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" style="max-width:100%;"></a>,<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/cc96d7d28a6ca21ddbb1f2521d751d375230ed840271e6a4c8694cf87cc60c14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732532302d2532333433383533442e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/cc96d7d28a6ca21ddbb1f2521d751d375230ed840271e6a4c8694cf87cc60c14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732532302d2532333433383533442e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" alt="NodeJS" data-canonical-src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&amp;style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style="max-width:100%;"></a>,<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765"><img src="https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765" alt="ExpressJS" data-canonical-src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" style="max-width:100%;"></a>, <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/72e92f69f36703548704a9eeda2a9889c2756b5e08f01a9aec6e658c148d014e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d3445413934423f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/72e92f69f36703548704a9eeda2a9889c2756b5e08f01a9aec6e658c148d014e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d3445413934423f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465" alt="Mongodb" data-canonical-src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" style="max-width:100%;"></a>,
## User Story <a name="user"></a>
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
## Installation locally <a name="installation"></a>  
- INSTALL NODE.JS
- INSTALL GITBASH
- INSTALL MONGODB *Remember Password*
- create a folder in C:\data\db
- Run MONGODB Git Bash - "mongod"
- Clone Repo
- Git Bash - "npm init -y" (only use if there is no package.json)
- Git Bash - "npm i express mongoose morgan path"
- Run Command: npm start



## Test Commands <a name="test"></a>
N/A

## LICENSE & COPYRIGHT <a name="license"></a>
MIT


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



&copy; Git Hub User Name: Jruuuu

<a href="https://github.com/Jruuuu/workoutTracker">***GITHUB: workout Tracker GITHUB REPO***</a>

<a href="https://peaceful-depths-31461.herokuapp.com/">***LIVE LINK: FITNESS TRACKER APP***</a>

## Example of what the end result should look like <a name="example"></a>

  <img src="assets\img\fitnesstracker_front.JPG" alt="Fitness Track Front Page" width="500px" height="250px"/>
  <br>
   <img src="assets\img\fitnesstracker_add.JPG" alt="Fitness Track add Page" width="500px" height="250px"/>
   <br>
    <img src="assets\img\fitnesstracker_dash.JPG" alt="Fitness Track dashboard Page" width="500px" height="250px"/>