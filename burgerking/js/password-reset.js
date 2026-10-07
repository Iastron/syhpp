/* 비밀번호는 전송하거나 저장하지 않는 UI 예시 */
const resetForm = document.querySelector('.reset_form');
const passwordInput = document.querySelector('#new_password');
const confirmInput = document.querySelector('#confirm_password');
const resetButton = document.querySelector('.reset_btn');
const passwordHelp = document.querySelector('#password_help');
const submitNotice = document.querySelector('.submit_notice');
const lengthMessage = '최소 8글자 이상 최대 20글자까지 사용하여 주세요.';

function validatePassword() {
    const password = passwordInput.value;
    const confirmation = confirmInput.value;
    const validLength = password.length >= 8 && password.length <= 20;
    const characterTypes = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9\s]/];
    const validCharacters = /^[\x21-\x7E]+$/.test(password);
    const validCombination = validCharacters && characterTypes.filter(type => type.test(password)).length >= 3;
    // 인증된 계정 정보는 서버 연동 시 제공한다. 정보가 없으면 동일 여부를 판단하지 않는다.
    const accountId = resetForm.dataset.accountId;
    const sameAsAccount = Boolean(accountId) && password.toLowerCase() === accountId.toLowerCase();
    const validPassword = validLength && validCombination && !sameAsAccount;
    const matches = password === confirmation;

    let message = lengthMessage;
    if (password && validLength && !validCombination) {
        message = '영어 대/소문자, 숫자, 특수문자 중 3개 이상을 조합해 주세요.';
    } else if (sameAsAccount) {
        message = '아이디와 다른 비밀번호를 입력해 주세요.';
    } else if (confirmation && validPassword && !matches) {
        message = '입력하신 비밀번호가 일치하지 않습니다.';
    }

    passwordHelp.textContent = message;
    passwordInput.setAttribute('aria-invalid', String(Boolean(password) && !validPassword));
    confirmInput.setAttribute('aria-invalid', String(Boolean(confirmation) && !matches));
    resetButton.disabled = !(validPassword && confirmation && matches);
    return !resetButton.disabled;
}

document.querySelectorAll('.pw_btn').forEach(button => {
    button.addEventListener('click', () => {
        const input = document.getElementById(button.getAttribute('aria-controls'));
        const showPassword = input.type === 'password';
        input.type = showPassword ? 'text' : 'password';
        button.setAttribute('aria-pressed', String(showPassword));
        const label = input === passwordInput ? '새로운 비밀번호' : '비밀번호 확인';
        button.querySelector('.sr-only').textContent = `${label} ${showPassword ? '숨기기' : '보기'}`;
    });
});

resetForm.addEventListener('input', () => {
    submitNotice.hidden = true;
    validatePassword();
});

resetForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!validatePassword()) return;
    submitNotice.textContent = '입력 확인이 완료되었습니다. 이 화면은 UI 예시이며 실제 비밀번호는 변경되지 않습니다.';
    submitNotice.hidden = false;
});

window.addEventListener('pageshow', validatePassword);
validatePassword();
