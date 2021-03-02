import Moment from "moment";
import Link from "next/link";
import Router from "next/router";
import { FlexWrapper } from "../../layout-containers";
import { Button } from "../../buttons";
import {
  filingTypes,
  filingTypeDescriptions,
} from "../../../constants/filingTypes";

export function prepareTableRows(filing, params) {
  const { doc_public, filer, filing_date } = filing;
  const { start_date, end_date, query } = params;

  filing["filing_date"] = Moment(filing_date).format("MM/DD/YYYY");
  if (filing["doc_public"]) {
    filing["access"] = (
      <FlexWrapper
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <Button
          height="24px"
          marginBottom="2px"
          marginTop="2px"
          size="small"
          onClick={() =>
            Router.push(
              `/pdfview?doc_public=${doc_public}&query=${query}&start_date=${start_date}&end_date=${end_date}`
            )
          }
        >
          <span>PDF</span>
        </Button>
        <Button
          height="24px"
          marginBottom="2px"
          marginTop="2px"
          size="small"
          onClick={() =>
            Router.push(
              `/pdfview?doc_public=${doc_public}&query=${query}&start_date=${start_date}&end_date=${end_date}&textonly=True`
            )
          }
        >
          Text
        </Button>
      </FlexWrapper>
    );
  } else {
    filing["access"] = <span>Contact city clerks office.</span>;
  }

  if (filing["amendment"]) {
    // first amendment
    if (filing["amendment_number"] === 1) {
      filing["filing_type"] = (
        <div>
          <span>{filing["filing_type"]}</span>
          <br />
          <span>
            Original:{" "}
            <Link
              href={`/pdfview?filing_id=${filing.amends_orig_id.orig_id}&query=${query}&start_date=${start_date}&end_date=${end_date}`}
            >
              {filing.amends_orig_id.human_id}
            </Link>
          </span>
        </div>
      );
    } else if (filing["amendment_number"] > 1) {
      filing["filing_type"] = (
        <div>
          <span>{filing["filing_type"]}</span>
          <br />
          <span>
            Amends{" "}
            <Link
              href={`/pdfview?filing_id=${filing.amends_prev_id.prev_id}&query=${query}&start_date=${start_date}&end_date=${end_date}`}
            >
              {filing.amends_prev_id.human_id}
            </Link>
          </span>
          <br />
          <span>
            Amendment {filing["amendment_number"]} of{" "}
            <Link
              href={`/pdfview?filing_id=${filing.amends_orig_id.orig_id}&query=${query}&start_date=${start_date}&end_date=${end_date}`}
            >
              {filing.amends_orig_id.human_id}
            </Link>
          </span>
        </div>
      );
    }
  }
  return filing;
}
