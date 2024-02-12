import { randomString } from "@/lib/utils/string";

import type { Note, NoteText, NoteTodo } from "./types";

export const genNotePlaceholders = (size: number) => {
  const list: Note[] = [];
  for (let i = 0; i < size; i++) {
    const baseNote = {
      collection: "shared-notes",
      id: `${i + 1}`,
      title: Math.random() < 0.2 ? null : "Title " + randomString(10),
      category: {
        iconId: "none",
        name: randomString(5),
      },
      createdAt: 1707744777320,
      updatedAt: 1707744777320,
      important: false,
      readOnly: false,
      hidden: false,
      locked: false,
    }

    if (Math.random() > 0.5) {
      list.push({
        ...baseNote,
        type: "text",
        text: `<div>
          <h1>${randomString(20)}</h1>
          <code>${randomString(20)}</code>
          <ul>
            <li>${randomString(20)}</li>
            <li>${randomString(20)}</li>
          </ul>
          <ol>
            <li>${randomString(20)}</li>
            <li>${randomString(20)}</li>
          </ol>
          <img src="data:image/png;base64,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HV0E5D8+WFQ5fw2wNwg0J4DF9X+GxQsI2UbzDxYjQKAkAlhcS6JdpIAgGiV93NkrBPwRKN3iKkZAsKj8fYgYGQIQECnR4speQMg2+GhDAAJdEijJ4spSQBCNLj8uzAUBCMxGIHeLKxsBwaLiQwwBCMRMIEeLK3kBIduI+SPD2iAAgWECOVlcSQoIosGHEgIQyIFA6hZXMgKCRZXDx4U9QAACo+5Ler2eqZ6cnJSJiYnoYUUvIGQb0Z8hFggBCLRIICWLK0oBQTRaPI0MBQEIJEsgdosrGgHBokr2jLNwCECgAwIxPsUVXEDINjo4eUwBAQhkQyAmiyuIgCAa2ZxlNgIBCDQk8P7778uyyy4r66yzzrSRPv74Y1l55ZXNn+Hy7bffyh9//CFz5841VXr5rhfvY2NjMj4+PuuKFi1aJJ988olsvPHGU23++usv+emnn6b1WWaZZWT55Zefeu+3336TL774QtZff31Zeumlp97vTECwqBqeMrpDAALZEfjoo49kgw02kEsuuUQuuugisz/9ot59993lww8/NK+PPPJIufXWW2WppZaSP//8Uw488EB55JFHTN3mm28uzz33nBGZKhbXfffdJ8cdd5z8/PPPUyzfeust2XLLLaex3XvvveWxxx4z71122WVywQUXmP9WcdL5ttpqK/Pau4CQbWR35tkQBCDQAoHFixfLDjvsIK+//vo0Adl///3lm2++kYceeshkC7vssovceOON5ov/mmuuMULzzDPPyKqrrip77bWXbLHFFvLAAw9MrWgmi+vzzz+XO+64Q+655x7TblBAHnzwQTn//PNNfb+suOKKstFGG5m1bbPNNnL77beLisoZZ5whTz/9tHz11VeiWYoXAUE0WjhdDAEBCGRN4MILLzT/yldLaL/99jPC8N1338kaa6whTz31lOy2225m/wcddJARlBdeeEE22WQTk4FoxqLlhhtukBNPPFF++OEHOeKII4wNdt1115m6E044wbx/9dVXmwzmjTfekE8//VRUTAYF5Morr5S33357SlwGoZ9++ulGRF588UXz9oIFC0zW8+yzz8quu+7anoBgUWV91tkcBCDQIgEVg5133lk++OADOfbYY41YqIC8/PLLsv3225s7iRVWWMHMePHFFxsRUDHQf/Wr6Gg2oEWzAbW7dBy9M1Ehmj9/vuhdx+GHHy6vvvqqySC0aLag4nLttdeatv0fKmpm8/zzzxsbTO9DjjrqKDn44INlpZVWkj322MPYW1dccYUZQ+9ClltuObnlllvkmGOOaS4gZBstniqGggAEsifw448/Gnvo8ssvN1/CO+2005SA6B3FoYceKn///bfMmTPHsFD76OijjzaZg2YYL730kmy33Xamrn+HolnC1ltvLSeddJLcddddpk5tqXPPPXcaT7XCzjrrLHO/0r9414zm+++/l0svvdRkOvq3zvPKK6/IuuuuKyeffLKcc845U+NohqTjanZSy8JCNLI/42wQAhDwRECtpSeffFKuv/56czGuX8R6j3H88ccbO0szEP1CX2WVVcwKtN1tt91mvtDnzZtnLtD1nkTLO++8Y/pqdqIZQ98C08tuHaP/lFZ/KyogZ5999pSFpQLw+++/iz7VpWKhT3HpnYhmIfp02GmnnWZss6uuumqKhgrbo48+Kvvuu291AcGi8nSaGBYCECiKwKmnnmrEoF80e1h99dWNcNx9993GIhq0nlRw1Fq6+eabzaX7AQccIGeeeabpfv/995uM4ssvvzSvTznlFHMZrt/X+qWvl96DZVhAVDz0Yl1tMBUbzUpee+01c6+iYqTipXcnKhha9PJ87bXXls8++8xkKdYMhGyjqLPNZiEAgY4J6D2DCkP/MV69s1hzzTWNEDz++OPG0rr33nvlkEMOkfPOO89kIyowajepBaZ9b7rpJtNW70b0y/69994zmYZmKHrpPVsGou/r/Po9rxfjKgwqWJrpqMWmdyuHHXaYPPHEE7LhhhuabEnH1DsUzURmFBBEo+MTxHQQgECxBIYFRL/89QknzQC06B1E/8kqfXpqn332MfcgWrbddltjh+nvQ/ReZc8995Q777zTvN5xxx2NVaVPWOnluxYVGs1YBp/CevPNN81Fvv6tZb311pOHH35YNttsM5ORqLDpU1xaVlttNSM0m266qXk9JSDqffXf0L/7N/SjftVYbMTZOAQgAAGPBNSyWrhwofl1uf4mY7johbren6id1FbRHzBqWWuttczYg0XvWN59913zi3nNPPr/u3kjIAsWLPhHH/vStEUFY/jipa0FMg4EIAABCKRNQH8AqXqhTpXqxb8fIb2/arrHOgAAAABJRU5ErkJggg==" />
        </div>`
      } as NoteText)
    } else {
      list.push({
        ...baseNote,
        type: "todo",
        list: [
          { id: randomString(10), text: randomString(15), checked: Math.random() > 0.5 },
          { id: randomString(10), text: randomString(15), checked: Math.random() > 0.5 },
          { id: randomString(10), text: randomString(15), checked: Math.random() > 0.5 },
          { id: randomString(10), text: randomString(15), checked: Math.random() > 0.5 },
          { id: randomString(10), text: randomString(15), checked: Math.random() > 0.5 }
        ]
      } as NoteTodo)
    }
  }
  return list;
}