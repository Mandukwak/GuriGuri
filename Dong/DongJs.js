document.addEventListener('DOMContentLoaded', () => {
    const $agree = document.querySelector('.agree');
    const $selectall = $agree.querySelector('.selectall');
    const $listInput = $agree.querySelectorAll('.list .item-check');
    const $selectallmkt = $agree.querySelector('.selectall-mkt');
    const $mktlistinput = $agree.querySelectorAll('.marketing .mkt-check');

    const toggleCheckbox = (allbox, itembox) => {
        allbox.addEventListener('change', () => {
            let allViewed = true;
            itembox.forEach((item) => {
                if (item.dataset.viewed === 'false') {
                    allViewed = false;
                }
            });

            if (allViewed) {
                itembox.forEach((item) => {
                    item.checked = allbox.checked;
                });
            } else {
                alert('내용 보기를 눌러 약관을 확인해 주세요.');
                allbox.checked = false;
            }
        });
    };

    toggleCheckbox($selectall, $listInput);
    toggleCheckbox($selectallmkt, $mktlistinput);

    $listInput.forEach((item) => {
        item.addEventListener('change', () => {
            const isChecked = Array.from($listInput).every(i => i.checked || i.dataset.viewed === 'false');
            $selectall.checked = isChecked;
        });

        item.addEventListener('click', (event) => {
            if (item.dataset.viewed === 'false') {
                alert('내용 보기를 눌러 약관을 확인해 주세요.');
                event.preventDefault();
            }
        });
    });

    $mktlistinput.forEach((item) => {
        item.addEventListener('change', () => {
            const isChecked = Array.from($mktlistinput).some(i => i.checked || i.dataset.viewed === 'false');
            $selectallmkt.checked = isChecked;
        });

        item.addEventListener('click', (event) => {
            if (item.dataset.viewed === 'false') {
                alert('내용 보기를 눌러 약관을 확인해 주세요.');
                event.preventDefault();
            }
        });
    });
});

function markAsViewed(link) {
    const checkbox = link.previousElementSibling.querySelector('input[type="checkbox"]');
    checkbox.dataset.viewed = 'true';
}
