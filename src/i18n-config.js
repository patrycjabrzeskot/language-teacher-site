// const languages = ["en", "pl", "sw", "no"]

// async function loadMessagesen() {
//   return await import(`@lingui/loader!./locales/en/messages.po`)
// }

// async function loadMessagespl() {
//   return await import(`@lingui/loader!./locales/pl/messages.po`)
// }

// const catalogs = {
//   en: { messages: loadMessagesen },
//   pl: { messages: loadMessagespl },
//   //   sw: { messages: require("./locales/sw/messages.po") },
//   //   no: { messages: require("./locales/no/messages.po") },
// }

// const defaultLanguage = "pl"

// const prefix = lang => (lang == defaultLanguage ? "/" : "/" + lang)
// const deprefix = pathname =>
//   pathname.startsWith("/pl/") ? pathname.substr(4) : pathname
// const langFromPath = pathname => (pathname.startsWith("/pl/") ? "pl" : "en")

// exports.defaultLanguage = defaultLanguage
// exports.languages = languages
// exports.catalogs = catalogs
// exports.prefix = prefix
// exports.deprefix = deprefix
// exports.langFromPath = langFromPath
