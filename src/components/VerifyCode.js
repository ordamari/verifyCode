import { useEffect, useState } from "react";

export default function VerifyCode({
    setVerifyCode,
    length,
    enterCallBack,
}) {

    const DEFAULT_LENGTH = 5;

    const updateRefEvents = (ref) => {
        if (!ref) return;
        const elInputs = ref.querySelectorAll('.verify-code');
        elInputs.forEach((elInput, idx) => {
            elInput.addEventListener('keydown', e => {
                if (e.keyCode === 8 && e.target.value === '') elInputs[Math.max(0, idx - 1)].focus()
            })

            elInput.addEventListener('input', e => {
                const [first, ...rest] = e.target.value
                e.target.value = first ?? ''
                const isLastInputBox = idx === elInputs.length - 1
                const isInsertedContent = first !== undefined
                if (isInsertedContent && !isLastInputBox) {
                    elInputs[idx + 1].focus()
                    elInputs[idx + 1].value = rest.join('')
                    elInputs[idx + 1].dispatchEvent(new Event('input'))
                }
                const ElInputsArr = Array.from(elInputs)
                setVerifyCode(ElInputsArr.map(input => input.value).join(''));
            })
        })
    }





    return (
        <div dir="ltr" ref={ref => updateRefEvents(ref)} className="verify-code-container">
            {
                Array.from(Array(length ?? DEFAULT_LENGTH).keys()).map((n, idx) => (
                    <input
                        key={idx}
                        className="verify-code"
                        type="number"
                        onKeyDown={(ev) => { if (ev.code === 'Enter' && enterCallBack) enterCallBack() }}
                    />
                ))
            }
        </div>
    )

}