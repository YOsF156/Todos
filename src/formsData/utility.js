const taskValues = {
    _id: false,
    title: "",
    details: "",
    date: "",
    time: "",
    repeat: "",
    priority: "",
};

export const baseData = {
    login: {
        inputs: [
            {

                name: "username",
                type: "email",
                placeholder: "כתובת המייל איתה נרשמת",
                errorMessage: "נא להכניס כתובת מייל תקנית",
                label: "שם משתמש",
                required: true,
            },
            {

                name: "password",
                type: "password",
                placeholder: "סיסמה",
                errorMessage: "סיסמה לא תקנית",
                label: "סיסמה",
                pattern: "^.{6,16}$",
                required: true,
            }
        ],
        values: {
            username: "",
            password: ""
        }
    },
    register: {
        inputs: [
            {

                name: "username",
                type: "email",
                placeholder: "כתובת המייל איתה נרשמת",
                errorMessage: "נא להכניס כתובת מייל תקנית",
                label: "שם משתמש",
                required: true,
            },
            {

                name: "password",
                type: "password",
                placeholder: "סיסמה",
                errorMessage: "סיסמה צריכה להכיל בין 6 ל16 תווים - לא נגזים הפעם",
                label: "סיסמה",
                pattern: "^.{6,16}$",
                required: true,
            },
            {
                name: "confirmPassword",
                type: "password",
                placeholder: "אימות סימסה",
                errorMessage: "הסיסמאות אינן תואמות!",
                label: "אימות סיסמה",
                pattern: "",
                required: true,
            },
        ],
        values: {
            username: "",
            password: "",
        }
    },
    task:
    {
        inputs: [
            {
                id: 1,
                name: "title",
                type: "text",
                placeholder: "כותרת",
                errorMessage:
                    "הכותרת חייבת להכיל 3 תווים ועד 67 תווים",
                label: "כותרת",
                pattern: "^.{4,67}$",
                required: true,
            },
            {
                id: 2,
                name: "details",
                type: "text",
                placeholder: "פרטים",
                errorMessage: "חייב להכיל תו אחד ועד 200 תווים",
                label: "פרטים",
                pattern: "^.{1,200}$",
                required: true,
            },
            {
                id: 3,
                name: "date",
                type: "date",
                label: "תאריך",
                required: true,
            },
            {
                id: 4,
                name: "time",
                type: "time",
                label: "שעה",
                required: true,
            },
            {
                id: 4,
                name: "repeat",
                type: "radio",
                label: "חזרתיות",
                list: ["ללא", "יומית", "שבועית", "חודשית"],
                required: true,
            },
            {
                id: 5,
                name: "priority",
                type: "radio",
                label: "עדיפות",
                list: ["נמוכה", "בינונית", "גבוהה"],
                required: true,
            },
        ],
        values: { ...taskValues }
    }
}

