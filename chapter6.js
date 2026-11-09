var C6={n:6,title:"Orthogonality and least squares",
sec:[
["6.1 Inner product, length and orthogonality","Dot product, norm, orthogonal complement",`
<p>For u, v in ℝⁿ, the <b>inner product</b> is u·v = uᵀv = u₁v₁ + … + uₙvₙ. The <b>length</b> is ‖v‖ = √(v·v), the <b>distance</b> between u and v is ‖u − v‖, and u, v are <b>orthogonal</b> if u·v = 0.</p>
<p>Example: u = (1, −2, 2), v = (3, 0, −4). Then u·v = −5, ‖u‖ = 3, ‖v‖ = 5 and the distance is ‖(−2, −2, 6)‖ = √44.</p>
<p><b>Theorem 1 (Pythagoras).</b> u ⊥ v if and only if ‖u + v‖² = ‖u‖² + ‖v‖².</p>
<details><summary>Proof</summary><p>‖u + v‖² = (u + v)·(u + v) = ‖u‖² + 2u·v + ‖v‖². The cross term vanishes exactly when u·v = 0. ∎</p></details>
<p><b>Theorem 2 (Cauchy–Schwarz).</b> |u·v| ≤ ‖u‖‖v‖.</p>
<details><summary>Proof</summary><p>If v = 0 both sides are 0. Otherwise let z = u − ((u·v)/(v·v))v. Then 0 ≤ z·z = u·u − (u·v)²/(v·v), so (u·v)² ≤ ‖u‖²‖v‖². ∎</p></details>
<p>Consequently ‖u + v‖² = ‖u‖² + 2u·v + ‖v‖² ≤ (‖u‖ + ‖v‖)², which is the <b>triangle inequality</b> ‖u + v‖ ≤ ‖u‖ + ‖v‖.</p>
<p>The <b>orthogonal complement</b> W^⊥ is the set of vectors orthogonal to every vector in W. It is a subspace.</p>
<p><b>Theorem 3.</b> (Row A)^⊥ = Nul A and (Col A)^⊥ = Nul Aᵀ.</p>
<details><summary>Proof</summary><p>x is in Nul A exactly when Ax = 0, that is, when every row of A has dot product 0 with x, that is, when x is orthogonal to every row, hence to Row A. Apply this to Aᵀ for the second claim, since Col A = Row Aᵀ. ∎</p></details>
<div class="note"><b>Notable points.</b> dim W + dim W^⊥ = n and (W^⊥)^⊥ = W. The zero vector is orthogonal to everything. To find W^⊥ for W = Span{w₁, …, wₖ}, solve the system x·wᵢ = 0.</div>`],
["6.2 Orthogonal sets and orthogonal matrices","Independence, weights, orthonormal columns",`
<p>A set {u₁, …, uₚ} is <b>orthogonal</b> if uᵢ·uⱼ = 0 for i ≠ j. It is <b>orthonormal</b> if also each vector has length 1.</p>
<p><b>Theorem 4.</b> An orthogonal set of nonzero vectors is linearly independent.</p>
<details><summary>Proof</summary><p>If c₁u₁ + … + cₚuₚ = 0, take the dot product with uⱼ. All terms vanish except cⱼ(uⱼ·uⱼ), so cⱼ(uⱼ·uⱼ) = 0. As uⱼ ≠ 0, cⱼ = 0 for every j. ∎</p></details>
<p><b>Theorem 5.</b> If {u₁, …, uₚ} is an orthogonal basis of W, every y in W equals c₁u₁ + … + cₚuₚ with <b>cⱼ = (y·uⱼ)/(uⱼ·uⱼ)</b>.</p>
<details><summary>Proof</summary><p>Dot y = Σcᵢuᵢ with uⱼ to get y·uⱼ = cⱼ(uⱼ·uⱼ), then solve for cⱼ. ∎</p></details>
<p>Example: {(1, 1, 1), (1, −2, 1), (1, 0, −1)} is orthogonal, and y = (3, −1, 5) has weights 7/3, 5/3, −1.</p>
<p><b>Theorem 6.</b> An m×n matrix U has orthonormal columns if and only if UᵀU = I. Then ‖Ux‖ = ‖x‖ and (Ux)·(Uy) = x·y.</p>
<details><summary>Proof</summary><p>The (i, j) entry of UᵀU is uᵢ·uⱼ, which is 1 if i = j and 0 otherwise exactly when the columns are orthonormal. Then ‖Ux‖² = (Ux)ᵀ(Ux) = xᵀUᵀUx = xᵀx = ‖x‖², and similarly for dot products. ∎</p></details>
<div class="note"><b>Notable points.</b> A square matrix with orthonormal columns is called an <b>orthogonal matrix</b>: U⁻¹ = Uᵀ, its rows are orthonormal too, det U = ±1, and every eigenvalue has absolute value 1. Products and inverses of orthogonal matrices are orthogonal. Rotations and reflections are orthogonal.</div>`],
["6.3 Orthogonal projections","Decomposition, best approximation, projection matrix",`
<p>Let W be a subspace with orthogonal basis {u₁, …, uₚ}. The <b>orthogonal projection</b> of y onto W is <b>ŷ = (y·u₁/u₁·u₁)u₁ + … + (y·uₚ/uₚ·uₚ)uₚ</b>.</p>
<p><b>Theorem 7 (Orthogonal Decomposition).</b> Every y in ℝⁿ can be written uniquely as y = ŷ + z with ŷ in W and z in W^⊥.</p>
<details><summary>Proof</summary><p>Existence: take ŷ as above and z = y − ŷ. Then z·uⱼ = y·uⱼ − (y·uⱼ/uⱼ·uⱼ)(uⱼ·uⱼ) = 0 for each j, so z is in W^⊥. Uniqueness: if ŷ + z = ŷ₁ + z₁, then ŷ − ŷ₁ = z₁ − z lies in both W and W^⊥. A vector orthogonal to itself is 0, so the decompositions agree. ∎</p></details>
<p><b>Theorem 8 (Best Approximation).</b> ŷ is the closest point of W to y: ‖y − ŷ‖ &lt; ‖y − v‖ for every v in W with v ≠ ŷ.</p>
<details><summary>Proof</summary><p>y − v = (y − ŷ) + (ŷ − v), where y − ŷ is in W^⊥ and ŷ − v is in W, so they are orthogonal. By Pythagoras ‖y − v‖² = ‖y − ŷ‖² + ‖ŷ − v‖², and the last term is positive when v ≠ ŷ. ∎</p></details>
<p>Example: y = (7, 6) onto u = (4, 2): ŷ = (40/20)u = (8, 4), z = (−1, 2), and the distance from y to the line is ‖z‖ = √5.</p>
<p><b>Projection matrix.</b> If U has orthonormal columns spanning W, then proj<sub>W</sub> y = UUᵀy. The matrix P = UUᵀ satisfies P² = P = Pᵀ, and for a unit vector u the projection onto the line is uuᵀ.</p>
<div class="note"><b>Notable points.</b> The distance from y to W is ‖y − ŷ‖. If y is already in W, then ŷ = y. ‖ŷ‖ ≤ ‖y‖. The reflection across W is 2P − I, which is orthogonal.</div>`],
["6.4 The Gram–Schmidt process and QR","Orthogonalizing a basis",`
<p>Given a basis {x₁, …, xₚ} of W, <b>Gram–Schmidt</b> produces an orthogonal basis:</p>
<pre>v₁ = x₁
v₂ = x₂ − (x₂·v₁ / v₁·v₁) v₁
v₃ = x₃ − (x₃·v₁ / v₁·v₁) v₁ − (x₃·v₂ / v₂·v₂) v₂   and so on</pre>
<p>Then Span{v₁, …, vₖ} = Span{x₁, …, xₖ} for every k. Dividing each vᵢ by its length gives an orthonormal basis.</p>
<details><summary>Why it works</summary><p>Each vₖ is xₖ minus its projection onto Span{v₁, …, vₖ₋₁}, so by the Decomposition Theorem vₖ is orthogonal to the earlier vectors. It is nonzero because xₖ is not in the span of x₁, …, xₖ₋₁. ∎</p></details>
<p>Example: x₁ = (1, 1, 0), x₂ = (1, 0, 1) give v₁ = (1, 1, 0) and v₂ = (1, 0, 1) − ½(1, 1, 0) = (½, −½, 1).</p>
<p><b>Theorem 9 (QR factorization).</b> If A is m×n with independent columns, then A = QR where Q has orthonormal columns spanning Col A and R is an invertible upper triangular n×n matrix with positive diagonal entries.</p>
<details><summary>Proof</summary><p>Apply Gram–Schmidt to the columns and normalize to get q₁, …, qₙ. Since a_k lies in Span{q₁, …, qₖ}, a_k = r₁ₖq₁ + … + rₖₖqₖ, which says A = QR with R upper triangular. Here rₖₖ = ‖vₖ‖ &gt; 0 (the length of the component of aₖ orthogonal to the earlier columns). Since QᵀQ = I, R = QᵀA. ∎</p></details>
<div class="note"><b>Notable points.</b> The QR factorization with positive diagonal is unique. For square A, |det A| equals the product of the diagonal entries of R. QR is the numerically stable way to solve least-squares problems.</div>`],
["6.5 Least-squares problems","Normal equations and QR",`
<p>When Ax = b has no solution, a <b>least-squares solution</b> x̂ makes ‖b − Ax̂‖ as small as possible.</p>
<p><b>Theorem 10.</b> x̂ is a least-squares solution of Ax = b if and only if it solves the <b>normal equations</b> AᵀAx̂ = Aᵀb.</p>
<details><summary>Proof</summary><p>The closest point of Col A to b is b̂ = proj<sub>Col A</sub> b (Theorem 8). So x̂ is least-squares exactly when Ax̂ = b̂, which happens exactly when b − Ax̂ is orthogonal to Col A, that is, to every column of A. That says Aᵀ(b − Ax̂) = 0, which rearranges to AᵀAx̂ = Aᵀb. ∎</p></details>
<p><b>Theorem 11.</b> AᵀA is invertible if and only if the columns of A are linearly independent. Then the least-squares solution is unique: x̂ = (AᵀA)⁻¹Aᵀb.</p>
<details><summary>Proof</summary><p>If AᵀAx = 0 then xᵀAᵀAx = ‖Ax‖² = 0, so Ax = 0. If the columns are independent this forces x = 0, so AᵀA is invertible. Conversely, if Ax = 0 for some x ≠ 0 then AᵀAx = 0, so AᵀA is not invertible. ∎</p></details>
<p>Example: A = [1 −6; 1 −2; 1 1; 1 7], b = (−1, 2, 1, 6). AᵀA = [4 0; 0 90] and Aᵀb = (8, 45), so x̂ = (2, 1/2).</p>
<p><b>With QR.</b> If A = QR, then x̂ = R⁻¹Qᵀb, which is solved by back substitution and avoids forming AᵀA.</p>
<div class="note"><b>Notable points.</b> The least-squares error is ‖b − Ax̂‖. If the columns are dependent, there are infinitely many least-squares solutions (all give the same Ax̂). Ax̂ is the projection of b onto Col A, regardless of which x̂ you pick.</div>`],
["6.6 Applications to linear models","Fitting lines and curves",`
<p>To fit y = β₀ + β₁t to data (t₁, y₁), …, (tₙ, yₙ), set up the <b>design matrix</b> X with rows (1, tᵢ), the parameter vector β = (β₀, β₁) and the observation vector y. The least-squares line solves XᵀXβ = Xᵀy.</p>
<p>Example: data (1, 1), (2, 2), (3, 2). Then XᵀX = [3 6; 6 14], Xᵀy = (5, 11), giving β = (2/3, 1/2), so y = 2/3 + t/2. The residual vector is (−1/6, 1/3, −1/6) and the least-squares error is √(1/6).</p>
<p><b>Other models.</b> To fit y = β₀ + β₁t + β₂t², use rows (1, tᵢ, tᵢ²). To fit y = ae^(bt), take logarithms: ln y = ln a + bt, which is linear in (ln a, b). In general, any model linear in its parameters leads to a design matrix.</p>
<details><summary>Fact about the line</summary><p>The first normal equation says Σ(yᵢ − β₀ − β₁tᵢ) = 0, which means the line passes through the point of averages (t̄, ȳ). The slope turns out to be Σ(tᵢ − t̄)(yᵢ − ȳ) / Σ(tᵢ − t̄)².</p></details>
<div class="note"><b>Notable points.</b> Centering the data (subtracting the means) makes XᵀX diagonal and the normal equations easy. A higher-degree polynomial always fits at least as well but may fit the noise. The least-squares error never increases when you add a term to the model.</div>`],
["6.7 Inner product spaces","Inner products on function spaces",`
<p>An <b>inner product</b> on a vector space V assigns a real number ⟨u, v⟩ to each pair, with (1) ⟨u, v⟩ = ⟨v, u⟩, (2) ⟨u + v, w⟩ = ⟨u, w⟩ + ⟨v, w⟩, (3) ⟨cu, v⟩ = c⟨u, v⟩, and (4) ⟨u, u⟩ ≥ 0 with equality only when u = 0. The norm is ‖u‖ = √⟨u, u⟩.</p>
<p>Examples: on ℝ², ⟨u, v⟩ = 4u₁v₁ + 5u₂v₂ is an inner product. On C[a, b], ⟨f, g⟩ = ∫ₐᵇ f(t)g(t) dt. On matrices, ⟨A, B⟩ = tr(AᵀB).</p>
<p>The proofs of Cauchy–Schwarz, the triangle inequality, Pythagoras, orthogonal decomposition, best approximation and Gram–Schmidt use only the four axioms, so they hold in every inner product space.</p>
<p>Example: on P₂ with ⟨p, q⟩ = ∫₋₁¹ p q dt, Gram–Schmidt on {1, t, t²} gives the orthogonal polynomials 1, t, t² − 1/3 (the Legendre polynomials up to scaling).</p>
<div class="note"><b>Notable points.</b> Different inner products on the same space give different notions of length and angle. The best approximation of f by a polynomial of degree ≤ n is its orthogonal projection onto Pₙ. For ⟨f, g⟩ = ∫₀¹ f g, the closest degree ≤ 1 polynomial to t² is t − 1/6.</div>`],
["6.8 Applications of inner product spaces","Weighted least squares and Fourier series",`
<p><b>Weighted least squares.</b> To weight observation i by wᵢ &gt; 0, use the inner product ⟨y, z⟩ = Σwᵢyᵢzᵢ. With W = diag(w₁, …, wₘ), the normal equations become AᵀWAx = AᵀWb.</p>
<p><b>Fourier series.</b> In C[0, 2π] with ⟨f, g⟩ = ∫ f(t)g(t) dt over [0, 2π], the set {1, cos t, sin t, cos 2t, sin 2t, …} is orthogonal. The projection of f onto the span of the first terms (a <b>trigonometric polynomial</b> of order n) is the best approximation of f in the mean-square sense, with coefficients aₖ = (1/π)∫ f cos kt dt and bₖ = (1/π)∫ f sin kt dt.</p>
<p>Example: for f(t) = t on [−π, π] (same orthogonality holds on this interval), the coefficients are bₖ = (2/k)(−1)ᵏ⁺¹ and aₖ = 0, so f ≈ 2 sin t − sin 2t + (2/3) sin 3t − …</p>
<div class="note"><b>Notable points.</b> Bessel's inequality: for an orthonormal set, Σ⟨y, uᵢ⟩² ≤ ‖y‖². For a full Fourier series, equality holds (Parseval), and with f(t) = t it gives Σ 1/k² = π²/6. The orthogonality of sines and cosines is what makes each coefficient independent of the others.</div>`]],
pr:[
["For u = (1, −2, 2) and v = (3, 0, −4), find u·v, ‖u‖, ‖v‖ and the distance between them.","u·v = 3 + 0 − 8 = −5. ‖u‖ = √9 = 3. ‖v‖ = √25 = 5. u − v = (−2, −2, 6), so the distance is √(4 + 4 + 36) = √44."],
["Find the projection of y = (7, 6) onto u = (4, 2) and the distance from y to the line.","ŷ = (y·u / u·u)u = (40/20)u = (8, 4). z = y − ŷ = (−1, 2), so the distance is ‖z‖ = √5."],
["Apply Gram–Schmidt to x₁ = (1, 1, 0), x₂ = (1, 0, 1).","v₁ = (1, 1, 0). x₂·v₁ = 1 and v₁·v₁ = 2, so v₂ = (1, 0, 1) − ½(1, 1, 0) = (½, −½, 1). Check v₁·v₂ = ½ − ½ = 0."],
["Find a QR factorization of A = [1 1; 1 0; 0 1].","q₁ = (1, 1, 0)/√2. a₂·q₁ = 1/√2, so v₂ = (1, 0, 1) − ½(1, 1, 0) = (½, −½, 1) with ‖v₂‖ = √6/2, and q₂ = (1, −1, 2)/√6. R = QᵀA = [√2 √2/2; 0 √6/2]."],
["Find the least-squares line through (1, 1), (2, 2), (3, 2).","A = [1 1; 1 2; 1 3], b = (1, 2, 2). AᵀA = [3 6; 6 14], Aᵀb = (5, 11). The solution is x̂ = (2/3, 1/2), so y = 2/3 + t/2. The error is √(1/6)."],
["Show that {(1, 1, 1), (1, −2, 1), (1, 0, −1)} is orthogonal and write y = (3, −1, 5) in terms of it.","The three dot products are 1 − 2 + 1 = 0, 1 − 1 = 0, 1 − 1 = 0. Weights: 7/3, 10/6 = 5/3, and −2/2 = −1. Check: (7/3)(1,1,1) + (5/3)(1,−2,1) − (1,0,−1) = (3, −1, 5)."]],
pb:(typeof P6!=="undefined"?P6:[]),
qz:[["The vectors (1, 2) and (2, −1) are…",["Orthogonal","Parallel","Both zero","Unit vectors"],0],
["If U has orthonormal columns, then ‖Ux‖ equals…",["‖x‖","2‖x‖","0","‖x‖²"],0],
["The normal equations for Ax = b are…",["AAᵀx = b","AᵀAx = Aᵀb","Ax = Aᵀb","AᵀA = b"],1],
["The orthogonal projection of y onto a subspace W is…",["The point of W closest to y","The point of W farthest from y","Always y itself","Always 0"],0]],
sb:[["Prove that an orthogonal set of nonzero vectors is linearly independent.","Suppose c₁u₁ + … + cₚuₚ = 0. Dot with uⱼ: since uᵢ·uⱼ = 0 for i ≠ j, only cⱼ(uⱼ·uⱼ) survives, so cⱼ(uⱼ·uⱼ) = 0. As uⱼ ≠ 0, uⱼ·uⱼ ≠ 0, so cⱼ = 0 for every j."],
["Find the least-squares line through (1, 1), (2, 2), (3, 2).","A = [1 1; 1 2; 1 3], b = (1, 2, 2). AᵀA = [3 6; 6 14] and Aᵀb = (5, 11). Solving 3β₀ + 6β₁ = 5 and 6β₀ + 14β₁ = 11 gives β₁ = 1/2, β₀ = 2/3. The line is y = 2/3 + t/2."],
["Prove that if AᵀAx̂ = Aᵀb then x̂ is a least-squares solution of Ax = b.","Rearranging, Aᵀ(b − Ax̂) = 0, so b − Ax̂ is orthogonal to every column of A, hence to Col A. Then b = Ax̂ + (b − Ax̂) is the orthogonal decomposition of b relative to Col A, so Ax̂ is the closest point of Col A to b by the Best Approximation Theorem."]]};
