document.addEventListener('DOMContentLoaded', () => {
    const $agree = document.querySelector('.agree');
    const $selectall = $agree.querySelector('.selectall');
    const $listInput = $agree.querySelectorAll('.list .item-check');
    const $selectallmkt = $agree.querySelector('.selectall-mkt');
    const $mktlistinput = $agree.querySelectorAll('.marketing .mkt-check');

    const toggleCheckbox = (allbox, itembox) => {
        allbox.addEventListener('change', () => {
            itembox.forEach((item) => {
                item.checked = allbox.checked;
            });
        });
    };

    toggleCheckbox($selectall, $listInput);
    toggleCheckbox($selectallmkt, $mktlistinput);

    $listInput.forEach((item) => {
        item.addEventListener('change', () => {
            const isChecked = Array.from($listInput).every(i => i.checked);
            $selectall.checked = isChecked;
        });
    });

    $mktlistinput.forEach((item) => {
        item.addEventListener('change', () => {
            const isChecked = Array.from($mktlistinput).some(i => i.checked);
            $selectallmkt.checked = isChecked;
        });
    });
});