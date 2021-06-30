import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlus,
	faArrowRight,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { userContext } from "../../App";

const Details = (props) => {
	const [subDataCollention, setsubDataCollention] = useContext(userContext);
	let allsubData = [...subDataCollention];

	const [checkbox, setCheckbox] = useState(false);
	const handleChange = props.handleChange;

	const element = <FontAwesomeIcon icon={faArrowRight} />;

	const cat = props.list.category_name;
	const subcat = props.list.subcatg;

	const handleADD = (check) => {
		let inputs = document.getElementsByClassName(check);
		if (!checkbox) {
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].checked = true;
				let collect = inputs[i].value;
				allsubData = [...allsubData, collect];
				setsubDataCollention(allsubData);
			}
		} else {
			let addData = [...subDataCollention];
			for (let i = 0; i < inputs.length; i++) {
				let collect = inputs[i].value;
				const index = addData.indexOf(collect);
				if (index > -1) {
					console.log('before a data', addData);
					addData.splice(index, 1);
					console.log('after a data', addData);
					setsubDataCollention(addData);
				}
				inputs[i].checked = false;
			}
		}
		
	};

	return (
		<div className="heding shadow">
			<div class="accordion" id={`accordionExample${props.list.category_id}`}>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id={`flush-headingTwo${props.list.category_id}`}
					>
						<label
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={`#collapseTwo${props.list.category_id}`}
							aria-expanded="false"
							aria-controls={`collapseTwo${props.list.category_id}`}
							for={`SaccordionExample${props.list.category_id}`}
						>
							<input
								type="checkbox"
								onChange={() => handleADD(`a${props.list.category_id}`)}
								onClick={() => setCheckbox(!checkbox)}
								id={`SaccordionExample${props.list.category_id}`}
							/>
							<span className="icon">{element}</span>
							{cat}{" "}
						</label>
					</h2>
					<div
						id={`collapseTwo${props.list.category_id}`}
						class="accordion-collapse collapse"
						aria-labelledby={`flush-headingTwo${props.list.category_id}`}
						data-bs-parent={`#accordionExample${props.list.category_id}`}
					>
						<div class="accordion-body">
							{subcat.map((sb) => (
								<div className="hide">
									<div class="form-check formback">
										<input
											class={`form-check-input a${props.list.category_id}`}
											type="checkbox"
											value={sb.sub_category_name}
											id={`flexCheckChecked${sb.sub_category_id}`}
											onChange={() => handleChange(sb.sub_category_name)}
										/>
										<label
											class="form-check-label fromblock"
											for={`flexCheckChecked${sb.sub_category_id}`}
										>
											{sb.sub_category_name}
										</label>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
