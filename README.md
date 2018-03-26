# BlockchainTutors


Find a Tutor on the Ethereum Blockchain

The goal of this project is to look up and connect with <br>
verified tutors that know what you need. The ability to <br>
review tutors is also super important.

First install the dependencies:

* Nodejs
	* <a href="https://nodejs.org/en/download/package-manager/">&nbsp;&nbsp;Here one can install nodejs</a>

* Install the follow Nodejs packages from the command line<br>
	* sudo npm install -g truffle
	* sudo npm install -g ganache-cli 
* A browser with metamask
	* [Metamask.io](http://www.metamask.io)

Instruction to run this application using testrpc<br>
   1. Clone this repository<br>
        git clone https://github.com/mullinat/BlockchainTutors.git
   2. cd into this projects directory<br>
        cd BlockchainTutors
   3. Install required packages<br>
        npm install
   4. In aditional terminal window run testrpc on port 5555<br>
        ganache-cli -p 5555
   5. cd into TruffleWorkspace directory and run<br>
        truffle deploy
   6. Connect metamask to testrpc<br>
        Click Metamask -> Netowrks -> custom RPC and paste what is below
        http://localhost:5555
   7. In your browser with metamask installed go to localhost:8042/src
        http://localhost:3042/src
   8. Click the faucet link or copy and paste the link below
        http://localhost:3042/src/html/faucet.html
   9. Copy your metamask public address into the page from step 10 and click "send" 
        to send yourself test ether on your local testnet
   10. Navigate to the main page of the application
        http://localhost:3042
   11. Try our the application
        Click around testing things
 
### Features implemented:
* The ability to set and reset data for Tutors and Students using smart contracts
* Host a static site using nodejs
* Detect and display how to install metamask if metamask is not installed
* Forms for createing and editing student and tutors on the blockchain
* Created a faucet for testrpc testing
* Create and pay for invoices from a web interface on the blockchain
* Index and search for tutors by subject on the blockchain using a web interface
### Features to implement next:
* Accept ERC 20 and other types of tokens as payment
	* Create a data strucutre for ratings and verified reviews
* Front end features to implement next:
    * Update the UI with bootstrap
* Escrow system:
    * Hold ETH or token until tutoring has occoured
* Back end features to implement next:
    * Create a back end to start with, so decide on a database
    * Decide what goes in database and create a schema:
        * User information for Tutor / Student:
            * Username
            * Password
            * Bio
            * Public Key
            * Profile picture
            * Location
            * Skype
            * Email
            * Capable/Interested in learning/teaching
            * Optional social networks
        * Invoices:
            * From
            * To
            * Amount in ETH or Token
            * What For
            * Status
* Features to implement in the future:
    * Encrypted messaging between users on the blockchain or maybe another plaform using public and private keys
    * Add ability to have one user with multiple addresses and voke addresses in case private key is lost or stolen
    * Store files and send them to other users
    * Video conferenceing from the browser:
        * Open PDF or other doument in video confrence call and share where mouse is on screen
        * Watch youtube videos in video conference call
        * Whiteboard in the browser
        * Video conference call with more than one person
