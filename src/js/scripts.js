var vm = new Vue({
    el: '#app',
    data: {
        signInBtnClicked: false,
        signUpBtnClicked: false,
        isResults: false,
        emptyForm: true,
        signInEmail: '',
        signInPassword: '',
        signUpFName: '',
        signUpLName: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpConfirmPassword: '',
        correctFName: false,
        correctLName: false,
        correctEmail: false,
        matchPass: false,
        correctPass: false,
        correctSignInEmail: false,
        correctSignInPass: false
    },
    methods: {
        showSignIn: function(){
            this.emptyForm = !this.emptyForm;
            this.isResults = false;

            if(this.emptyForm == false){
                this.signInBtnClicked = !this.signInBtnClicked;
                this.signUpBtnClicked = false;
            }else{
                if(this.signUpBtnClicked){
                    this.signUpBtnClicked = false;
                    this.signInBtnClicked = true;
                    this.emptyForm = false;
                }else{
                    this.signInBtnClicked = false;
                    this.signUpBtnClicked = false;
                }
            }
        },
        showSignUp: function(){
            this.emptyForm = !this.emptyForm;
            this.isResults = false;
            
            if(this.emptyForm == false){
                this.signUpBtnClicked = !this.signUpBtnClicked;
                this.signInBtnClicked = false;
            }else{
                if(this.signInBtnClicked){
                    this.signInBtnClicked = false;
                    this.signUpBtnClicked = true;
                    this.emptyForm = false;
                }else{
                    this.signUpBtnClicked = false;
                    this.signInBtnClicked = false;
                }
            }
        },
        signInUser: function(){
            //Get each input
            var email = document.getElementById("signInEmail");
            var pass = document.getElementById("signInPassword");

            //Reset everything
            this.correctSignInEmail = false;
            this.correctSignInPass = false;

            //Checks
            if(this.signInEmail == '' || this.signInPassword == ''){
                if(this.signInEmail == ''){
                    this.correctSignInEmail = true;
                    email.focus();
                }
                if(this.signInPassword == ''){
                    this.correctSignInPass = true;
                    pass.focus();
                }
            }else{
                this.correctSignInEmail = false;
                this.correctSignInPass = false;
                this.isResults = true;

                //Setup vm for this
                var vm = this;

                //Clear everything after 5 seconds.
                setTimeout(function(){
                    vm.isResults = false;
                    vm.signInEmail = '';
                    vm.signInPassword = '';
                },5000);
            }
        },
        signUpUser: function(){
            //Get each input
            var firstName = document.getElementById("fname");
            var lastName = document.getElementById("lname");
            var email = document.getElementById("email");
            var password1 = document.getElementById("pass1");
            var password2 = document.getElementById("pass2");

            //Reset everything
            this.correctFName = false;
            this.correctLName = false;
            this.correctEmail = false;
            this.correctPass = false;
            this.matchPass = false;

            //Checks
            if(firstName.value < 2 || lastName.value < 2 || email.value == '' || password1.value !== password2.value || password1.value == '' || password2.value == ''){
                if(firstName.value < 2){
                    this.correctFName = true;
                    firstName.focus()
                }
                if(lastName.value < 2){
                    this.correctLName = true;
                    lastName.focus();
                }
                if(email.value == ''){
                    this.correctEmail = true;
                    email.focus();
                }
                if(password1.value !== password2.value){
                    this.matchPass = true;
                    password2.focus();
                }
                if(password1.value == '' || password2.value == ''){
                    this.correctPass = true;
                    password1.focus();
                }
            }else{
                this.correctFName = false;
                this.correctLName = false;
                this.correctEmail = false;
                this.matchPass = false;
                this.correctPass = false;
                this.isResults = true;

                //Setup vm for this
                var vm = this;

                //Clear everything after 10 seconds.
                setTimeout(function(){
                    vm.isResults = false;
                    vm.signUpFName = '';
                    vm.signUpLName = '';
                    vm.signUpEmail = '';
                    vm.signUpPassword = '';
                    vm.signUpConfirmPassword = '';
                },10000);
            }
        }
    },
    computed: {
        formStatus: function(){
            if(this.signInEmail != ''){
                return true;
            }else{
                return false;
            }
        }
    }
})