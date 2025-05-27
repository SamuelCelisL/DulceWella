import { redesIcon } from "../utils/redIcons"

interface Red {
  id: number,
  nombre: string,
  link: string,
  icon: React.JSX.Element,
}

export const redes: Red[] = [
  {
    id: 1,
    nombre: "Tiktok",
    link: "https://www.tiktok.com/@la.dulzura.en.for?_r=1&_d=efll1amc6ch1ai&sec_uid=MS4wLjABAAAAYvJc1p0aBkaBAj7TkdfEx6bwKmwUAM0ubeAojvQic-FZb7mXkJLGBlH4EAMVOzHS&share_author_id=7506592228413932551&sharer_language=es&source=h5_m&u_code=ekc8e443559991&timestamp=1747765993&user_id=7506592228413932551&sec_user_id=MS4wLjABAAAAYvJc1p0aBkaBAj7TkdfEx6bwKmwUAM0ubeAojvQic-FZb7mXkJLGBlH4EAMVOzHS&utm_source=whatsapp&utm_campaign=client_share&utm_medium=android&share_iid=7503897582721664773&share_link_id=6fd6a022-f1d9-4dcc-b48d-82cb0d84ddd5&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1",
    icon: redesIcon.tiktok
  }
]