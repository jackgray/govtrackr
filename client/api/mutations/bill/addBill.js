import gql from 'graphql-tag';
import ALL_BILLS from '../../queries/bill/allBills';
// import {BILLS_LIMIT} from '../../constants'

export const ADD_BILL = gql`
	mutation addBill($code: String!, $title: String!, $summary: String) {
		addBill(code: $code, title: $title, summary: $summary) {
			id
			code
			title
			summary
		}
	}
`;
