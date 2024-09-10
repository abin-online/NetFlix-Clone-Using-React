export const checkValidData = (email , password , fullName) => {
    let errObj = {}
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const isFullNameValid = /^(?=.*[a-zA-Z]{4,})[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullName);
    if(!isEmailValid) {
        errObj.emailErr = 'Please enter a valid email'
    }
     
    if(!isPasswordValid) {
        errObj.passwordErr = 'Please enter a valid password'
    } 

    if (!isFullNameValid) {
        errObj.fullNameErr = 'Full name can only contain letters and spaces';
    }

    return Object.keys(errObj).length !== 0 ? errObj : null

}