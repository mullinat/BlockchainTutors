# BlockchainTutors

<pre>
Find a Tutor on the Ethereum Blockchain

The goal of this project is to look up and connect with 
verified tutors that know what you need. The ability to 
review tutors is also super important.


Instruction to run this application using testrpc
    1. Clone this repository
        git clone https://github.com/mullinat/BlockchainTutors.git
    2. cd into this projects directory
        cd BlockchainTutors
    3. Install required packages
        npm install
    4. Install truffle package globally
        sudo npm install -g truffle
    5. Install testrpc package globally
        sudo npm install -g testrpc
    6. In aditional terminal window run testrpc on port 5555
        testrpc -p 5555
    7. cd into TruffleWorkspace directory
        truffle deploy
    8. Connect metamask to testrpc
        Click Metamask -> Netowrks -> custom RPC and paste what is below
        http://localhost:5555
    9. In your browser with metamask installed go to localhost:8042/src
        http://localhost:3042/src
    10. Click the faucet link or copy and paste the link below
        http://localhost:3042/src/html/faucet.html
    11. Copy your metamask public address into the page from step 10 and click "send" to send yourself test ether
    12. Navigate to the main page of the application
        http://localhost:3042
    13. Try our the application
        Click around testing things
 
Features implemented:
    Data structures for Tutors and Students are created
    The ability to set and reset data for Tutors and Students
    Host a static site using nodejs
    Detect and display how to install metamask if metamask is not installed
    Forms for createing and editing student and tutors on the blockchain
    Created a faucet for testrpc testing
Features to implement next:
    Accept ERC 20 and other types of tokens as payment
    Create a data strucutre for ratings and verified reviews
Front end features to implement next:
    Update the UI with bootstrap
Escrow system:
    Hold ETH or token until tutoring has occoured
Back end features to implement next:
    Create a back end to start with, so decide on a database
    Decide what goes in database and create a schema:
        User information for Tutor / Student:
            Username
            Password
            Bio
            Public Key
            Profile picture
            Location
            Skype
            Email
            Capable/Interested in learning/teaching
            Optional social networks
        Invoices:
            From
            To
            Amount in ETH or Token
            What For
            Status
Features to implement in the future:
    Encrypted messaging between users on the blockchain or maybe another plaform using public and private keys
    Add ability to have one user with multiple addresses and voke addresses in case private key is lost or stolen
    Store files and send them to other users
    Video conferenceing from the browser:
        Open PDF or other doument in video confrence call and share where mouse is on screen
        Watch youtube videos in video conference call
        Whiteboard in the browser
        Video conference call with more than one person
</pre>
