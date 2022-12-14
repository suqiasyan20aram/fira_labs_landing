import React, {useEffect, useRef, useState} from 'react';

import styles from './index.module.scss'
import classNames from "classnames";

interface Row {
    text: string,
    className?: string
}

const ContactUs = () => {
    const inputRef = useRef(null);
    const [info, setInfo] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [rows, setRows] = useState<Row[]>([]);

    const createNewRow = (params?: Partial<Row>) => {
        const newRow: Row = {text: 'client@fira-labs-Dao ~ %', ...params}
        setRows(prev => [...prev, newRow])
        setTimeout(() => {
            // @ts-ignore
            inputRef?.current?.focus()
        }, 0)
    }

    const getFirstEmptyRowType = (info: any) => {
        const emptyRowIndex = Object.values(info).findIndex(value => !value)
        return Object.keys(info)[emptyRowIndex];
    }

    const getNextRowText = (type: string) => {
        switch (type) {
            case 'name':
                return 'Enter your name: ';
            case 'email':
                return 'Enter your email address: ';
            case 'subject':
                return 'Enter your subject: ';
            case 'message':
                return 'Enter your message: ';
        }
    }

    const onInsetText = (type: string, text: string) => {
        createNewRow({text});

        setInfo(prev => {
            const newInfo = {...prev, [type]: text};
            const nextRowParams = {text: getNextRowText(getFirstEmptyRowType(newInfo))};
            nextRowParams.text = nextRowParams.text ? nextRowParams.text : "We've received your email and will get back soon!"
            createNewRow(nextRowParams);
            if (!getFirstEmptyRowType(newInfo)) {
                onComplete(newInfo)
            }
            return newInfo;
        })
    }

    const onKeyDown = (e: any) => {
        if (!getFirstEmptyRowType(info)) {
            e.preventDefault();
        } else if ([37, 38, 39, 40].includes(e.keyCode)) {
            e.preventDefault();
        } else if (e.keyCode === 13) {
            const emptyRowType = getFirstEmptyRowType(info);
            onInsetText(emptyRowType, e.currentTarget.innerText)
        }
    }

    const onPaste = (e: any) => {
        e.preventDefault();
        e.currentTarget.innerText += e.clipboardData.getData('text/plain').replace(/\s+/g, ' ').trim();
    }

    const replaceSpaces = (str: string) => {
        return str.replace(/\s/g, '&nbsp')
    }

    const onComplete = async (info: any) => {
        createNewRow({
            text: replaceSpaces(`  ________                __      __  __           `),
            className: styles.bigText
        })
        createNewRow({
            text: replaceSpaces(` /_  __/ /_  ____ _____  / /__    \\ \\/ /___  __  __`),
            className: styles.bigText
        })
        createNewRow({
            text: replaceSpaces(`  / / / __ \\/ __ \`/ __ \\/ //_/     \\  / __ \\/ / / /`),
            className: styles.bigText
        })
        createNewRow({
            text: replaceSpaces(`&nbsp;/ / / / / / /_/ / / / / ,<        / / /_/ / /_/ / `),
            className: styles.bigText
        })
        createNewRow({
            text: replaceSpaces(`/_/ /_/ /_/\\__,_/_/ /_/_/|_|      /_/\\____/\\__,_/  `),
            className: styles.bigText
        })
        createNewRow({text: `&nbsp;`, className: styles.bigText});
        createNewRow({text: `&nbsp;`, className: styles.bigText});

        const formData = new FormData();
        const params = {
            access_key: '3e57b516-a17d-4b54-90a5-a5bddfb515d2', // rob fira
            subject: "FIRA LABS",
            redirect: 'https://web3forms.com/success',
            name: info.name,
            feedback: info.subject,
            email: info.email,
            message: info.message
        }

        Object.keys(params).forEach((key: string) => {
            formData.append(key, params[key as keyof typeof params]);
        })

        try {
            const res: any = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            })
            const data = await res.json();
        } catch (e) {
            // console.log(e)
        }
    }

    useEffect(() => {
        createNewRow({
            text: replaceSpaces(`   ______            __             __               `),
            className: styles.bigText
        });
        createNewRow({
            text: replaceSpaces(`  / ____/___  ____  / /_____ ______/ /_   __  _______`),
            className: styles.bigText
        });
        createNewRow({
            text: replaceSpaces(` / /   / __ \\/ __ \\/ __/ __ \`/ ___/ __/  / / / / ___/`),
            className: styles.bigText
        });
        createNewRow({
            text: replaceSpaces(`/ /___/ /_/ / / / / /_/ /_/ / /__/ /_   / /_/ (__  ) `),
            className: styles.bigText
        });
        createNewRow({
            text: replaceSpaces(`\\____/\\____/_/ /_/\\__/\\__,_/\\___/\\__/   \\__,_/____/  `),
            className: styles.bigText
        });
        createNewRow({text: `&nbsp;`, className: styles.bigText});
        createNewRow({text: `&nbsp;`, className: styles.bigText});
        createNewRow();

        const nextRowParams = {text: getNextRowText(getFirstEmptyRowType(info))};
        createNewRow(nextRowParams)

    }, [])

    return (
        <div id={'section-contact'} className={styles.section}>
            <label className={styles.terminal}>
                <div className={styles.fakeMenu}>
                    <div className={classNames(styles.fakeButtons, styles.fakeClose)}></div>
                    <div className={classNames(styles.fakeButtons, styles.fakeMinimize)}></div>
                    <div className={classNames(styles.fakeButtons, styles.fakeZoom)}></div>
                </div>
                <div className={styles.fakeScreen}>
                    {rows.map((row, index) => {
                        return (
                            <p key={index} className={styles.line}>
                                <span dangerouslySetInnerHTML={{__html: row.text}} className={row.className}/>
                                {index === rows.length - 1 &&
                                    <div className={styles.interactiveRow}>
                                        <div contentEditable={true} ref={inputRef}
                                             className={styles.input}
                                             onKeyDown={onKeyDown}
                                             onPaste={onPaste}
                                        ></div>
                                    </div>
                                }
                            </p>
                        )
                    })}
                </div>
            </label>
        </div>
    )
}

export default ContactUs;