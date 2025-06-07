import axios from "axios";
import { generateUniqueId } from "./generateUniqueId";
import { getCurrentData } from "./getCurrentDate";
import { API_HOST } from "@/utils/BaseApp";


type ContactData = {
    firstName?: string;
    lastName?: string;
    name?: string;
    phone?: string;
    email: string;
    interest?: string;
    service?: string;
    subject?: string;
    message?: string;
  };
  
  type ContactInfo = {
    from: string;
    to: string;
    subject: string;
    contactData: ContactData;
  };
  export const sendMail = async ({ from, to, subject, contactData }: ContactInfo): Promise<{ status: boolean }> => {
    const formattedDate = getCurrentData();
    const uniqueId = generateUniqueId();
  
    try {
      const res = await axios.get(`https://api.bigdatacloud.net/data/client-info`);
      const ipData = res.data;
      let access_log = "";
  
      if (ipData.isBehindProxy) {
        access_log = ipData?.proxyIp;
      } else {
        access_log = ipData?.ipString;
      }
  
      const headers = {
        'X-Mailer': 'NextCTL',
        'X-Priority': '1',
        'Importance': 'High',
        'X-Originating-IP': access_log,
        'Message-ID': uniqueId,
        // 'Date': formattedDate,
        'Reply-To': 'reply-to@example.com',
        'X-Sender': 'sender@example.com',
        'X-Auto-Response-Suppress': 'All',
        'X-MSMail-Priority': 'High',
        'X-Report-Abuse': 'Please report abuse to abuse@nextctl.com',
      };
  
      const response = await axios.post(`${API_HOST}mail/send`, {
        from: from,
        to: to,
        subject: subject,
        body: { ...contactData },
      }, {
        headers: headers,
      });
      return { status: true };
    } catch (error) {
      return { status: true };
    }
  }
